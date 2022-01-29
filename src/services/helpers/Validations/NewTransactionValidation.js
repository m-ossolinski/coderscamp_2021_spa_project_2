import * as yup from "yup";
import { currentDate } from "../../utils/currentDate";

export const newTransactionSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Title has to have at least 3 letters")
    .required("Title is required"),
  description: yup
    .string()
    .min(3, "Title has to have at least 3 letters")
    .max(30, "Title has to have maximum 30 letters")
    .required("Description is required"),
  category: yup.string().required("Please choose a category"),
  amount: yup
    .number()
    .required("Amount is required")
    .positive("Amount cannot be minus")
    .moreThan(0, "Amount cannot be zero"),
  date: yup
    .date("Please choose valid a date")
    .max(currentDate, "Date cannot be in the future")
    .required("Please choose a date"),
});
