import axios from "axios";

const baseUrl = process.env.REACT_APP_TRANSACTIONS_BASE_URL;

export const getTransactionsList = ({ currentPage, transactionsListSize }) => {
  if (!Number.isInteger(currentPage) && !Number.isInteger(transactionsListSize))
    throw new Error(
      "An error occurred while invoke function getTransactionsList: argument currentPage and transactionsListSize have to be a integer number."
    );

  const response = axios
    .get(`${baseUrl}?_page=${currentPage}&_limit=${transactionsListSize}`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });

  return response;
};

export const getTransactionsListLength = () => {
  const response = axios
    .get(baseUrl)
    .then((response) => response.data.length)
    .catch((error) => {
      throw new Error(error);
    });
  return response;
};
