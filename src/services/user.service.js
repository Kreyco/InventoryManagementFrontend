import axios from 'axios';

const API_URL = 'http://localhost:8080/api/orders/';

class UserService {
    getAll() {
        return axios.get(API_URL);
    }
}

export default new UserService();