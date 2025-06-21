import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: "center", mt: 4, bgcolor: '#f0f0f0' }}>
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} QR Code Generator. All rights reserved.
      </Typography>
    </Box>
  );
} 