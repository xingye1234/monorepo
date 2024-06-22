import axios from "axios";

export const requests = axios.create({
  baseURL: "",
  timeout: 10000,
  withCredentials: true,
});

requests.interceptors.request.use(
  ((config) => {
    return config;
  },
  (err) => {
    Promise.reject(err);
  })
);

requests.interceptors.response.use(
  ((response) => {
    if (response.status !== 200) {
      return Promise.reject(response.msg);
    }
    return response;
  },
  (err) => {
    Promise.reject(err);
  })
);
