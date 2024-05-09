import axios from "axios";

const newRequest = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

export default newRequest;