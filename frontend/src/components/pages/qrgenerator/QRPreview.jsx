import { useEffect, useState } from 'react';
import { Paper, Typography, Box, Snackbar, Alert, Button } from '@mui/material';
import { Download, ContentCopy } from '@mui/icons-material';
import { generateQR } from '../../../services/qrService';

const QRPreview = ({ formData }) => {
  const [qrUrl, setQrUrl] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    const fetchQR = async () => {
      if (formData.text) {
        const payload = {
          data: formData.text,
          qr_color: formData.color || '#000000',
          bg_color: formData.bgColor || '#ffffff',
          size: Number(formData.size) || 200,
          logo: formData.logoBase64 || undefined,
        };
        const img = await generateQR(payload);
        setQrUrl(img);
      } else {
        setQrUrl('');
      }
    };
    fetchQR();
  }, [formData]);

  const handleDownload = () => {
    if (!qrUrl) return;

    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `qr-code-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSnackbar({
      open: true,
      message: 'QR code downloaded successfully!',
      severity: 'success'
    });
  };

  const handleCopy = async () => {
    if (!qrUrl) return;

    try {
      // Convert base64 to blob
      const response = await fetch(qrUrl);
      const blob = await response.blob();

      // Copy to clipboard
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);

      setSnackbar({
        open: true,
        message: 'QR code copied to clipboard!',
        severity: 'success'
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to copy QR code',
        severity: 'error'
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Paper
        sx={{
          p: 5,
          pb: 0,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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
      >
        <Box
          sx={{
            position: 'relative',
            width: 300,
            height: 300,
            borderRadius: 2,
            overflow: 'hidden',
            border: '2px solid',
            borderColor: 'divider',
            background: '#f8f9fa'
          }}
        >
          {qrUrl ? (
            <img
              src={qrUrl}
              alt="QR Preview"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.secondary'
              }}
            >
              <Typography variant="body2">
                Empty Data
              </Typography>
            </Box>
          )}
        </Box>

        {qrUrl && (
          <Box sx={{ mt: 3, display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button
              variant="contained"
              startIcon={<Download />}
              onClick={handleDownload}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                px: 3,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                minWidth: 140,
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(25,118,210,0.3)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Download
            </Button>
            <Button
              variant="contained"
              startIcon={<ContentCopy />}
              onClick={handleCopy}
              sx={{
                bgcolor: 'secondary.main',
                color: 'white',
                px: 3,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                minWidth: 140,
                '&:hover': {
                  bgcolor: 'secondary.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(156,39,176,0.3)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Copy
            </Button>
          </Box>
        )}
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default QRPreview;