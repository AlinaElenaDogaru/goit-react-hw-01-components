import data from '../transactions.json';
import PropTypes from 'prop-types';
import css from './Transactions.module.css';

const TransactionHistory = ({ transactionList }) => {
  transactionList = {
    type: 'Type',
    amount: 'Amount',
    currency: 'Currency',
  };
  return (
    <table className={css.transactionsHistory}>
      <thead>
        <tr key={data.id}>
          <th>{transactionList.type}</th>
          <th>{transactionList.amount}</th>
          <th>{transactionList.currency}</th>
        </tr>
      </thead>
      {data.map((item) => {
          return (
              <tbody key={item.id} className={css.tableBody}>
            <tr key={item.id}>
              <td className={css.tableData}>{item.type}</td>
              <td className={css.tableData}>{item.amount}</td>
              <td className={css.tableData}>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};


export default TransactionHistory;