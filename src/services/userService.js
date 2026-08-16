import StorageService from './storage.js';
import { initialUsers, DATA_VERSION } from '../data.js';
import { convertAmount } from '../currency.js';

const USERS_KEY = 'raiffeisenUsers';
const VERSION_KEY = 'raiffeisenDataVersion';
const SESSION_KEY = 'raiffeisenSessionCode';

function heutigesDatum() {
  const d = new Date();
  return d.toLocaleDateString('fr-CH');
}

const UserService = {
  /**
   * Initialise (ou réinitialise) les données de compte dans le localStorage.
   */
  initializeUsers() {
    const storedVersion = StorageService.get(VERSION_KEY);
    const stored = StorageService.get(USERS_KEY);

    if (storedVersion !== DATA_VERSION || !stored) {
      StorageService.set(USERS_KEY, initialUsers);
      StorageService.set(VERSION_KEY, DATA_VERSION);
      StorageService.delete(SESSION_KEY);
      return initialUsers;
    }

    return stored;
  },

  getAllUsers() {
    return StorageService.get(USERS_KEY) || [];
  },

  getUserByCode(code) {
    const users = this.getAllUsers();
    return users.find((u) => u.code === code) || null;
  },

  /**
   * Vérifie l'identifiant et le mot de passe, puis ouvre la session en cas de succès.
   */
  login(code, passwort) {
    const users = this.getAllUsers();
    const user = users.find((u) => u.code === code.trim().toLowerCase());

    if (!user) {
      return { success: false, message: 'Identifiant inconnu.' };
    }

    if (String(user.passwort) !== String(passwort)) {
      return { success: false, message: 'Mot de passe incorrect.' };
    }

    StorageService.set(SESSION_KEY, user.code);
    return { success: true, user: { ...user } };
  },

  logout() {
    StorageService.delete(SESSION_KEY);
  },

  /**
   * Restaure la session si un utilisateur est déjà connecté.
   */
  getCurrentUser() {
    const code = StorageService.get(SESSION_KEY);
    if (!code) return null;
    return this.getUserByCode(code);
  },

  /**
   * Enregistre un utilisateur dans le storage (usage interne).
   */
  _saveUser(updatedUser) {
    const users = this.getAllUsers();
    const index = users.findIndex((u) => u.code === updatedUser.code);
    if (index === -1) return false;
    users[index] = updatedUser;
    StorageService.set(USERS_KEY, users);
    return true;
  },

  /**
   * Effectue un virement depuis le compte `fromCode`.
   * - Si `toCode` correspond à un autre compte Raiffeisen Banque, celui-ci
   *   est crédité.
   * - Sinon, le virement est traité comme sortant vers un bénéficiaire
   *   externe.
   */
  transferFunds({ fromCode, toCode, empfaengerLabel, betrag, verwendungszweck }) {
    const amount = Number(betrag);

    if (!amount || amount <= 0) {
      return { success: false, message: 'Le montant doit être supérieur à zéro.' };
    }

    const sender = this.getUserByCode(fromCode);
    if (!sender) {
      return { success: false, message: 'Compte de l\'expéditeur introuvable.' };
    }

    if (amount > sender.kontostand) {
      return { success: false, message: 'Solde insuffisant pour ce virement.' };
    }

    const empfaenger = toCode ? this.getUserByCode(toCode) : null;
    const label = empfaenger
      ? `Virement à ${empfaenger.name}`
      : `Virement à ${empfaengerLabel || 'un bénéficiaire externe'}`;

    // Débit chez l'expéditeur
    sender.kontostand = Number((sender.kontostand - amount).toFixed(2));
    sender.transaktionen = [
      {
        datum: heutigesDatum(),
        bezeichnung: verwendungszweck ? `${label} — ${verwendungszweck}` : label,
        soll: amount.toFixed(2),
        haben: ''
      },
      ...sender.transaktionen
    ];
    this._saveUser(sender);

    // Crédit chez le bénéficiaire, s'il s'agit d'un compte Raiffeisen Banque
    if (empfaenger) {
      const convertedAmount = convertAmount(amount, sender.waehrung, empfaenger.waehrung);
      empfaenger.kontostand = Number((empfaenger.kontostand + convertedAmount).toFixed(2));
      empfaenger.transaktionen = [
        {
          datum: heutigesDatum(),
          bezeichnung: verwendungszweck
            ? `Virement reçu de ${sender.name} — ${verwendungszweck}`
            : `Virement reçu de ${sender.name}`,
          soll: '',
          haben: convertedAmount.toFixed(2)
        },
        ...empfaenger.transaktionen
      ];
      this._saveUser(empfaenger);
    }

    return { success: true, user: { ...sender } };
  },

  /**
   * Met à jour les données de profil modifiables par l'utilisateur.
   */
  updateProfile(code, { email, telefon }) {
    const user = this.getUserByCode(code);
    if (!user) return { success: false, message: 'Compte introuvable.' };

    if (email !== undefined) user.email = email;
    if (telefon !== undefined) user.telefon = telefon;

    this._saveUser(user);
    return { success: true, user: { ...user } };
  }
};

export default UserService;
