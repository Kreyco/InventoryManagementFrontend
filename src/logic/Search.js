import axios from "axios";

const APICore = "http://localhost:8000/api/orders";

export default {
  getById(productId) {
    if (productId == null)
    {
      return;
    }
    
    return axios.get(APICore + `/searchId?id=${productId}`);
  },
  getByDeliveryDate(deliveryDate) {
    return axios.get(APICore + `/searchDate?delivery_date=${deliveryDate}`);
  },
};