import { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import UserService from '../services/userService.js';
import { formatCurrency } from '../currency.js';

export default function ProfilePage() {
  const { currentUser, refresh } = useAuth();
  const [email, setEmail] = useState(currentUser.email);
  const [telefon, setTelefon] = useState(currentUser.telefon || '');
  const [saved, setSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    UserService.updateProfile(currentUser.code, { email, telefon });
    refresh();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="page">
      <section className="page__intro">
        <p className="app__eyebrow">Profil</p>
        <h1 className="app__title">{currentUser.name}</h1>
        <p className="app__subtitle">Informations et coordonnées du compte.</p>
      </section>

      <div className="app__grid">
        <div className="account-card">
          <h3 className="transactions__title">Coordonnées</h3>
          <form className="login__form" onSubmit={handleSubmit}>
            <label className="field">
              <span>E-mail</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="field">
              <span>Téléphone</span>
              <input type="tel" value={telefon} onChange={(e) => setTelefon(e.target.value)} />
            </label>
            <button type="submit" className="btn btn--primary">
              Enregistrer
            </button>
            {saved && <p className="login__success">Profil mis à jour.</p>}
          </form>
        </div>

        <div className="account-card">
          <h3 className="transactions__title">Détails du compte</h3>
          <dl className="account-card__meta">
            <div>
              <dt>Numéro de compte</dt>
              <dd>{currentUser.kontonummer}</dd>
            </div>
            <div>
              <dt>Agence</dt>
              <dd>{currentUser.filiale}</dd>
            </div>
            <div>
              <dt>Ouvert le</dt>
              <dd>{currentUser.eroeffnungsdatum}</dd>
            </div>
            <div>
              <dt>Devise du compte</dt>
              <dd>{currentUser.waehrung}</dd>
            </div>
            <div>
              <dt>Solde actuel</dt>
              <dd>{formatCurrency(currentUser.kontostand, currentUser.waehrung)}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
