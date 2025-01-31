import axios from "axios";

export const Test = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true,
});

export const LogIn = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const SignUp = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true,
});

export const CSRFToken = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
});
