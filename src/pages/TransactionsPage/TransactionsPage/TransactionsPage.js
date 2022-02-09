import { useContext } from "react";
import { TransactionForm } from "../TransactionsForm/TransactionsForm";
import TransactionsList from "../../../components/TransactionList/TransactionList";
import { TransactionPageWrapper } from "./TransactionsPage.styled";
import { TransactionsListContext } from "../../../services/context/TransactionsListContext";
import { Typography } from "../../../components/common/Typography/Typography";

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
      <Typography
        tag="h3"
        size="large"
        weight="900"
        color="#0d9976"
        transform="uppercase"
      >
        <p>Your transactions hub</p>
      </Typography>
      <TransactionForm initFields={TransactionsFormInitFields} />
      <TransactionsList transactionsList={transactionsList} />/
    </TransactionPageWrapper>
  );
};
