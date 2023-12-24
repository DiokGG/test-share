import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-blog-server.vercel.app/api",
  validateStatus: () => true,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");

  return config;
});

export default instance;
