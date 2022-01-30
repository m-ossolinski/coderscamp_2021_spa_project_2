import axios from "axios";

const baseUrl = "http://localhost:8000/transactions";
const url = "https://jsonplaceholder.typicode.com/comments";

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

export const requestForPostsList = ({ actualPage, entriesOnPage }) => {
  if (!Number.isInteger(actualPage) && !Number.isInteger(entriesOnPage))
    throw new Error(
      "An error occurred while invoke function requestForTransactionsList: argument actualPage and entriesOnPage have to be a integer number."
    );

  const request = axios
    .get(`${url}?_page=${actualPage}&_limit=${entriesOnPage}`)
    .then((response) => response.data);

  return request;
};

export const requestForTransactionsListLength = () => {
  // const request = axios.get(baseUrl).then((response) => response.data.length);
  // return request;
  const request = axios.get(url).then((response) => {
    // console.log(response);
    return response.data.length;
  });
  return request;
};
