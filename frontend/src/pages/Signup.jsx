import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../api/authApi";

export default function Signup() {
  const [form, setForm] = useState({ username: '', password: '', email: '' });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      await signup(form.username, form.password, form.email);
      setSuccess(true);
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.message || "Đăng ký thất bại");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h4" gutterBottom>Đăng ký</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" name="username" value={form.username} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField label="Password" name="password" type="password" value={form.password} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <Button type="submit" variant="contained" fullWidth>Đăng ký</Button>
      </form>
      {success && <Alert severity="success" sx={{ mt: 2 }}>Đăng ký thành công! Chuyển sang đăng nhập...</Alert>}
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      <Typography sx={{ mt: 2 }}>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></Typography>
    </Box>
  );
} 