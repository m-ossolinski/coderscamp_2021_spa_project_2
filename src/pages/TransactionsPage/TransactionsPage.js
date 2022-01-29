import { TransactionForm } from "./TransactionsForm/TransactionsForm";

const TransactionsPage = () => {
  const TransactionsFormInitFields = {
    title: "",
    description: "",
    amount: 0,
    type: "income",
    date: "",
    category: "select",
    paymentType: "cash",
  };
  return <TransactionForm initFields={TransactionsFormInitFields} />;
};

export default TransactionsPage;
