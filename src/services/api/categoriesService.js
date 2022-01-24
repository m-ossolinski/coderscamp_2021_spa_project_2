import axios from "axios";

const baseUrl = "http://localhost:8000/categories";

const getCategoriesList = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createCategory = (category) => {
  const request = axios.post(baseUrl, category);
  return request.then((response) => response.data);
};

const updateCategory = (id, category) => {
  const request = axios.put(`${baseUrl}/${id}`, category);
  return request.then((response) => response.data);
};

const removeCategory = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default {
  getCategoriesList,
  createCategory,
  updateCategory,
  removeCategory,
};
