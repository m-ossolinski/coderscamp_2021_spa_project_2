import { StyledTransactionForm } from "./TransactionsForm.styled";
import { DatePicker } from "../../../components/form/DatePicker/DatePicker";
import { TimePicker } from "../../../components/form/TimePicker/TimePicker";
import { TextInput } from "../../../components/form/TextInput/TextInput";
import { RadioInput } from "../../../components/form/RadioInput/RadioInput";
import { DropdownInput } from "../../../components/form/DropdownInput/DropdownInput";
import { NumberInput } from "../../../components/form/NumberInput/NumberInput";
import { FormButton } from "../../../components/form/FormButton/FormButton";
import { useState } from "react";

export const TransactionForm = () => {
  const [form, setForm] = useState({
    title: "",
    type: "income",
    date: "",
    time: "",
    amount: 0,
    category: "",
    description: "",
    paymentType: "cash",
  });
  console.log(form);

  const handleForm = (field, payload) => {
    setForm((prevState) => ({ ...prevState, [field]: payload }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting the form");
    // validation
    // pass object to json-server
  };
  return (
    <StyledTransactionForm onSubmit={handleSubmit}>
      <TextInput
        label={"Transaction title:"}
        field={"title"}
        handleForm={handleForm}
      />
      <RadioInput
        options={["income", "expense"]}
        field={"type"}
        label={""}
        handleForm={handleForm}
      />
      <div className="TransactionForm-wrapper">
        <DatePicker field={"date"} handleForm={handleForm} />
        <TimePicker field={"time"} handleForm={handleForm} />
      </div>
      <div>
        <DropdownInput
          options={["rent", "clothes", "food"]}
          name={"category"}
          label={"Choose category:"}
        />
        <NumberInput label={"Paid:"} field={"amount"} handleForm={handleForm} />
      </div>
      <TextInput
        label={"Description:"}
        field={"description"}
        handleForm={handleForm}
      />
      <RadioInput
        options={["cash", "debit card", "credit card"]}
        field={"paymenType"}
        label={"Payment type:"}
        handleForm={handleForm}
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
