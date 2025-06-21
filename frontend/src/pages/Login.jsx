import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/authApi";

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await login(form.username, form.password);
      navigate("/qr");
    } catch (err) {
      setError(err.message || "Đăng nhập thất bại");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h4" gutterBottom>Đăng nhập</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" name="username" value={form.username} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Password" name="password" type="password" value={form.password} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <Button type="submit" variant="contained" fullWidth>Đăng nhập</Button>
      </form>
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      <Typography sx={{ mt: 2 }}>Chưa có tài khoản? <Link to="/signup">Đăng ký</Link></Typography>
    </Box>
  );
} 