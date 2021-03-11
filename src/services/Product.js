import axios from "axios";
import authHeader from "./auth-header";

const APICore = "http://localhost:8000/api/products";

export default {
  get() {
    return axios.get(APICore, { headers: authHeader() });
  },
  getById(productId) {
    if (productId == null)
    {
      return this.get();
    }
    
    return axios.get(APICore + `/${productId}`, { headers: authHeader() });
  },
};