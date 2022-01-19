import { StyledTransactionForm } from "./TransactionsForm.styled";
import { DatePicker } from "../../../components/form/DatePicker/DatePicker";
import { TimePicker } from "../../../components/form/TimePicker/TimePicker";
import { TextInput } from "../../../components/form/TextInput/TextInput";
import { RadioInput } from "../../../components/form/RadioInput/RadioInput";
import { DropdownInput } from "../../../components/form/DropdownInput/DropdownInput";
import { NumberInput } from "../../../components/form/NumberInput/NumberInput";

export const TransactionForm = () => {
  return (
    <StyledTransactionForm>
      <TextInput label={"Transaction title:"} name={"title"} />
      <RadioInput
        options={["income", "expense"]}
        name={"transaction-type"}
        label={""}
      />
      <div className="TransactionForm-wrapper">
        <DatePicker />
        <TimePicker />
      </div>
      <div>
        <DropdownInput
          options={["rent", "clothes", "food"]}
          name={"category"}
          label={"Choose category:"}
        />
        <NumberInput label={"Paid:"} name={"amount-paid"} />
      </div>
      <TextInput label={"Description:"} name={"description"} />
      <RadioInput
        options={["cash", "debit card", "credit card"]}
        name={"payment-type"}
        label={"Payment type:"}
      />
    </StyledTransactionForm>
  );
};
