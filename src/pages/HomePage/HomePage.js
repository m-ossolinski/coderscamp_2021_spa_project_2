import { StyledHomePage } from "./HomePage.styled";
import { LastTransactionsList } from "../../components/LastTransactions/LastTransactionsList";
import { useContext } from "react";
import { TransactionsListContext } from "../../services/context/TransactionsListContext";

const HomePage = () => {
  const { transactionsList } = useContext(TransactionsListContext);
  return (
    <StyledHomePage>
      <LastTransactionsList transactionsList={transactionsList} />
      <div>widgets component</div>
    </StyledHomePage>
  );
};

export default HomePage;
