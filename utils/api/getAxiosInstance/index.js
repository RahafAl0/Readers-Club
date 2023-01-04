import axios from "axios";
export const API_URL = "http://localhost:8000/api";

const protectedAxios = axios.create({
  baseURL: API_URL,
});

protectedAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const user = JSON.parse(localStorage.getItem("user") || null);
    if (!user) throw new Error("No user provided");
    config.headers = {
      ...config.headers,
      Authorization: `Token ${user.token}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const publicAxios = axios.create({
  baseURL: API_URL,
});

export default ({ auth = false } = { auth: false }) =>
  auth ? protectedAxios : publicAxios;
