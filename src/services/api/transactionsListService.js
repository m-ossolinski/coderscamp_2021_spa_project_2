import axios from "axios";

const baseUrl = "http://localhost:8000/transactions";

export const requestForTransactionsList = ({ actualPage, entriesOnPage }) => {
  if (!Number.isInteger(actualPage) && !Number.isInteger(entriesOnPage))
    throw new Error(
      "An error occurred while invoke function requestForTransactionsList: argument actualPage and entriesOnPage have to be a integer number."
    );

  const request = axios
    .get(`${baseUrl}?_page=${actualPage}&_limit=${entriesOnPage}`)
    .then((response) => response.data);

  return request;
};

export const requestForTransactionsListLength = () => {
  const request = axios.get(baseUrl).then((response) => response.data.length);
  return request;
};
