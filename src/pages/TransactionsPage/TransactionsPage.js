import { TransactionForm } from "./TransactionsForm/TransactionsForm";
import TransactionsList from "../../components/TransactionList/TransactionList";

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
  return (
    <>
      <TransactionForm initFields={TransactionsFormInitFields} />
      <TransactionsList />
    </>
  );
};

export default TransactionsPage;
