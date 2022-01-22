import axios from "axios";

const baseUrl = "http://localhost:8000/categories";

const get = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (category) => {
  const request = axios.post(baseUrl, category);
  return request.then((response) => response.data);
};

const update = (id, category) => {
  const request = axios.put(`${baseUrl}/${id}`, category);
  return request.then((response) => response.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default {
  get,
  create,
  update,
  remove,
};
