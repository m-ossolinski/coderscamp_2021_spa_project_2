import React, { useEffect, useState } from "react";

import { ListButton } from "../ListButton/ListButton";
import { Button } from "../Button/Button";
import Modal from "../Modal";
import { useModal } from "../../services/hooks/useModal";
import { StyledTransactionForm } from "../../pages/TransactionsPage/TransactionsPage/TransactionsPage.styled";
import { Input } from "../form/Input/Input";
import { Dropdown } from "../form/Dropdown/Dropdown";
import { DatePicker } from "../form/DatePicker/DatePicker";
import { RadioButton } from "../form/RadioButton/RadioButton";

import transactionService from "../../services/api/transactionsService.";
import categoriesService from "../../services/api/categoriesService";

export const TransactionEdit = ({ id }) => {
  const { isVisible, toggleVisibility } = useModal();
  const [transaction, setTransaction] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [type, setType] = useState();
  const [date, setDate] = useState();
  const [category, setCategory] = useState();
  const [paymentType, setPaymentType] = useState();

  const updateTransaction = async (id, updatedCategory) => {
    const updatedTransaction = {
      id: id,
      title: title,
      category: category,
      amount: amount,
      date: date,
      description: description,
      paymentType: paymentType,
      type: type,
    };

    try {
      await transactionService.updateTransaction(id, updatedTransaction);
    } catch (error) {
      throw new Error("Transaction could not be eddited");
    }
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    updateTransaction();
  };

  const fetchTransaction = async (id) => {
    setTransaction(await transactionService.getTransactionOne(id)).then(
      toggleVisibility()
    );
  };

  const fetchCategories = async () => {
    try {
      const response = await categoriesService.getCategoriesList();
      setCategoryList(response);
    } catch (error) {
      throw new Error("Categories list could not been shown.");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setTitle(transaction?.title);
    setDescription(transaction?.description);
    setAmount(transaction?.amount);
    setType(transaction?.type);
    setDate(transaction?.date);
    setCategory(transaction?.category);
    setPaymentType(transaction?.paymentType);
  }, [id, transaction]);

  return (
    <>
      <ListButton
        secondary
        onClick={() => {
          toggleVisibility();
          fetchTransaction(id);
        }}
      >
        Edit
      </ListButton>
      <Modal
        isVisible={isVisible}
        onCancel={() => {
          toggleVisibility();
        }}
        modalHeader={"Edit transaction"}
        cancelBtnLabel={"Cancel"}
        submitBtnLabel={"Submit"}
        onSubmit={() => {
          handleSubmit(id);

          window.location.reload(true);
        }}
      >
        {
          <div>
            <Input
              type="text"
              label="Title:"
              field="title"
              value={title}
              handleChange={(e) => {
                setTitle(e.target.value);
              }}
              // errorMessage={formErrors["title"]}
              // isTouched={isTouched.title}
              // handleBlur={handleBlur}
            />
            <Input
              type="text"
              label="Description:"
              field="description"
              value={description}
              handleChange={(e) => {
                setDescription(e.target.value);
              }}
              // errorMessage={formErrors["description"]}
              // isTouched={isTouched.description}
              // handleBlur={handleBlur}
            />
            <Dropdown
              options={categoryList}
              name={category}
              field="category"
              value={category}
              handleChange={setCategory}
              // label="Category:"
              // errorMessage={formErrors["category"]}
              // isTouched={isTouched.category}
              // handleBlur={handleBlur}
            />
            <Input
              type="number"
              label="Paid:"
              field="amount"
              value={amount}
              handleChange={(e) => {
                setAmount(e.target.value);
              }}
              // errorMessage={formErrors["amount"]}
              // isTouched={isTouched.amount}
              // handleBlur={handleBlur}
            />
            <DatePicker
              field="date"
              value={date}
              minDate="2000-01-01"
              // maxDate={currentDate}
              handleChange={(e) => {
                setDate(e.target.value);
              }}
              // errorMessage={formErrors["date"]}
              // isTouched={isTouched.date}
              // handleBlur={handleBlur}
            />
            <div>
              <RadioButton
                options={[
                  { id: "1", type: "cash" },
                  { id: "2", type: "card" },
                ]}
                field="paymenType"
                label="Paid by:"
                buttonType="radio"
                value={paymentType}
                handleChange={(e) => {
                  setPaymentType(e.target.value);
                }}
              />
              <RadioButton
                options={[
                  { id: "1", type: "income" },
                  { id: "2", type: "expense" },
                ]}
                field="type"
                label="In/out:"
                buttonType="radio"
                value={type}
                handleChange={(e) => {
                  setType(e.target.value);
                }}
              />
            </div>
          </div>
        }
      </Modal>
    </>
  );
};
