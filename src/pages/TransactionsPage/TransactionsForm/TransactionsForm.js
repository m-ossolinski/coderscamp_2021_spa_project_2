import { useContext } from "react";
import { useInputState } from "../../../services/hooks/useInputState";
import { useState, useEffect } from "react";
import { useModal } from "../../../services/hooks/useModal";
import { useFetchData } from "../../../services/hooks/useFetchData";
import { StyledTransactionForm } from "./TransactionsForm.styled";
import { DatePicker } from "../../../components/form/DatePicker/DatePicker";
import { Input } from "../../../components/form/Input/Input";
import { RadioButton } from "../../../components/form/RadioButton/RadioButton";
import { Dropdown } from "../../../components/form/Dropdown/Dropdown";
import Modal from "../../../components/Modal";
import { Button } from "../../../components/Button/Button";
import { v4 as uuidv4 } from "uuid";
import transactionService from "../../../services/api/transactionsService.";
import { currentDate } from "../../../services/utils/currentDate";
import { newTransactionSchema } from "../../../services/helpers/Validations/NewTransactionValidation";
import categoriesService from "../../../services/api/categoriesService";
import { TransactionsListContext } from "../../../services/context/TransactionsListContext";

export const TransactionForm = ({ initFields }) => {
  const { isVisible, toggleVisibility } = useModal();
  const [categoriesList] = useFetchData(
    categoriesService.getCategoriesList,
    "Categories cannot be loaded"
  );

  const [title, setTitle, resetTitle] = useInputState(initFields.title);
  const [description, setDescription, resetDescription] = useInputState(
    initFields.description
  );
  const [amount, setAmount, resetAmount] = useInputState(initFields.amount);
  const [type, setType, resetType] = useInputState(initFields.type);
  const [date, setDate, resetDate] = useInputState(initFields.date);
  const [category, setCategory] = useState(initFields.category);
  const [paymentType, setPaymentType, resetPaymentType] = useInputState(
    initFields.paymentType
  );

  const [formErrors, setFormErrors] = useState({});
  const [isTouched, setIsTouched] = useState({
    title: false,
    description: false,
    amount: false,
    date: false,
    category: false,
  });

  const { setTransactionsList } = useContext(TransactionsListContext);

  const validateForm = async () => {
    const formValues = {
      title: title,
      description: description,
      amount: amount,
      date: date,
      category: category,
    };

    let list = [];
    categoriesList.forEach((c) => list.push(c.name));
    const schema = newTransactionSchema(list);

    try {
      schema.validateSync(formValues, {
        abortEarly: false,
      });
    } catch (err) {
      let errors = [];
      err.inner.forEach((error) => {
        errors.push({ [error.path]: error.message });
      });
      const errorMessages = Object.assign({}, ...errors);
      return errorMessages;
    }
  };

  const handleBlur = (field) => {
    setIsTouched((values) => ({ ...values, [field]: true }));
  };

  useEffect(async () => {
    const errorMessages = await validateForm();

    if (errorMessages) {
      setFormErrors(errorMessages);
    } else {
      setFormErrors({});
    }
  }, [title, description, amount, date, category]);

  const clearFormValues = () => {
    resetTitle();
    resetDescription();
    resetAmount();
    resetType();
    resetDate();
    resetPaymentType();
    setCategory(initFields.category);
    setIsTouched({
      title: false,
      description: false,
      amount: false,
      date: false,
      category: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsTouched({
      title: true,
      description: true,
      amount: true,
      date: true,
      category: true,
    });
    if (Object.keys(formErrors).length === 0) {
      const newTransaction = {
        id: uuidv4(),
        title: title,
        description: description,
        amount: amount,
        date: date,
        category: category,
        type: type,
        paymentType: paymentType,
      };
      await transactionService.createTransaction(newTransaction);
      const newTransactionsList = await transactionService.getTransactionList();
      setTransactionsList(newTransactionsList);
      toggleVisibility();
      clearFormValues();
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
      <Button secondary onClick={() => toggleVisibility()}>
        Add new transaction
      </Button>
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
            isTouched={isTouched.title}
            handleBlur={handleBlur}
          />
          <Input
            type="text"
            label="Description:"
            field="description"
            value={description}
            handleChange={setDescription}
            errorMessage={formErrors["description"]}
            isTouched={isTouched.description}
            handleBlur={handleBlur}
          />
          <Dropdown
            options={categoriesList}
            name={category}
            field="category"
            handleChange={setCategory}
            label="Category:"
            errorMessage={formErrors["category"]}
            isTouched={isTouched.category}
            handleBlur={handleBlur}
          />
          <Input
            type="number"
            label="Paid:"
            field="amount"
            value={amount}
            handleChange={setAmount}
            errorMessage={formErrors["amount"]}
            isTouched={isTouched.amount}
            handleBlur={handleBlur}
          />
          <DatePicker
            field="date"
            value={date}
            minDate="2000-01-01"
            maxDate={currentDate}
            handleChange={setDate}
            errorMessage={formErrors["date"]}
            isTouched={isTouched.date}
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
              buttonType="radio"
              value={type}
              handleChange={setType}
            />
          </div>
        </StyledTransactionForm>
      </Modal>
    </>
  );
};
