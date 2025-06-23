import axios from "axios";
import Cookies from "js-cookie";
import { ROUTES } from "../routes/constants";

const API = axios.create({
    baseURL: "/api/v1",
    timeout: 10000,
});

API.interceptors.request.use(
    (config) => {
        const token = Cookies.get("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            window.location.href = ROUTES.LOGIN;
        }
        return Promise.reject(error);
    }
);

export default API;
