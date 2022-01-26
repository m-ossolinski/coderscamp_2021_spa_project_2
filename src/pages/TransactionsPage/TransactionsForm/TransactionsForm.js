import { StyledTransactionForm } from "./TransactionsForm.styled";
import { DatePicker } from "../../../components/form/DatePicker/DatePicker";
import { Input } from "../../../components/form/Input/Input";
import { RadioButton } from "../../../components/form/RadioButton/RadioButton";
import { Dropdown } from "../../../components/form/Dropdown/Dropdown";
import { Button } from "../../../components/Button/Button";
import { useInputState } from "../../../services/hooks/useInputState";
import { useState, useEffect, useRef } from "react";
import { validate } from "../../../services/helpers/formValidationRules";

export const TransactionForm = (closeModal) => {
  const [title, setTitle] = useInputState("");
  const [description, setDescription] = useInputState("");
  const [amount, setAmount] = useInputState(0);
  const [type, setType] = useInputState("income");
  const [date, setDate] = useInputState("");
  const [category, setCategory] = useState("select");
  const [paymentType, setPaymentType] = useInputState("cash");
  const [formErrors, setFormErrors] = useState({});
  const [isTouched, setIsTouched] = useState({
    title: false,
    description: false,
    amount: false,
    date: false,
    category: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsTouched({
      title: true,
      description: true,
      amount: true,
      date: true,
      category: true,
    });
    validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("form submitted");
    }
    return;
    // pass object to json-server or somewhere else, will add later
    // closeModal();
  };

  const handleBlur = (field) => {
    setIsTouched((values) => ({ ...values, [field]: true }));
  };

  const validateForm = () => {
    const formValues = {
      title: title,
      description: description,
      amount: amount,
      date: date,
      category: category,
    };
    const errors = validate(formValues);
    setFormErrors(errors);
  };

  useEffect(() => {
    validateForm();
  }, [title, description, amount, date, category]);

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
        errorMessage={formErrors["title"]}
        isTouched={isTouched}
        handleBlur={handleBlur}
      />
      <Input
        type="text"
        label={"Description:"}
        field={"description"}
        value={description}
        handleChange={setDescription}
        errorMessage={formErrors["description"]}
        isTouched={isTouched}
        handleBlur={handleBlur}
      />
      <Dropdown
        options={["rent", "clothes", "food"]}
        name={category}
        field="category"
        handleChange={setCategory}
        label={"Category:"}
        errorMessage={formErrors["category"]}
        isTouched={isTouched}
        handleBlur={handleBlur}
      />
      <Input
        type="number"
        label={"Paid:"}
        field={"amount"}
        value={amount}
        handleChange={setAmount}
        errorMessage={formErrors["amount"]}
        isTouched={isTouched}
        handleBlur={handleBlur}
      />
      <DatePicker
        field="date"
        value={date}
        handleChange={setDate}
        errorMessage={formErrors["date"]}
        isTouched={isTouched}
        handleBlur={handleBlur}
      />
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
        <Button type="button" handleClick={handleCloseModal}>
          Cancel
        </Button>
      </div>
    </StyledTransactionForm>
  );
};
