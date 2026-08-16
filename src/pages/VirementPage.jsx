import { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import UserService from '../services/userService.js';
import { formatCurrency } from '../currency.js';

export default function VirementPage() {
  const { currentUser, refresh } = useAuth();
  const [destinationType, setDestinationType] = useState('kleos'); // 'kleos' | 'extern'
  const [toCode, setToCode] = useState('');
  const [empfaengerLabel, setEmpfaengerLabel] = useState('');
  const [betrag, setBetrag] = useState('');
  const [verwendungszweck, setVerwendungszweck] = useState('');
  const [feedback, setFeedback] = useState(null);

  const otherAccounts = UserService.getAllUsers().filter((u) => u.code !== currentUser.code);

  function handleSubmit(e) {
    e.preventDefault();
    setFeedback(null);

    const result = UserService.transferFunds({
      fromCode: currentUser.code,
      toCode: destinationType === 'kleos' ? toCode : null,
      empfaengerLabel: destinationType === 'extern' ? empfaengerLabel : null,
      betrag,
      verwendungszweck
    });

    if (result.success) {
      refresh();
      setFeedback({ type: 'success', message: 'Virement exécuté.' });
      setBetrag('');
      setVerwendungszweck('');
    } else {
      setFeedback({ type: 'error', message: result.message });
    }
  }

  return (
    <div className="page">
      <section className="page__intro">
        <p className="app__eyebrow">Virement</p>
        <h1 className="app__title">Envoyer de l'argent</h1>
        <p className="app__subtitle">
          Solde disponible : {formatCurrency(currentUser.kontostand, currentUser.waehrung)}
        </p>
      </section>

      <div className="page__single">
        <form className="login__form virement-form" onSubmit={handleSubmit}>
          <div className="virement-toggle">
            <button
              type="button"
              className={destinationType === 'kleos' ? 'is-active' : ''}
              onClick={() => setDestinationType('kleos')}
            >
              Vers un compte Raiffeisen Banque
            </button>
            <button
              type="button"
              className={destinationType === 'extern' ? 'is-active' : ''}
              onClick={() => setDestinationType('extern')}
            >
              Vers un bénéficiaire externe
            </button>
          </div>

          {destinationType === 'kleos' ? (
            <label className="field">
              <span>Compte bénéficiaire</span>
              <select value={toCode} onChange={(e) => setToCode(e.target.value)} required>
                <option value="" disabled>
                  Choisir un compte
                </option>
                {otherAccounts.map((u) => (
                  <option key={u.code} value={u.code}>
                    {u.name}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <label className="field">
              <span>Nom du bénéficiaire</span>
              <input
                type="text"
                value={empfaengerLabel}
                onChange={(e) => setEmpfaengerLabel(e.target.value)}
                placeholder="ex. propriétaire, fournisseur d'électricité, etc."
                required
              />
            </label>
          )}

          <label className="field">
            <span>Montant ({currentUser.waehrung})</span>
            <input
              type="number"
              min="0"
              step="0.01"
              value={betrag}
              onChange={(e) => setBetrag(e.target.value)}
              placeholder="0.00"
              required
            />
          </label>

          <label className="field">
            <span>Motif (facultatif)</span>
            <input
              type="text"
              value={verwendungszweck}
              onChange={(e) => setVerwendungszweck(e.target.value)}
              placeholder="ex. loyer août"
            />
          </label>

          {feedback && (
            <p className={feedback.type === 'success' ? 'login__success' : 'login__error'}>
              {feedback.message}
            </p>
          )}

          <button type="submit" className="btn btn--primary">
            Confirmer le virement
          </button>
        </form>
      </div>
    </div>
  );
}
