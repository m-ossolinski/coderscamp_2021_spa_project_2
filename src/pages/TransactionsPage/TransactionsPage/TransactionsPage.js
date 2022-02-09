import { useContext } from "react";
import { TransactionForm } from "../TransactionsForm/TransactionsForm";
import TransactionsList from "../../../components/TransactionList/TransactionList";
import { TransactionPageWrapper } from "./TransactionsPage.styled";
import { TransactionsListContext } from "../../../services/context/TransactionsListContext";

export const TransactionsPage = () => {
  const TransactionsFormInitFields = {
    title: "",
    description: "",
    amount: 0,
    type: "income",
    date: "dd/mm/yyyy",
    category: "select",
    paymentType: "cash",
  };
  const { transactionsList } = useContext(TransactionsListContext);
  return (
    <TransactionPageWrapper>
      <TransactionForm initFields={TransactionsFormInitFields} />
      <TransactionsList transactionsList={transactionsList} />/
    </TransactionPageWrapper>
  );
};
