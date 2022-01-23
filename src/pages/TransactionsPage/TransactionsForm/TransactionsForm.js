import { StyledTransactionForm } from "./TransactionsForm.styled";
import { DatePicker } from "../../../components/form/DatePicker/DatePicker";
import { Input } from "../../../components/form/Input/Input";
import { RadioInput } from "../../../components/form/RadioInput/RadioInput";
import { DropdownInput } from "../../../components/form/DropdownInput/DropdownInput";
import { FormButton } from "../../../components/form/FormButton/FormButton";
import { useInputState } from "../../../services/hooks/useInputState";
import { useState } from "react";

export const TransactionForm = () => {
  const [title, setTitle, resetTitle] = useInputState("");
  const [description, setDescription, resetDescription] = useInputState("");
  const [amount, setAmount, resetAmount] = useInputState(0);
  const [type, setType, resetType] = useInputState("income");
  const [date, setDate, resetDate] = useInputState("");
  const [category, setCategory] = useState("unselected");
  const [paymentType, setPaymentType, resetPaymentType] = useInputState("cash");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting the form");
    // validation
    // pass object to json-server
  };
  return (
    <StyledTransactionForm onSubmit={handleSubmit}>
      <Input
        type={"text"}
        label={"Transaction title:"}
        field={"title"}
        value={title}
        handleChange={setTitle}
      />
      <Input
        type={"text"}
        label={"Description:"}
        field={"description"}
        value={description}
        handleChange={setDescription}
      />
      <DatePicker field={"date"} value={date} handleChange={setDate} />
      <DropdownInput
        options={["rent", "clothes", "food"]}
        name={category}
        handleChange={setCategory}
        label={"Choose category:"}
      />
      <Input
        type={"number"}
        label={"Paid:"}
        field={"amount"}
        value={amount}
        handleChange={setAmount}
      />
      <RadioInput
        options={["cash", "card"]}
        field={"paymenType"}
        label={""}
        value={paymentType}
        handleChange={setPaymentType}
      />
      <RadioInput
        options={["income", "expense"]}
        field={"type"}
        label={""}
        value={type}
        handleChange={setType}
      />
      <div>
        <FormButton type={"submit"}>Submit</FormButton>
        <FormButton
          type={"button"}
          handleClick={() => console.log("closing modal")}
        >
          Cancel
        </FormButton>
      </div>
    </StyledTransactionForm>
  );
};
