import React from "react";
import { FaTools } from "react-icons/fa";
import { IconWrapper } from "../../pages/TransactionsCategories/RemoveCategory/RemoveCategory.styled";

import Modal from "../Modal";
import { useModal } from "../../services/hooks/useModal";
import StyledTransactionForm from "../../pages/TransactionsPage/TransactionsForm/TransactionsForm.styled";
import { Input } from "../form/Input/Input";
import { DatePicker } from "../form/DatePicker/DatePicker";
import { Dropdown } from "../form/Dropdown/Dropdown";
import { RadioButton } from "../form/RadioButton/RadioButton";

import getTransactionOne from "../../services/api/transactionsService.";

export const TransactionEdit = ({ initFields, transaction }) => {
  const { isVisible, toggleVisibility } = useModal();

  // const [categoriesList] = useFetchData(
  //   categoriesService.getCategoriesList,
  //   "Categories cannot be loaded"
  // );

  // const [title, setTitle, resetTitle] = useInputState(initFields.title);
  // const [description, setDescription, resetDescription] = useInputState(
  //   initFields.description
  // );
  // const [amount, setAmount, resetAmount] = useInputState(initFields.amount);
  // const [type, setType, resetType] = useInputState(initFields.type);
  // const [date, setDate, resetDate] = useInputState(initFields.date);
  // const [category, setCategory] = useState(initFields.category);
  // const [paymentType, setPaymentType, resetPaymentType] = useInputState(
  //   initFields.paymentType
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fetchTransaction = async () => {
    const transaction = await getTransactionOne.getTransactionOne(id);
    console.log(transaction);
  };

  return (
    <>
      <IconWrapper onClick={toggleVisibility}>
        <FaTools />
      </IconWrapper>
      <Modal
        isVisible={isVisible}
        onCancel={() => {
          toggleVisibility();
          fetchTransaction();
        }}
        modalHeader={"Edit transaction"}
        cancelBtnLabel={"Cancel"}
        submitBtnLabel={"Submit"}
        onSubmit={() => {
          handleSubmit(id);
          toggleVisibility();
          window.location.reload(true);
        }}
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
