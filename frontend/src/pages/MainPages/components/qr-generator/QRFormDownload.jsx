import { Box, Typography, TextField, MenuItem, Button, CircularProgress } from '@mui/material';

const OUTPUT_FORMATS = [
  { value: 'png', label: 'PNG' },
  { value: 'svg', label: 'SVG' },
];

export default function QRFormDownload({ outputFormat, onChange, onGenerate, loading }) {
  return (
    <Box sx={{ p: 2, borderRadius: 2, background: '#f7f9fc' }}>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>Download</Typography>
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