import React from "react";
import QrForm from "../components/QrForm";
import { Typography, Box } from "@mui/material";

export default function QrGenerator() {
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        QR Code Generator
      </Typography>
      <QrForm />
    </Box>
  );
} 