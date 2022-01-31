import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { ModalExample } from "./components/ModalExample";
import { MonthlyTransactionsChart } from "./components/Charts/MonthlyTransactionsChart";
import { CategoriesPieChart } from "./components/Charts/CategoriesPieChart";
import { CategoriesPage } from "./views/TransactionsCategories/CategpriesPage/CategoriesPage";
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
        <MonthlyTransactionsChart />
        <CategoriesPieChart />
        <CategoriesPage />
      </AppWrapper>
    </>
  );
};

export default App;
