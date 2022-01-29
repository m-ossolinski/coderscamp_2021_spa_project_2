import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { ModalExample } from "./components/ModalExample";
import { MontlyExpenseIncome } from "./components/Charts/MontlyExpenseIncome";
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
        <MontlyExpenseIncome />
      </AppWrapper>
    </>
  );
};

export default App;
