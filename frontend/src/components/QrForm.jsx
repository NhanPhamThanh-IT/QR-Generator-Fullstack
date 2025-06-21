import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { generateQrCode } from "../api/qrApi";

export default function QrForm() {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setQrCode("");
    try {
      const img = await generateQrCode(text);
      setQrCode(img);
    } catch (err) {
      setError(err.message || "Error generating QR code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TextField
        label="Text to encode"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        sx={{ mb: 2, width: 300 }}
      />
      <Button variant="contained" type="submit" disabled={loading} sx={{ mb: 2 }}>
        {loading ? "Generating..." : "Generate QR"}
      </Button>
      {error && <Typography color="error">{error}</Typography>}
      {qrCode && (
        <Box sx={{ mt: 2 }}>
          <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" style={{ maxWidth: 256 }} />
        </Box>
      )}
    </Box>
  );
} 