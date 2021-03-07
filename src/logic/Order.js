import axios from "axios";

const APICore = "http://localhost:5001/api/orders";

export default {
  get() {
    return axios.get(APICore);
  },
  getById(orderId) {
    if (orderId == null)
    {
      return this.get();
    }
    
    return axios.get(APICore + `/${orderId}`);
  },
};