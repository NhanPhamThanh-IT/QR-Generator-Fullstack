import { useEffect, useState } from "react";
import { getCurrentUser, logout } from "../services/authService";
import { Button, Container, Typography, Box } from "@mui/material";

export default function ProtectedPage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getCurrentUser()
            .then(res => setUser(res.data))
            .catch(() => {
                logout();
                window.location.href = "/login";
            });
    }, []);

    const handleLogout = async () => {
        await logout();
        window.location.href = "/login";
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 10, p: 4, border: "1px solid #ccc", borderRadius: 2 }}>
                <Typography variant="h5">Welcome, {user?.email}</Typography>
                <Button variant="outlined" fullWidth onClick={handleLogout} sx={{ mt: 3 }}>
                    Logout
                </Button>
            </Box>
        </Container>
    );
}
