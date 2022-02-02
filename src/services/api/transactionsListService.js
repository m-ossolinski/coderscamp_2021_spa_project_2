import axios from "axios";

const baseUrl = "http://localhost:8000/transactions";

export const getTransactionsList = ({ currentPage, transactionsListSize }) => {
  if (!Number.isInteger(currentPage) && !Number.isInteger(transactionsListSize))
    throw new Error(
      "An error occurred while invoke function requestForTransactionsList: argument actualPage and entriesOnPage have to be a integer number."
    );

  const response = axios
    .get(`${baseUrl}?_page=${currentPage}&_limit=${transactionsListSize}`)
    .then((response) => response.data);

  return response;
};

export const getTransactionsList = () => {
  const response = axios.get(baseUrl).then((response) => response.data.length);
  return response;
};
