// src/routes/publicRoutes.js
import lazyLoad from "../utils/lazyLoad";
import { ROUTES } from "./constants";

const publicRoutes = [
    {
        path: ROUTES.LOGIN,
        element: lazyLoad(() => import("../pages/AuthPages/LoginPage")),
    },
    {
        path: ROUTES.REGISTER,
        element:  lazyLoad(() => import("../pages/AuthPages/RegisterPage")),
    },
    {
        path: ROUTES.ROOT,
        element:  lazyLoad(() => import("../pages/MainPages/HomePage")),
    },
];

export default publicRoutes;