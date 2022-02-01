import { TransactionForm } from "./TransactionsForm/TransactionsForm";
import categoriesService from "../../services/api/categoriesService";
import { useState, useEffect } from "react";
import { useFetchData } from "../../services/hooks/useFetchData";

const TransactionsPage = () => {
  const [categoriesList] = useFetchData(
    categoriesService.getCategoriesList,
    "Categories cannot be loaded"
  );

  const TransactionsFormInitFields = {
    title: "",
    description: "",
    amount: 0,
    type: "income",
    date: "dd/mm/yyyy",
    category: "select",
    paymentType: "cash",
  };
  return (
    <TransactionForm
      initFields={TransactionsFormInitFields}
      categoriesList={categoriesList}
    />
  );
};

export default TransactionsPage;
