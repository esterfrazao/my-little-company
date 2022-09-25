import axios from "axios";

const api = axios.create({
  baseURL: "https://my-little-company-api.herokuapp.com/",
});

export default api;
