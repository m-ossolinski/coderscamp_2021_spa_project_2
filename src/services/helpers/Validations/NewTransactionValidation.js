import * as yup from "yup";
import { currentDate } from "../../utils/currentDate";

export const newTransactionSchema = (arr) => {
  const schema = yup.object().shape({
    title: yup
      .string("Title is required")
      .min(3, "Title has to have at least 3 letters")
      .required("Title is required"),
    description: yup
      .string("Description is required")
      .min(3, "Description has to have at least 3 letters")
      .max(60, "Description has to have maximum 60 letters")
      .required("Description is required"),
    category: yup
      .string()
      .oneOf(arr, "Please choose a category")
      .required("Please choose a category"),
    amount: yup
      .number("Amount is required")
      .typeError("Amount is required")
      .required("Amount is required")
      .moreThan(0, "Amount cannot be zero or minus"),
    date: yup
      .date("Please choose a valid date")
      .typeError("Please enter a valid date")
      .required("Please choose a date")
      .nullable()
      .max(currentDate, "Date cannot be in the future"),
  });
  return schema;
};
