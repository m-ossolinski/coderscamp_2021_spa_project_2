import { StyledTransactionForm } from "./TransactionsForm.styled";
import { DatePicker } from "../../../components/form/DatePicker/DatePicker";
import { Input } from "../../../components/form/Input/Input";
import { RadioButton } from "../../../components/form/RadioButton/RadioButton";
import { Dropdown } from "../../../components/form/Dropdown/Dropdown";
import { Button } from "../../../components/Button/Button";
import { useInputState } from "../../../services/hooks/useInputState";
import { useState, useEffect } from "react";

export const TransactionForm = (closeModal) => {
  const [title, setTitle, resetTitle] = useInputState("");
  const [description, setDescription, resetDescription] = useInputState("");
  const [amount, setAmount, resetAmount] = useInputState(0);
  const [type, setType, resetType] = useInputState("income");
  const [date, setDate, resetDate] = useInputState("");
  const [category, setCategory] = useState("select");
  const [paymentType, setPaymentType, resetPaymentType] = useInputState("cash");

  const [formValues, setFormValues] = useState({
    title: title,
    description: description,
    amount: amount,
    type: type,
    date: date,
    category: category,
    paymentType: paymentType,
  });

  useEffect(() => {
    setFormValues({
      title: title,
      description: description,
      amount: amount,
      type: type,
      date: date,
      category: category,
      paymentType: paymentType,
    });
  }, [title, description, amount, type, date, category, paymentType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting the form");
    // validation
    // pass object to json-server or somewhere else, will add later
    // closeModal();
  };

  const resetInputs = () => {
    resetTitle();
    resetDescription();
    resetAmount();
    resetType();
    resetDate();
    setCategory("select");
    resetPaymentType();
  };

  const handleCloseModal = () => {
    // closeModal();
  };

  const paymentOptions = [
    { id: "1-option", type: "cash" },
    { id: "2-option", type: "card" },
  ];
  const paymentTypes = [
    { id: "1-type", type: "income" },
    { id: "2-type", type: "expense" },
  ];

  return (
    <StyledTransactionForm onSubmit={handleSubmit}>
      <Input
        type="text"
        label={"Title:"}
        field={"title"}
        value={title}
        handleChange={setTitle}
      />
      <Input
        type="text"
        label={"Description:"}
        field={"description"}
        value={description}
        handleChange={setDescription}
      />
      <div>
        <Dropdown
          options={["rent", "clothes", "food"]}
          name={category}
          handleChange={setCategory}
          label={"Choose category:"}
        />
        <Input
          type="number"
          label={"Paid:"}
          field={"amount"}
          value={amount}
          handleChange={setAmount}
        />
      </div>
      <DatePicker field={"date"} value={date} handleChange={setDate} />
      <div>
        <RadioButton
          options={paymentOptions}
          field={"paymenType"}
          label={"Paid by:"}
          value={paymentType}
          handleChange={setPaymentType}
        />
        <RadioButton
          options={paymentTypes}
          field={"type"}
          label={"In/out:"}
          value={type}
          handleChange={setType}
        />
      </div>
      <div>
        <Button type="submit">Submit</Button>
        <Button type="button" handleClick={resetInputs}>
          Reset
        </Button>
        <Button type="button" handleClick={handleCloseModal}>
          Cancel
        </Button>
      </div>
    </StyledTransactionForm>
  );
};
