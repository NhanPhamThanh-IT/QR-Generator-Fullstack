import {
  useState
} from 'react';
import {
  TextField,
  Button,
  InputLabel,
  Box,
  Stack,
  Snackbar,
  Alert,
  Paper,
  MenuItem,
  Select,
  FormControl,
  ToggleButtonGroup,
  ToggleButton,
  Slider,
  Typography,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import FormSectionHeading from './FormSectionHeading';
import {
  createQR
} from '../../../services/qrService';
import {
  inputTypes
} from './data';

const QRForm = ({ formData, setFormData }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [errors, setErrors] = useState({});
  const [inputType, setInputType] = useState('text');

  const handleInputTypeChange = (e) => {
    setInputType(e.target.value);
    setFormData(prev => ({ ...prev, text: '' }));
    if (errors.text) {
      setErrors(prev => ({ ...prev, text: '' }));
    }
  };

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
      newErrors.text = `${inputTypes.find(type => type.value === inputType)?.label || 'Input'} is required`;
    }

    if (formData.text && formData.text.trim() !== '') {
      switch (inputType) {
        case 'url':
          const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
          if (!urlPattern.test(formData.text)) {
            newErrors.text = 'Please enter a valid URL';
          }
          break;
        case 'email':
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(formData.text)) {
            newErrors.text = 'Please enter a valid email address';
          }
          break;
        case 'phone':
          const phonePattern = /^[\+]?[1-9][\d]{0,15}$/;
          if (!phonePattern.test(formData.text.replace(/\s/g, ''))) {
            newErrors.text = 'Please enter a valid phone number';
          }
          break;
        case 'wifi':
          if (!formData.text.startsWith('WIFI:')) {
            newErrors.text = 'WiFi format should start with "WIFI:"';
          }
          break;
        case 'sms':
          if (!formData.text.startsWith('SMSTO:')) {
            newErrors.text = 'SMS format should start with "SMSTO:"';
          }
          break;
        case 'vcard':
          if (!formData.text.includes('BEGIN:VCARD') || !formData.text.includes('END:VCARD')) {
            newErrors.text = 'vCard format should include BEGIN:VCARD and END:VCARD';
          }
          break;
      }
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
        data_type: inputType, // Thay đổi từ 'text' thành inputType
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

  // Hàm render input dựa trên loại được chọn
  const renderInputField = () => {
    const baseProps = {
      name: "text",
      value: formData.text || '',
      onChange: handleChange,
      fullWidth: true,
      required: true,
      error: !!errors.text,
      helperText: errors.text
    };

    switch (inputType) {
      case 'url':
        return (
          <TextField
            {...baseProps}
            label="Website URL"
            placeholder="https://example.com"
            type="url"
          />
        );
      case 'email':
        return (
          <TextField
            {...baseProps}
            label="Email Address"
            placeholder="example@email.com"
            type="email"
          />
        );
      case 'phone':
        return (
          <TextField
            {...baseProps}
            label="Phone Number"
            placeholder="+1234567890"
            type="tel"
          />
        );
      case 'wifi':
        return (
          <TextField
            {...baseProps}
            label="WiFi Connection"
            placeholder="WIFI:T:WPA;S:NetworkName;P:Password;;"
            multiline
            rows={2}
            helperText={errors.text || "Format: WIFI:T:WPA;S:NetworkName;P:Password;;"}
          />
        );
      case 'sms':
        return (
          <TextField
            {...baseProps}
            label="SMS"
            placeholder="SMSTO:+1234567890:Your message here"
            multiline
            rows={2}
            helperText={errors.text || "Format: SMSTO:phone:message"}
          />
        );
      case 'vcard':
        return (
          <TextField
            {...baseProps}
            label="Contact Card (vCard)"
            placeholder="BEGIN:VCARD&#10;VERSION:3.0&#10;FN:John Doe&#10;ORG:Company&#10;TEL:+1234567890&#10;EMAIL:john@example.com&#10;END:VCARD"
            multiline
            rows={4}
            helperText={errors.text || "Enter vCard format"}
          />
        );
      default:
        return (
          <TextField
            {...baseProps}
            label="Text"
            placeholder="Enter any text"
            multiline
            rows={2}
          />
        );
    }
  };

  return (
    <Paper
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        height: '100%',
        p: 5,
        pb: 0,
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
        <FormSectionHeading index={1} title="Complete the content" />

        {/* Dropdown chọn loại input */}
        <FormControl fullWidth>
          <InputLabel>Input Type</InputLabel>
          <Select
            value={inputType}
            label="Input Type"
            onChange={handleInputTypeChange}
          >
            {inputTypes.map((type) => (
              <MenuItem key={type.value} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Input field động */}
        {renderInputField()}

        <FormSectionHeading index={2} title="Design your QR" />

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

        {/* Size */}
        <Box sx={{ width: '100%' }}>
          <Typography gutterBottom sx={{ fontWeight: 500, color: 'text.primary' }}>
            Size: {formData.size || 200}px
          </Typography>
          <Slider
            name="size"
            value={formData.size || 200}
            onChange={(e, value) => handleChange({ target: { name: 'size', value } })}
            min={100}
            max={1000}
            step={10}
            marks={[
              { value: 100, label: '100px' },
              { value: 500, label: '500px' },
              { value: 1000, label: '1000px' }
            ]}
            valueLabelDisplay="auto"
            sx={{
              color: 'primary.main',
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
                backgroundColor: '#fff',
                border: '2px solid currentColor',
                '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                  boxShadow: 'inherit',
                },
                '&:before': {
                  display: 'none',
                },
              },
              '& .MuiSlider-valueLabel': {
                lineHeight: 1.2,
                fontSize: 12,
                background: 'unset',
                padding: 0,
                width: 32,
                height: 32,
                borderRadius: '50% 50% 50% 0',
                backgroundColor: 'primary.main',
                transformOrigin: 'bottom left',
                transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
                '&:before': { display: 'none' },
                '&.MuiSlider-valueLabelOpen': {
                  transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
                },
                '& > *': {
                  transform: 'rotate(45deg)',
                },
              },
            }}
          />
        </Box>

        {/* Logo Upload */}
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <input
            accept="image/*"
            id="logo-upload"
            type="file"
            name="logo"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <label htmlFor="logo-upload" style={{ width: '100%' }}>
            <Box
              sx={{
                width: '100%',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <img
                src="https://qrcode-gen.com/images/upload-Image-logo.svg"
                alt="Uploaded Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </Box>
          </label>
        </Box>

        {/* Output Format */}
        <FormSectionHeading index={3} title="Choose your output format" />
        <ToggleButtonGroup
          value={formData.outputFormat || 'png'}
          exclusive
          onChange={(e, value) => {
            if (value) handleChange({ target: { name: 'outputFormat', value } });
          }}
          fullWidth
          sx={{ borderRadius: 1, boxShadow: 1, '& .MuiToggleButton-root': { flex: 1, py: 1.5 } }}
        >
          <ToggleButton value="png" aria-label="PNG">
            <InsertPhotoIcon sx={{ mr: 1 }} /> PNG
          </ToggleButton>
          <ToggleButton value="jpg" aria-label="JPG">
            <PhotoCameraIcon sx={{ mr: 1 }} /> JPG
          </ToggleButton>
          <ToggleButton value="svg" aria-label="SVG">
            <CodeIcon sx={{ mr: 1 }} /> SVG
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Submit Button */}
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