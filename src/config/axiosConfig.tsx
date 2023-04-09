import axios from "axios";
import { store } from "../store";
import { logout } from "../store/slices/auth/user.slice";

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = (localStorage.getItem("token") as any)?.["access_token"];

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return new Promise((resolve, reject) => {
      if (error.response.status === 401) {
        store.dispatch(logout());
      }
      reject(error);
    });
  }
);

export const customAPI = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});
