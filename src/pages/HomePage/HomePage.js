import { StyledHomePage } from "./HomePage.styled";
import { LastTransactionsList } from "../../components/LastTransactions/LastTransactionsList";
import { useContext } from "react";
import { TransactionsListContext } from "../../services/context/TransactionsListContext";
import { TransactionOverview } from "../../components/TransactionOverview/TransactionsOverview";
import { CategoriesPieChart } from "../../components/Charts/CategoriesPieChart";

const HomePage = () => {
  const { transactionsList } = useContext(TransactionsListContext);
  return (
    <StyledHomePage>
      <TransactionOverview transactionsList={transactionsList} />
      <LastTransactionsList transactionsList={transactionsList} />
      <CategoriesPieChart />
    </StyledHomePage>
  );
};

export default HomePage;
