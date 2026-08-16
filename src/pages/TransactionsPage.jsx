import { useAuth } from '../context/AuthContext.jsx';
import TransactionList from '../components/TransactionList.jsx';

export default function TransactionsPage() {
  const { currentUser } = useAuth();

  return (
    <div className="page">
      <section className="page__intro">
        <p className="app__eyebrow">Historique</p>
        <h1 className="app__title">Toutes les transactions</h1>
        <p className="app__subtitle">{currentUser.transaktionen.length} opération(s) enregistrée(s).</p>
      </section>

      <div className="page__single">
        <TransactionList account={currentUser} />
      </div>
    </div>
  );
}
