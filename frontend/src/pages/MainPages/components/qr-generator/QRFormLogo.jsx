import { Box, Typography, Button } from '@mui/material';

export default function QRFormLogo({ logo, onLogoUpload }) {
  return (
    <Box sx={{ p: 2, borderRadius: 2, background: '#f7f9fc' }}>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>Logo</Typography>
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
  );
} 