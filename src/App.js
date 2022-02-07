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
  const [hasDBChanged, setHasDBChanged] = useState(true);

  useEffect(async () => {
    if (hasDBChanged === true) {
      console.log("fetching updated transqactions...");
      const data = await transactionService.getTransactionList();
      setTransactionsList(data);
      setHasDBChanged(false);
    } else return;
  }, [hasDBChanged]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledApp>
          <BrowserRouter>
            <Header />
            <TransactionsListContext.Provider
              value={{
                transactionsList: transactionsList,
                setHasDBChanged: setHasDBChanged,
              }}
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
