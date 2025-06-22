import Cookies from "js-cookie";

export const isAuthenticated = () => {
    return !!Cookies.get("access_token");
};
