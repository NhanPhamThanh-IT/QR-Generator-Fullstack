import { useState } from 'react';
import { TextField, Button, InputLabel, Box, Stack, Typography, Snackbar, Alert } from '@mui/material';
import { createQR } from '../../../services/qrService';

const QRForm = ({ formData, setFormData }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    if (name === 'logo' && files.length > 0) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, logo: file }));
      // Convert to base64 for preview and backend
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, logoBase64: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.text || formData.text.trim() === '') {
      newErrors.text = 'Text or URL is required';
    }

    if (!formData.size || formData.size < 100 || formData.size > 1000) {
      newErrors.size = 'Size must be between 100 and 1000 pixels';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      setSnackbar({ open: true, message: 'Please fix the errors below', severity: 'error' });
      return;
    }

    try {
      // Prepare payload for backend (adjust as needed)
      const payload = {
        data_type: 'text',
        input: formData.text,
        qr_color: formData.color || '#000000',
        bg_color: formData.bgColor || '#ffffff',
        size: Number(formData.size) || 200,
        corner_radius: 0,
        logo: formData.logoBase64 || null,
        output_format: formData.outputFormat || 'png',
        timestamp: new Date().toISOString(),
      };
      await createQR(payload);
      setSnackbar({ open: true, message: 'QR code saved successfully!', severity: 'success' });
    } catch (err) {
      setSnackbar({ open: true, message: 'Failed to save QR code.', severity: 'error' });
    }
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }} onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Typography variant="h5" fontWeight={600}>QR Code Generator</Typography>
        <TextField
          label="Text or URL"
          name="text"
          value={formData.text || ''}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.text}
          helperText={errors.text}
        />
        <InputLabel shrink htmlFor="color-input">QR Color</InputLabel>
        <input
          id="color-input"
          type="color"
          name="color"
          value={formData.color || '#000000'}
          onChange={handleChange}
          style={{ width: 48, height: 32, border: 'none', background: 'none', cursor: 'pointer' }}
        />
        <InputLabel shrink htmlFor="bg-color-input">Background Color</InputLabel>
        <input
          id="bg-color-input"
          type="color"
          name="bgColor"
          value={formData.bgColor || '#ffffff'}
          onChange={handleChange}
          style={{ width: 48, height: 32, border: 'none', background: 'none', cursor: 'pointer' }}
        />
        <TextField
          label="Size (px)"
          name="size"
          type="number"
          value={formData.size || 200}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.size}
          helperText={errors.size}
          inputProps={{ min: 100, max: 1000 }}
        />
        <TextField
          label="Output Format"
          name="outputFormat"
          value={formData.outputFormat || 'png'}
          onChange={handleChange}
          fullWidth
          select
          SelectProps={{ native: true }}
        >
          <option value="png">PNG</option>
          <option value="svg">SVG</option>
        </TextField>
        <InputLabel shrink htmlFor="logo-upload">Logo (optional)</InputLabel>
        <input
          id="logo-upload"
          type="file"
          name="logo"
          accept="image/*"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Generate QR
        </Button>
      </Stack>
      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default QRForm;