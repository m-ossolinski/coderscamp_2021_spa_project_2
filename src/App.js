import React from "react";
import TransactionList from "./components/TransactionList/TransactionList";
import { TransactionOverview } from "./components/TransactionOverview/TransactionsOverview";

const App = () => {
  return (
    <>
      <TransactionOverview />
      <TransactionList />
    </>
  );
};

export default App;
