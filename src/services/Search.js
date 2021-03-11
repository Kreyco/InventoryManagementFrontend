import axios from "axios";
import authHeader from "./auth-header";

const APICore = "http://localhost:8000/api/orders";

export default {
  getById(productId) {
    if (productId == null)
    {
      return;
    }
    
    return axios.get(APICore + `/searchId?id=${productId}`, { headers: authHeader() });
  },
  getByDeliveryDate(deliveryDate) {
    return axios.get(APICore + `/searchDate?delivery_date=${deliveryDate}`, { headers: authHeader() });
  },
};