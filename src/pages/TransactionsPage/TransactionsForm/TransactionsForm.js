import { StyledTransactionForm } from "./TransactionsForm.styled";
import { DatePicker } from "../../../components/form/DatePicker/DatePicker";
import { TimePicker } from "../../../components/form/TimePicker/TimePicker";
import { TextInput } from "../../../components/form/TextInput/TextInput";

export const TransactionForm = () => {
  return (
    <StyledTransactionForm>
      <div>
        <h2>Enter new transaction</h2>
        <span>x</span>
      </div>

      <div>
        <DatePicker />
        <TimePicker />
        <TextInput label={"Transaction title:"} name={"title"} />
      </div>
    </StyledTransactionForm>
  );
};
