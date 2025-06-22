import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    withCredentials: true,
});

export const register = async (email, password) =>
    await API.post("/auth/register", { email, password });

export const login = async (email, password) =>
    await API.post(
        "/auth/login",
        new URLSearchParams({ username: email, password }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

export const logout = async () => {
    await API.post("/auth/logout");
    Cookies.remove("access_token");
};

export const getCurrentUser = async () => {
    const token = Cookies.get("access_token");
    if (!token) throw new Error("No token found");
    return await API.get("/users/me", {
        headers: { Authorization: `Bearer ${token}` },
    });
};
