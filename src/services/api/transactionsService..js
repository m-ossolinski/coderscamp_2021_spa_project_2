import axios from "axios";

const baseUrl = process.env.REACT_APP_TRANSACTIONS_BASE_URL;

const getTransactionList = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};
const getTransactionOne = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const createTransaction = () => {
  const request = axios.post(baseUrl, transaction);
  return request.then((response) => response.data);
};

const updateTransaction = (id, transaction) => {
  const request = axios.put(`${baseUrl}/${id}`, category);
  return request.then((response) => response.data);
};

const removeTransaction = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default {
  getTransactionList,
  createTransaction,
  updateTransaction,
  removeTransaction,
  getTransactionOne,
};
