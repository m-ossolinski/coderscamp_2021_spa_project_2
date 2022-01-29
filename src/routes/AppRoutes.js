import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout/MainLayout";
import { Header } from "../components/layout/Header/Header";
import TransactionsPage from "../pages/TransactionsPage/TransactionsPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                Home Page
                <h1>Welcome to Coders Camp 2021</h1>
                <h2>SPA Project</h2>
              </div>
            }
          />
          <Route exact path="/transactions" element={<TransactionsPage />} />
          <Route exact path="/signup" element={<div>Signup Page</div>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
