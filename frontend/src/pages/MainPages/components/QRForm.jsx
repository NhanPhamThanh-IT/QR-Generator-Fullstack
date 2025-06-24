import {
  Box,
  TextField,
  Button,
  MenuItem,
  Slider,
  Typography,
  CircularProgress,
} from '@mui/material';

const DATA_TYPES = [
  { value: 'text', label: 'Text' },
  { value: 'url', label: 'URL' },
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'sms', label: 'SMS' },
];

const OUTPUT_FORMATS = [
  { value: 'png', label: 'PNG' },
  { value: 'svg', label: 'SVG' },
];

export default function QRForm({
  dataType,
  input,
  qrColor,
  bgColor,
  size,
  cornerRadius,
  logo,
  outputFormat,
  loading,
  onChange,
  onLogoUpload,
  onGenerate,
}) {
  // Render input field based on data type
  const renderInputField = () => {
    switch (dataType) {
      case 'email':
        return <TextField label="Email" type="email" fullWidth value={input} onChange={e => onChange('input', e.target.value)} />;
      case 'url':
        return <TextField label="URL" type="url" fullWidth value={input} onChange={e => onChange('input', e.target.value)} />;
      case 'phone':
        return <TextField label="Phone Number" type="tel" fullWidth value={input} onChange={e => onChange('input', e.target.value)} />;
      case 'sms':
        return <TextField label="SMS Number" type="tel" fullWidth value={input} onChange={e => onChange('input', e.target.value)} />;
      default:
        return <TextField label="Text" fullWidth value={input} onChange={e => onChange('input', e.target.value)} />;
    }
  };

  return (
    <Box>
      <TextField
        select
        label="Data Type"
        value={dataType}
        onChange={e => onChange('dataType', e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      >
        {DATA_TYPES.map((type) => (
          <MenuItem key={type.value} value={type.value}>
            {type.label}
          </MenuItem>
        ))}
      </TextField>
      {renderInputField()}
      <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
        <TextField
          label="QR Color"
          type="color"
          value={qrColor}
          onChange={e => onChange('qrColor', e.target.value)}
          sx={{ width: 120 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Background"
          type="color"
          value={bgColor}
          onChange={e => onChange('bgColor', e.target.value)}
          sx={{ width: 120 }}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Size: {size}px
          </Typography>
          <Slider
            value={size}
            min={128}
            max={512}
            step={16}
            onChange={(_, val) => onChange('size', val)}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Corner Radius: {cornerRadius}
          </Typography>
          <Slider
            value={cornerRadius}
            min={0}
            max={32}
            step={1}
            onChange={(_, val) => onChange('cornerRadius', val)}
          />
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Button
          variant="outlined"
          component="label"
          sx={{ borderRadius: 2, textTransform: 'none' }}
        >
          Upload Logo
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={onLogoUpload}
          />
        </Button>
        {logo && (
          <Typography variant="caption" sx={{ ml: 2 }}>
            Logo uploaded
          </Typography>
        )}
      </Box>
      <TextField
        select
        label="Output Format"
        value={outputFormat}
        onChange={e => onChange('outputFormat', e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      >
        {OUTPUT_FORMATS.map((fmt) => (
          <MenuItem key={fmt.value} value={fmt.value}>
            {fmt.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        fullWidth
        size="large"
        variant="contained"
        onClick={onGenerate}
        disabled={loading}
        sx={{ mt: 2, borderRadius: 2, textTransform: 'none' }}
        startIcon={loading && <CircularProgress size={20} color="inherit" />}
      >
        {loading ? 'Generating...' : 'Generate QR Code'}
      </Button>
    </Box>
  );
} 