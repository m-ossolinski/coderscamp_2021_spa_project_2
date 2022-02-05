import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { Header } from "./components/layout/Header/Header";
import { StyledApp } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledApp>
          <BrowserRouter>
            <Header />
            <MainLayout>
              <AppRoutes />
            </MainLayout>
          </BrowserRouter>
        </StyledApp>
      </ThemeProvider>
    </>
  );
};

export default App;
