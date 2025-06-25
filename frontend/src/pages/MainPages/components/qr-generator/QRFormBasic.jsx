import { Box, Typography, TextField, MenuItem, Stack, Card, InputAdornment } from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';
import WifiIcon from '@mui/icons-material/Wifi';
import PersonIcon from '@mui/icons-material/Person';

const DATA_TYPES = [
  { value: 'text', label: 'Text', icon: <TextFieldsIcon fontSize="small" sx={{ mr: 1 }} /> },
  { value: 'url', label: 'URL', icon: <LinkIcon fontSize="small" sx={{ mr: 1 }} /> },
  { value: 'email', label: 'Email', icon: <EmailIcon fontSize="small" sx={{ mr: 1 }} /> },
  { value: 'phone', label: 'Phone', icon: <PhoneIcon fontSize="small" sx={{ mr: 1 }} /> },
  { value: 'sms', label: 'SMS', icon: <SmsIcon fontSize="small" sx={{ mr: 1 }} /> },
  { value: 'wifi', label: 'WiFi', icon: <WifiIcon fontSize="small" sx={{ mr: 1 }} /> },
  { value: 'vcard', label: 'VCard', icon: <PersonIcon fontSize="small" sx={{ mr: 1 }} /> },
];

export default function QRFormBasic({ dataType, qrColor, bgColor, onChange, renderInputField }) {
  return (
    <Card elevation={0} sx={{ p: { xs: 2, md: 3 }, borderRadius: 4, background: '#f7f9fc', mb: 2, boxShadow: '0 2px 12px rgba(37,117,252,0.04)' }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: 'primary.main', letterSpacing: 1 }}>Basic Information</Typography>
      <Stack spacing={2}>
        <TextField
          select
          label="Data Type"
          value={dataType}
          onChange={e => onChange('dataType', e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: DATA_TYPES.find(t => t.value === dataType)?.icon || <TextFieldsIcon fontSize="small" sx={{ mr: 1 }} />,
          }}
          sx={{ borderRadius: 3, background: '#fff', '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
        >
          {DATA_TYPES.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.icon}{type.label}
            </MenuItem>
          ))}
        </TextField>
        {renderInputField && (
          <Box sx={{ mt: 1 }}>{renderInputField()}</Box>
        )}
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            label="QR Color"
            type="color"
            value={qrColor.length === 4 ? `#${qrColor[1]}${qrColor[1]}${qrColor[2]}${qrColor[2]}${qrColor[3]}${qrColor[3]}` : qrColor}
            onChange={e => onChange('qrColor', e.target.value)}
            sx={{ width: 120, borderRadius: 3, background: '#fff', '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Background"
            type="color"
            value={bgColor.length === 4 ? `#${bgColor[1]}${bgColor[1]}${bgColor[2]}${bgColor[2]}${bgColor[3]}${bgColor[3]}` : bgColor}
            onChange={e => onChange('bgColor', e.target.value)}
            sx={{ width: 120, borderRadius: 3, background: '#fff', '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
            InputLabelProps={{ shrink: true }}
          />
        </Stack>
      </Stack>
    </Card>
  );
} 