import React from "react";
import { useFetch } from "../../../services/hooks/useFetch";
import CategoriesList from "../CategoriesList/CategoriesList";

const TransactionsPage = () => {
  const { data, loading, error } = useFetch("http://localhost:8000/categories");

  return (
    <>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      <CategoriesList categories={data} />
    </>
  );
};

export default TransactionsPage;
