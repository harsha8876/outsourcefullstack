import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://outsourcebackend.onrender.com",
  withCredentials: true,
});

export default newRequest;