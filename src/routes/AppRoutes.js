import { Route, Routes } from "react-router-dom";
import { CategoriesPage } from "../pages/TransactionsCategories/CategpriesPage/CategoriesPage";
import TransactionsPage from "../pages/TransactionsPage/TransactionsPage";
import { StatsView } from "../pages/Stats/StatsView";
import { HomeView } from "../pages/Home/HomeView";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeView />} />
      <Route exact path="/transactions" element={<TransactionsPage />} />
      <Route exact path="/stats" element={<StatsView />} />
      <Route exact path="/categories" element={<CategoriesPage />} />
    </Routes>
  );
};
