import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { ModalExample } from "./components/ModalExample";
import { TransactionsList } from "./components/common/TransactionList/TransactionsList";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  return (
    <>
      <AppWrapper>
        <AppRoutes />
        <ModalExample />
        <TransactionsList />
      </AppWrapper>
    </>
  );
};

export default App;
