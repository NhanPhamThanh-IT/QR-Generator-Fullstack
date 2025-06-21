import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom>QR Code Generator</Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Tạo mã QR nhanh chóng, bảo mật, dễ sử dụng cho mọi nhu cầu cá nhân và doanh nghiệp.
      </Typography>
      <Button variant="contained" color="primary" size="large" component={Link} to="/qr">
        Tạo QR Code ngay
      </Button>
    </Box>
  );
} 