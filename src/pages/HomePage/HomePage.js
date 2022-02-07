import { StyledHomePage } from "./HomePage.styled";
import { LastTransactionsList } from "../../components/LastTransactions/LastTransactionsList";

const HomePage = () => {
  return (
    <StyledHomePage>
      <LastTransactionsList />
      <div>widgets component</div>
    </StyledHomePage>
  );
};

export default HomePage;
