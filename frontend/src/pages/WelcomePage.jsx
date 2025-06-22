// src/pages/WelcomePage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";

export default function WelcomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/protected");
        }, 2000); // chuyển hướng sau 2 giây

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 10, p: 4, textAlign: "center", border: "1px solid #ccc", borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Login Successful 🎉
                </Typography>
                <Typography variant="body1">Redirecting to your dashboard...</Typography>
            </Box>
        </Container>
    );
}
