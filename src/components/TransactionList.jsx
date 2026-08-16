import { formatCurrency } from '../currency.js';

export default function TransactionList({ account }) {
  return (
    <section className="transactions">
      <h3 className="transactions__title">Dernières opérations</h3>
      <ul className="transactions__list">
        {account.transaktionen.map((tx, index) => {
          const isCredit = Boolean(tx.haben);
          const amount = isCredit ? tx.haben : tx.soll;

          return (
            <li key={index} className="transactions__item">
              <div className="transactions__info">
                <span className="transactions__label">{tx.bezeichnung}</span>
                <span className="transactions__date">{tx.datum}</span>
              </div>
              <span className={`transactions__amount ${isCredit ? 'is-credit' : 'is-debit'}`}>
                {isCredit ? '+' : '−'} {formatCurrency(Number(amount), account.waehrung)}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
