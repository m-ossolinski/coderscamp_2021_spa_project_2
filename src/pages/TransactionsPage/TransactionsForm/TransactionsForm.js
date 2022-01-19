import { StyledTransactionForm } from "./TransactionsForm.styled";
import { DatePicker } from "../../../components/form/DatePicker/DatePicker";

export const TransactionForm = () => {
  return (
    <StyledTransactionForm>
      <div>
        <h2>Enter new transaction</h2>
        <span>x</span>
      </div>

      <div>
        <DatePicker />
      </div>
    </StyledTransactionForm>
  );
};
