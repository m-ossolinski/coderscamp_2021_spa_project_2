import PropTypes from "prop-types";
import { Typography } from "../../components/common/Typography/Typography";
import { StyledOverview, StyledElement } from "./TransactionsOverview.styled";

const TRANSACTIONS_TYPES = {
  expense: "expense",
  income: "income",
};

const getTotalAmount = (type, transactions) => {
  return transactions
    .filter((el) => el.type === type)
    .map((el) => el.amount)
    .reduce((sum, el) => Number.parseFloat(sum) + Number.parseFloat(el), 0)
    .toFixed(2);
};

export const TransactionOverview = ({ transactionsList }) => {
  const totalExpenses = getTotalAmount(
    TRANSACTIONS_TYPES.expense,
    transactionsList
  );
  const totalIncomes = getTotalAmount(
    TRANSACTIONS_TYPES.income,
    transactionsList
  );
  return (
    <StyledOverview>
      <StyledElement>
        <Typography
          tag="h3"
          size="small"
          weight="400"
          color="#131313"
          transform="uppercase"
        >
          Transactions overview
        </Typography>
      </StyledElement>

      <StyledElement>
        <h5>$ {totalExpenses}</h5>
        <p>Total expenses</p>
      </StyledElement>
      <StyledElement>
        <h5>$ {totalIncomes}</h5>
        <p>Total incomes</p>
      </StyledElement>
      <StyledElement>
        <h5>${(+totalIncomes - +totalExpenses).toFixed(2)}</h5>
        <p>Current balance</p>
      </StyledElement>
      <StyledElement>
        <h5>{transactionsList.length}</h5>
        <p>Total transactions</p>
      </StyledElement>
    </StyledOverview>
  );
};

TransactionOverview.propTypes = {
  transactionsList: PropTypes.array,
};
