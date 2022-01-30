import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
<<<<<<< HEAD
=======
import { ModalExample } from "./components/ModalExample";
import { CategoriesPage } from "./views/TransactionsCategories/CategpriesPage/CategoriesPage";
>>>>>>> develop
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
<<<<<<< HEAD
=======
        <ModalExample />
        <CategoriesPage />
>>>>>>> develop
      </AppWrapper>
    </>
  );
};

export default App;
