import { TransactionForm } from "../TransactionsForm/TransactionsForm";
import TransactionsList from "../../../components/TransactionList/TransactionList";
import { TransactionPageWrapper } from "./TransactionsPage.styled";

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
  return (
    <TransactionPageWrapper>
      <TransactionForm initFields={TransactionsFormInitFields} />
      <TransactionsList />
    </TransactionPageWrapper>
  );
};
