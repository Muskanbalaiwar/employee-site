import axios from "axios";
import { getAuth, setAuth, clearAuth } from "./tokenStore";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

api.interceptors.request.use((config) => {
  const token = getAuth();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => {
    const refreshed = res.headers["x-refresh-token"];
    if (refreshed) setAuth(refreshed);
    return res;
  },
  (err) => {
    if (err.response?.status === 401) {
      clearAuth();
      window.location.href = "/login"; // redirect on unauthorized
    }
    return Promise.reject(err);
  }
);

export default api;
