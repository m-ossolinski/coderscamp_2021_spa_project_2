import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { Header } from "./components/layout/Header/Header";
import { StyledApp } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/globalStyles";
import { useState, useEffect } from "react";
import { TransactionsListContext } from "./services/context/TransactionsListContext";
import transactionService from "./services/api/transactionsService.";

const App = () => {
  const [transactionsList, setTransactionsList] = useState([]);

  useEffect(async () => {
    const transactionsList = await transactionService.getTransactionList();
    setTransactionsList(transactionsList);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledApp>
          <BrowserRouter>
            <Header />
            <TransactionsListContext.Provider
              value={{ transactionsList, setTransactionsList }}
            >
              <MainLayout>
                <AppRoutes />
              </MainLayout>
            </TransactionsListContext.Provider>
          </BrowserRouter>
        </StyledApp>
      </ThemeProvider>
    </>
  );
};

export default App;
