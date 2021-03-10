import axios from "axios";

const APICore = "http://localhost:8000/api/products";

export default {
  get() {
    return axios.get(APICore);
  },
  getById(productId) {
    if (productId == null)
    {
      return this.get();
    }
    
    return axios.get(APICore + `/${productId}`);
  },
};