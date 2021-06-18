import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://leilao-rest-api.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
})

export const getAll = () => {
  return httpClient.get("/participante");
};

export const get = id => {
  return httpClient.get(`/participante/${id}`);
};

export const create = data => {
  return httpClient.post("/participante", data);
};

export const update = (id, data) => {
  return httpClient.put(`/participante/${id}`, data);
};

export const remove = id => {
  return httpClient.delete(`/participante/${id}`);
};
