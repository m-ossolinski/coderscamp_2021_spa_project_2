import { TransactionForm } from "./TransactionsForm/TransactionsForm";
import categoriesService from "../../services/api/categoriesService";
import { useState, useEffect } from "react";

const TransactionsPage = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  const getCategories = async () => {
    try {
      const res = await categoriesService.getCategoriesList();
      return res;
    } catch (err) {
      throw new Error("Categories cannot be loaded");
    }
  };

  useEffect(async () => {
    const list = await getCategories();
    console.log(list);
    setCategoriesList(list);
  }, []);

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
