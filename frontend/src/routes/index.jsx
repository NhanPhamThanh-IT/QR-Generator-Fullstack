// src/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";
import Page404 from "../pages/ErrorPages/Page404";
import ProtectedRoute from "../components/common/ProtectedRoute";
import Layout from "../components/layout/index";
import { ROUTES } from "./constants";

export default function AppRoutes() {
    return (
        <Routes>
            {publicRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}

            {privateRoutes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<ProtectedRoute><Layout>{element}</Layout></ProtectedRoute>}
                />
            ))}

            <Route path={ROUTES.NOT_FOUND} element={<Page404 />} />
        </Routes>
    );
}
