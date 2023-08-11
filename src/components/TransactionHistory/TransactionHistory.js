import PropTypes from 'prop-types';
import {
  Table,
  Colums,
  HistoryTh,
  HistoryTr,
  BodyTr,
  TnansTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TnansTd>
        <HistoryTr>
          <HistoryTh>Type</HistoryTh>
          <HistoryTh>Amount</HistoryTh>
          <HistoryTh>Currency</HistoryTh>
        </HistoryTr>
      </TnansTd>
      <tbody>{items.map(transactionItems)}</tbody>
    </Table>
  );
};

function transactionItems({ id, type, amount, currency }) {
  return (
    <BodyTr key={id}>
      <Colums>{type}</Colums>
      <Colums>{amount}</Colums>
      <Colums>{currency}</Colums>
    </BodyTr>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
