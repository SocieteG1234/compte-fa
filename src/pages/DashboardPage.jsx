import { useAuth } from '../context/AuthContext.jsx';
import AccountCard from '../components/AccountCard.jsx';
import TransactionList from '../components/TransactionList.jsx';

export default function DashboardPage() {
  const { currentUser } = useAuth();

  return (
    <div className="page">
      <section className="page__intro">
        <p className="app__eyebrow">Vue d'ensemble</p>
        <h1 className="app__title">Bonjour, {currentUser.name.split(' ')[0]}</h1>
        <p className="app__subtitle">Tous les montants sont affichés en francs suisses (CHF).</p>
      </section>

      {currentUser.status && currentUser.status !== 'actif' && (
        <div className="account-alert account-alert--blocked" role="alert">
          <span className="account-alert__icon" aria-hidden="true">⚠</span>
          <div>
            <p className="account-alert__title">Compte bloqué</p>
            <p className="account-alert__text">
              {currentUser.blockReason || 'Contactez votre agence pour plus d\'informations.'}
            </p>
          </div>
        </div>
      )}

      <div className="app__grid">
        <AccountCard account={currentUser} displayCurrency={currentUser.waehrung} />
        <TransactionList
          account={{ ...currentUser, transaktionen: currentUser.transaktionen.slice(0, 5) }}
        />
      </div>
    </div>
  );
}