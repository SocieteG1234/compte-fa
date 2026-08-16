import { convertAmount, formatCurrency } from '../currency.js';

export default function AccountCard({ account, displayCurrency }) {
  const convertedBalance = convertAmount(account.kontostand, account.waehrung, displayCurrency);

  return (
    <article className="account-card">
      <header className="account-card__header">
        <div>
          <p className="account-card__eyebrow">Titulaire du compte</p>
          <h2 className="account-card__name">{account.name}</h2>
        </div>
        <span className={`status-badge status-badge--${account.status}`}>
          {account.status === 'actif' ? 'Compte actif' : account.status}
        </span>
      </header>

      <div className="account-card__balance">
        <span className="account-card__balance-value">
          {formatCurrency(convertedBalance, displayCurrency)}
        </span>
        {displayCurrency !== account.waehrung && (
          <span className="account-card__balance-native">
            équivaut à {formatCurrency(account.kontostand, account.waehrung)} dans la devise du compte
          </span>
        )}
      </div>

      <dl className="account-card__meta">
        <div>
          <dt>Numéro de compte</dt>
          <dd>{account.kontonummer}</dd>
        </div>
        <div>
          <dt>Agence</dt>
          <dd>{account.filiale}</dd>
        </div>
        <div>
          <dt>Ouvert le</dt>
          <dd>{account.eroeffnungsdatum}</dd>
        </div>
      </dl>
    </article>
  );
}
