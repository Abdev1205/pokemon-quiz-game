import ENV from "@/config/ENV";
import axios from "axios";

const api = axios.create({
  baseURL: ENV.API_URL,
  withCredentials: true,
});

export default api;
