import PropTypes from "prop-types";

export const TransactionItem = ({
  category,
  date,
  paymentType,
  description,
  amount,
}) => {
  return (
    <tr>
      <td>{category}</td>
      <td>{date}</td>
      <td>{paymentType}</td>
      <td>{description}</td>
      <td>{amount}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  category: PropTypes.string,
  date: PropTypes.string,
  paymentType: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.string,
};
