import Cookies from "js-cookie";
import API from "../api/axiosInstance.js";

/** * Register a new user.
 * @param {Object} data - User registration data (name, email, password).
 * @returns {Promise<Object>} - API response
 * @throws {Error} - If registration fails
 */
export const register = async (data) =>
    await API.post("/auth/register", data);

/** * Log in an existing user.
 * @param {Object} data - Login credentials (email, password).
 * @returns {Promise<Object>} - API response
 * @throws {Error} - If login fails
 */
export const login = async (data) =>
    await API.post(
        "/auth/login",
        new URLSearchParams(data),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

/** * Refresh the authentication token.
 * @returns {Promise<Object>} - API response
 */
export const logout = async () => {
    await API.post("/auth/logout");
    Cookies.remove("access_token");
};

/** * Get the current user's information.
 * @returns {Promise<Object>} - API response
 * @throws {Error} - If no token is found in cookies
 */
export const getCurrentUser = async () => {
    const token = Cookies.get("access_token");
    if (!token) throw new Error("No token found");
    return await API.get("/users/me");
};
