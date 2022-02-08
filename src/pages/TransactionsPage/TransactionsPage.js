import { TransactionForm } from "./TransactionsForm/TransactionsForm";
import TransactionsList from "../../components/TransactionList/TransactionList";
import { useContext } from "react";
import { TransactionsListContext } from "../../services/context/TransactionsListContext";

const TransactionsPage = () => {
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
    <>
      <TransactionForm initFields={TransactionsFormInitFields} />
      <TransactionsList transactionsList={transactionsList} />
    </>
  );
};

export default TransactionsPage;
