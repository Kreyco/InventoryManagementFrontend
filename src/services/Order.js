import axios from "axios";
import authHeader from '../services/auth-header';

const APICore = "http://localhost:8000/api/orders";

export default {
  get() {
    return axios.get(APICore, { headers: authHeader() });
  },
  getById(orderId) {
    if (orderId == null)
    {
      return this.get();
    }
    
    return axios.get(APICore + `/${orderId}`, { headers: authHeader() });
  },
};