import React, { useEffect, useState, useContext } from "react";

import { ListButton } from "../ListButton/ListButton";
import Modal from "../Modal";
import { useModal } from "../../services/hooks/useModal";
import { Input } from "../form/Input/Input";
import { Dropdown } from "../form/Dropdown/Dropdown";
import { DatePicker } from "../form/DatePicker/DatePicker";
import { RadioButton } from "../form/RadioButton/RadioButton";
import { TransactionsListContext } from "../../services/context/TransactionsListContext";
import { newTransactionSchema } from "../../services/helpers/Validations/NewTransactionValidation";
import transactionService from "../../services/api/transactionsService.";
import categoriesService from "../../services/api/categoriesService";
import { currentDate } from "../../services/utils/currentDate";

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

  const [formErrors, setFormErrors] = useState({});
  const [isTouched, setIsTouched] = useState({
    title: false,
    description: false,
    amount: false,
    date: false,
    category: false,
  });

  const { setTransactionsList, transactionsList } = useContext(
    TransactionsListContext
  );

  const validateForm = async () => {
    const formValues = {
      title: title,
      description: description,
      amount: amount,
      date: date,
      category: category,
    };

    let list = [];
    categoryList.forEach((c) => list.push(c.name));
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

  const updateTransaction = async (id, updatedTransaction) => {
    try {
      await transactionService.updateTransaction(id, updatedTransaction);
      setTransactionsList(
        transactionsList.map((transaction) =>
          transaction.id === id ? updatedTransaction : transaction
        )
      );
    } catch (error) {
      throw new Error("Transaction could not be eddited");
    }
  };

  const handleSubmit = () => {
    setIsTouched({
      title: true,
      description: true,
      amount: true,
      date: true,
      category: true,
    });
    if (Object.keys(formErrors).length === 0) {
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
      updateTransaction(id, updatedTransaction);
      toggleVisibility();
      setIsTouched({
        title: false,
        description: false,
        amount: false,
        date: false,
        category: false,
      });
    }
    return;
  };

  const fetchTransaction = async (id) => {
    try {
      const response = await transactionService.getTransactionOne(id);
      setTransaction(response);
      toggleVisibility();
    } catch (error) {
      throw new Error("Transaction could not been shown.");
    }
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
          handleSubmit();
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
              errorMessage={formErrors["title"]}
              isTouched={isTouched.title}
              handleBlur={handleBlur}
            />
            <Input
              type="text"
              label="Description:"
              field="description"
              value={description}
              handleChange={(e) => {
                setDescription(e.target.value);
              }}
              errorMessage={formErrors["description"]}
              isTouched={isTouched.description}
              handleBlur={handleBlur}
            />
            <Dropdown
              options={categoryList}
              name={category}
              field="category"
              value={category}
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
              handleChange={(e) => {
                setAmount(e.target.value);
              }}
              errorMessage={formErrors["amount"]}
              isTouched={isTouched.amount}
              handleBlur={handleBlur}
            />
            <DatePicker
              field="date"
              value={date}
              minDate="2000-01-01"
              maxDate={currentDate}
              handleChange={(e) => {
                setDate(e.target.value);
              }}
              errorMessage={formErrors["date"]}
              isTouched={isTouched.date}
              handleBlur={handleBlur}
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
