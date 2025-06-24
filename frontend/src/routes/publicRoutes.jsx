// src/routes/publicRoutes.js
import { Navigate } from "react-router-dom";
import lazyLoad from "../utils/lazyLoad";
import { ROUTES } from "./constants";
const LoginPage = lazyLoad(() => import("../pages/AuthPages/LoginPage"));
const RegisterPage = lazyLoad(() => import("../pages/AuthPages/RegisterPage"));

const publicRoutes = [
    {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
    },
    {
        path: ROUTES.REGISTER,
        element: <RegisterPage />,
    },
    {
        path: ROUTES.ROOT,
        element: <Navigate to={ROUTES.HOMEPAGE} replace />,
    },
];

export default publicRoutes;