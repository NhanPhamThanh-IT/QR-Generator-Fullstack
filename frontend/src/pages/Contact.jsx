import React, { useState } from "react";
import { Typography, Box, Link, TextField, Button, Alert } from "@mui/material";
import contactInfo from "../data/contactInfo";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setSent(false);
    if (!form.name || !form.email || !form.message) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Gửi liên hệ thất bại");
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setError("Gửi liên hệ thất bại");
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Typography>Email: <Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link></Typography>
      <Typography>Phone: {contactInfo.phone}</Typography>
      <Typography>Address: {contactInfo.address}</Typography>
      <Box sx={{ mt: 4, maxWidth: 400 }}>
        <Typography variant="h6">Liên hệ với chúng tôi</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Tên" name="name" value={form.name} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
          <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
          <TextField label="Nội dung" name="message" value={form.message} onChange={handleChange} fullWidth multiline rows={4} sx={{ mb: 2 }} />
          <Button type="submit" variant="contained">Gửi</Button>
        </form>
        {sent && <Alert severity="success" sx={{ mt: 2 }}>Đã gửi liên hệ thành công!</Alert>}
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      </Box>
      <Box sx={{ mt: 4 }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.005857858471!2d105.7804493154027!3d21.03131739307359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2zMTIzIE1haW4gU3QsIEhhbm9pLCBWaeG7h3QgTmFt!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
} 