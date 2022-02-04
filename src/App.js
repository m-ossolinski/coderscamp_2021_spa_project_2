import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { Header } from "./components/layout/Header/Header";
import { StyledApp } from "./App.styled";

const App = () => {
  return (
    <>
      <StyledApp>
        <BrowserRouter>
          <Header />
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </BrowserRouter>
      </StyledApp>
    </>
  );
};

export default App;
