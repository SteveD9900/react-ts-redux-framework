import axios from "axios";

const api = axios.create({
  baseURL: "appUrl"
}); 

export default api;