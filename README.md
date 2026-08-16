# Bank Raiffeisen

Application front-end (React + Vite + React Router). Le nom de la banque,
les comptes, les identifiants et les transactions sont **entièrement
fictifs** et illustrent une interface bancaire classique : connexion, vue
d'ensemble, virements, historique et profil — sans compte bloqué ni frais
pour accéder à son propre argent.

## Installation

```bash
npm install
npm run dev
```

Ouvre ensuite le lien affiché dans le terminal (par défaut
http://localhost:5173).

## Comptes

| Identifiant        | Mot de passe |
|---------------------|--------------|
| marie.sylvia        | test1234     |
| jean.patrick         | test1234     |
| laura.fontaine       | test1234     |

Tous les comptes sont en francs suisses (CHF).

## Structure

```
src/
  currency.js                 → formatage des montants en CHF
  data.js                     → comptes (données initiales)
  services/
    storage.js                 → couche localStorage
    userService.js             → connexion, session, virements, profil
  context/
    AuthContext.jsx            → état de connexion global
  components/
    ProtectedRoute.jsx         → redirige vers /connexion si non connecté
    Sidebar.jsx                → navigation entre les pages
    AccountCard.jsx            → carte de solde du compte
    TransactionList.jsx        → liste des opérations
  pages/
    LoginPage.jsx               → connexion
    DashboardPage.jsx           → vue d'ensemble (solde)
    VirementPage.jsx            → envoyer de l'argent (compte Raiffeisen ou externe)
    TransactionsPage.jsx        → historique complet
    ProfilePage.jsx              → coordonnées et détails du compte
  App.jsx / App.css / main.jsx
```

## Fonctionnement

- Les données sont stockées dans le `localStorage` du navigateur (clé
  `raiffeisenUsers`), de sorte que les virements persistent au rechargement
  de la page, mais restent limités à ton navigateur.
- Pour réinitialiser les données, vide le `localStorage` de la page
  (outils de développement du navigateur → Application → Local Storage).
