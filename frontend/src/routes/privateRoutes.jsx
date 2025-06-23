// src/routes/privateRoutes.js
import lazyLoad from "../utils/lazyLoad";
import { ROUTES } from "./constants";

const privateRoutes = [
    {
        path: ROUTES.HOMEPAGE,
        element: lazyLoad(() => import("../pages/MainPages/HomePage")),
    },
    {
        path: ROUTES.CONTACT,
        element: lazyLoad(() => import("../pages/MainPages/ContactPage")),
    },
];

export default privateRoutes;