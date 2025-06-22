// src/routes/publicRoutes.js
import LoginPage from "../pages/AuthPages/LoginPage";
import RegisterPage from "../pages/AuthPages/RegisterPage";
import { ROUTES } from "./constants";

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
        element: <LoginPage />,
    },
];

export default publicRoutes;