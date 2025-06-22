// src/routes/privateRoutes.js
import HomePage from "../pages/MainPages/HomePage";
import { ROUTES } from "./constants";

const privateRoutes = [
    {
        path: ROUTES.HOMEPAGE,
        element: <HomePage />,
    },
];

export default privateRoutes;