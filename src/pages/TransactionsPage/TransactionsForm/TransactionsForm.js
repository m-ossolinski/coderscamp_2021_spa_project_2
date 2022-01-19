import { StyledTransactionForm } from "./TransactionsForm.styled";
import { DatePicker } from "../../../components/form/DatePicker/DatePicker";
import { TimePicker } from "../../../components/form/TimePicker/TimePicker";
import { TextInput } from "../../../components/form/TextInput/TextInput";
import { RadioInput } from "../../../components/form/RadioInput/RadioInput";

export const TransactionForm = () => {
  return (
    <StyledTransactionForm>
      <div>
        <h2>Enter new transaction</h2>
        <span>x</span>
      </div>

      <div>
        <TextInput label={"Transaction title:"} name={"title"} />
        <RadioInput
          options={["income", "expense"]}
          name={"transaction-type"}
          label={""}
        />
        <div>
          <DatePicker />
          <TimePicker />
        </div>
        <TextInput label={"Description:"} name={"description"} />
        <RadioInput
          options={["cash", "debit card", "credit card"]}
          name={"payment-type"}
          label={"Payment type:"}
        />
      </div>
    </StyledTransactionForm>
  );
};
