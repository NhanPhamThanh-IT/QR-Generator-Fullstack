// src/routes/privateRoutes.js
import HomePage from "../pages/MainPages/HomePage";
import ContactPage from "../pages/MainPages/ContactPage";
import { ROUTES } from "./constants";

const privateRoutes = [
    {
        path: ROUTES.HOMEPAGE,
        element: <HomePage />,
    },
    {
        path: ROUTES.CONTACT,
        element: <ContactPage />,
    },
];

export default privateRoutes;