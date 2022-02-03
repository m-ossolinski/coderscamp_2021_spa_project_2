import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { Header } from "./components/layout/Header/Header";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  return (
    <>
      <AppWrapper>
        <BrowserRouter>
          <Header />
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </BrowserRouter>
      </AppWrapper>
    </>
  );
};

export default App;
