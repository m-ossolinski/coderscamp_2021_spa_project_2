import axios from "axios";

const baseUrl = "http://localhost:8000/transactions";

export const requestForTransactionsList = ({ actualPage, entriesOnPage }) => {
  const request = axios
    .get(`${baseUrl}?_page=${actualPage}&_limit=${entriesOnPage}`)
    .then((response) => response.data);
  return request;
};
