import { useState } from "react";
import { login } from "../../services/authService";
import Cookies from "js-cookie";
import { Button, TextField, Container, Typography, Box } from "@mui/material";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await login(email, password);
            Cookies.set("access_token", res.data.access_token, { secure: true });
            window.location.href = "/welcome";
        } catch (err) {
            alert("Login failed");
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 10, p: 4, border: "1px solid #ccc", borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>Login</Typography>
                <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
                <TextField label="Password" fullWidth type="password" margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
                <Button variant="contained" fullWidth onClick={handleLogin} sx={{ mt: 2 }}>Login</Button>
            </Box>
        </Container>
    );
}
