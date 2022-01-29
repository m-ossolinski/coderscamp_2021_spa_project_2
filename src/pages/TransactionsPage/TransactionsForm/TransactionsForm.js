import { StyledTransactionForm } from "./TransactionsForm.styled";
import { DatePicker } from "../../../components/form/DatePicker/DatePicker";
import { Input } from "../../../components/form/Input/Input";
import { RadioButton } from "../../../components/form/RadioButton/RadioButton";
import { Dropdown } from "../../../components/form/Dropdown/Dropdown";
import { useInputState } from "../../../services/hooks/useInputState";
import { useState, useEffect } from "react";
import { validate } from "../../../services/helpers/formValidationRules";
import Modal from "../../../components/Modal";
import { useModal } from "../../../services/hooks/useModal";

export const TransactionForm = () => {
  const { isVisible, toggleVisibility } = useModal();

  const [title, setTitle, resetTitle] = useInputState("");
  const [description, setDescription, resetDescription] = useInputState("");
  const [amount, setAmount, resetAmount] = useInputState(0);
  const [type, setType, resetType] = useInputState("income");
  const [date, setDate, resetDate] = useInputState("");
  const [category, setCategory] = useState("select");
  const [paymentType, setPaymentType, resetPaymentType] = useInputState("cash");
  const [formErrors, setFormErrors] = useState({});
  const [isTouched, setIsTouched] = useState({
    title: false,
    description: false,
    amount: false,
    date: false,
    category: false,
  });

  const validateForm = () => {
    const formValues = {
      title: title,
      description: description,
      amount: amount,
      date: date,
      category: category,
    };
    setFormErrors(validate(formValues));
  };

  const handleBlur = (field) => {
    setIsTouched((values) => ({ ...values, [field]: true }));
  };

  useEffect(() => {
    validateForm();
  }, [title, description, amount, date, category]);

  const clearFormValues = () => {
    resetTitle();
    resetDescription();
    resetAmount();
    resetType();
    resetDate();
    resetPaymentType();
    setCategory("select");
    setIsTouched({
      title: false,
      description: false,
      amount: false,
      date: false,
      category: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsTouched({
      title: true,
      description: true,
      amount: true,
      date: true,
      category: true,
    });
    if (Object.keys(formErrors).length === 0) {
      toggleVisibility();
      clearFormValues();
      // pass data to json server
    }
    return;
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
    <>
      <button className="button-default" onClick={toggleVisibility}>
        Add new transaction
      </button>
      <Modal
        isVisible={isVisible}
        onCancel={() => {
          toggleVisibility();
          clearFormValues();
        }}
        modalHeader={"Add new transaction"}
        cancelBtnLabel={"Cancel"}
        submitBtnLabel={"Submit"}
        onSubmit={handleSubmit}
      >
        <StyledTransactionForm>
          <Input
            type="text"
            label="Title:"
            field="title"
            value={title}
            handleChange={setTitle}
            errorMessage={formErrors["title"]}
            isTouched={isTouched}
            handleBlur={handleBlur}
          />
          <Input
            type="text"
            label="Description:"
            field="description"
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
            label="Category:"
            errorMessage={formErrors["category"]}
            isTouched={isTouched}
            handleBlur={handleBlur}
          />
          <Input
            type="number"
            label="Paid:"
            field="amount"
            value={amount}
            handleChange={setAmount}
            errorMessage={formErrors["amount"]}
            isTouched={isTouched}
            handleBlur={handleBlur}
          />
          <DatePicker
            field="date"
            value={date}
            minDate="2000-01-01"
            handleChange={setDate}
            errorMessage={formErrors["date"]}
            isTouched={isTouched}
            handleBlur={handleBlur}
          />
          <div>
            <RadioButton
              options={paymentOptions}
              field="paymenType"
              label="Paid by:"
              buttonType="radio"
              value={paymentType}
              handleChange={setPaymentType}
            />
            <RadioButton
              options={paymentTypes}
              field="type"
              label="In/out:"
              value={type}
              handleChange={setType}
            />
          </div>
        </StyledTransactionForm>
      </Modal>
    </>
  );
};
