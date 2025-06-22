import { useState } from "react";
import { register } from "../services/authService";
import Cookies from "js-cookie";
import { Button, TextField, Container, Typography, Box } from "@mui/material";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const res = await register(email, password);
            Cookies.set("access_token", res.data.access_token, { secure: true });
            window.location.href = "/welcome";
        } catch (err) {
            alert("Registration failed");
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 10, p: 4, border: "1px solid #ccc", borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>Register</Typography>
                <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
                <TextField label="Password" fullWidth type="password" margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
                <Button variant="contained" fullWidth onClick={handleRegister} sx={{ mt: 2 }}>Register</Button>
            </Box>
        </Container>
    );
}
