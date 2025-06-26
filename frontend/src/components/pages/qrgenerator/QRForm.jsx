import {
  useState
} from 'react';
import {
  TextField,
  Button,
  InputLabel,
  Box,
  Grid,
  Stack,
  Snackbar,
  Alert,
  Paper
} from '@mui/material';
import {
  createQR
} from '../../../services/qrService';

const QRForm = ({ formData, setFormData }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    if (name === 'logo' && files.length > 0) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, logo: file }));
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

    if (!validateForm()) {
      setSnackbar({ open: true, message: 'Please fix the errors below', severity: 'error' });
      return;
    }

    try {
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
    <Paper
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        p: 5,
        borderRadius: 6,
        elevation: 0,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'grey.200',
        background: 'linear-gradient(to bottom right, rgba(255,255,255,1), rgba(248,250,252,1))',
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 6,
          padding: '1px',
          background: 'linear-gradient(135deg, rgba(25,118,210,0.3), rgba(66,165,245,0.1))',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          pointerEvents: 'none',
        }
      }}
      onSubmit={handleSubmit}
    >
      <Stack spacing={3}>
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
        <Grid container spacing={10} sx={{ mt: 2 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <InputLabel
                htmlFor="color-input"
                sx={{
                  fontWeight: 500,
                  color: 'text.primary',
                  minWidth: '80px'
                }}
              >
                QR Color
              </InputLabel>
              <Box
                sx={{
                  position: 'relative',
                  width: 56,
                  height: 30,
                  borderRadius: 1,
                  border: '2px solid',
                  borderColor: 'divider',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                  '&:hover': {
                    borderColor: 'primary.main'
                  }
                }}
              >
                <input
                  id="color-input"
                  type="color"
                  name="color"
                  value={formData.color || '#000000'}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <InputLabel
                htmlFor="bg-color-input"
                sx={{
                  fontWeight: 500,
                  color: 'text.primary',
                  minWidth: '120px'
                }}
              >
                Background Color
              </InputLabel>
              <Box
                sx={{
                  position: 'relative',
                  width: 56,
                  height: 30,
                  borderRadius: 1,
                  border: '2px solid',
                  borderColor: 'divider',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                  '&:hover': {
                    borderColor: 'primary.main'
                  }
                }}
              >
                <input
                  id="bg-color-input"
                  type="color"
                  name="bgColor"
                  value={formData.bgColor || '#ffffff'}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
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
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, textTransform: 'none', fontWeight: 700, fontSize: '1rem' }}>
          Generate QR
        </Button>
      </Stack>
      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default QRForm;