import axios from "axios";

// const BACKEND_PATH = "http://localhost:5001/api/";
const ENDPOINT_PATH = "https://reqres.in/api/";

export default {
    register(email, password) {
        const user = {email, password};

        return axios.post(ENDPOINT_PATH + "regiser", user);
    },
    login(email, password) {
        const user = {email, password};

        return axios.post(ENDPOINT_PATH + "login", user);
    }
};