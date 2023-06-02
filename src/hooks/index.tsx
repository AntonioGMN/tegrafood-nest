import axios from "axios";
import { parseCookies } from "nookies";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const { "food-token": token } = parseCookies();
  if (token) config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});

export default api;
