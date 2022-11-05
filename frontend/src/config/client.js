import axios from "axios";

export const apiHost = axios.create({
  baseURL: "http://localhost:3001/api",
});
