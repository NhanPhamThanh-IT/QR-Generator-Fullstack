// src/routes/privateRoutes.js
import lazyLoad from "../utils/lazyLoad";
import { ROUTES } from "./constants";
const HomePage = lazyLoad(() => import("../pages/MainPages/HomePage"));
const QRGeneratorPage = lazyLoad(() => import("../pages/MainPages/QRGeneratorPage"));
const QRHistoryPage = lazyLoad(() => import("../pages/MainPages/QRHistoryPage"));
const ContactPage = lazyLoad(() => import("../pages/MainPages/ContactPage"));

const privateRoutes = [
    {
        path: ROUTES.HOMEPAGE,
        element: <HomePage />,
    },
    {
        path: ROUTES.QRGENERATOR,
        element: <QRGeneratorPage />,
    },
    {
        path: ROUTES.QRHISTORY,
        element: <QRHistoryPage />,
    },
    {
        path: ROUTES.CONTACT,
        element: <ContactPage />,
    },
];

export default privateRoutes;