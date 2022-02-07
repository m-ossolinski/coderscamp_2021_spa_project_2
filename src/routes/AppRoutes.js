import { Route, Routes } from "react-router-dom";
import { CategoriesPage } from "../pages/TransactionsCategories/CategpriesPage/CategoriesPage";
import { TransactionsPage } from "../pages/TransactionsPage/TransactionsPage/TransactionsPage";
import { Typography } from "../components/common/Typography/Typography";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div>
            Home Page
            <h1>Welcome to Coders Camp 2021</h1>
            <h2>SPA Project</h2>
            <Typography
              tag="h3"
              size="extraLarge"
              weight="900"
              color="#0d9976"
              transform="uppercase"
            >
              Hello typography!
            </Typography>
          </div>
        }
      />
      <Route exact path="/transactions" element={<TransactionsPage />} />
      <Route exact path="/stats" element={<div>Stats Page</div>} />
      <Route exact path="/categories" element={<CategoriesPage />} />
    </Routes>
  );
};
