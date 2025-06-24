import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/authUtils";

export default function ProtectedRoute({ children }) {
    return isAuthenticated() ? children : <Navigate to="/login" />;
}
