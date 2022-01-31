import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { ModalExample } from "./components/ModalExample";
import { CategoriesPage } from "./views/TransactionsCategories/CategpriesPage/CategoriesPage";
import styled from "styled-components";
import { Loader } from "./components/Loader/Loader";

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  return (
    <>
      <AppWrapper>
        <AppRoutes />
        <Loader />
        <ModalExample />
        <CategoriesPage />
      </AppWrapper>
    </>
  );
};

export default App;
