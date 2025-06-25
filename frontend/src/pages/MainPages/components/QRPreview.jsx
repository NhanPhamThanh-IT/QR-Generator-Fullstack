import { Box, Typography, Button, Snackbar, Alert } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';

export default function QRPreview({
  qrValue,
  size,
  qrColor,
  bgColor,
  logo,
  outputFormat,
  watermark,
  tag,
  template,
  snackbar,
  setSnackbar,
}) {
  const qrRef = useRef();
  const qrInstance = useRef();

  // Build options for qr-code-styling
  useEffect(() => {
    if (!qrValue) return;
    const options = {
      width: size,
      height: size,
      type: outputFormat === 'svg' ? 'svg' : 'canvas',
      data: qrValue,
      backgroundOptions: {
        color: bgColor,
      },
      dotsOptions: {
        color: qrColor,
      },
      image: logo || undefined,
      ...(logo ? {
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 2,
          imageSize: 0.2,
        }
      } : {}),
    };
    if (!qrInstance.current) {
      qrInstance.current = new QRCodeStyling(options);
    } else {
      qrInstance.current.update(options);
    }
    qrInstance.current.append(qrRef.current);
    // Clean up old QR
    return () => {
      if (qrRef.current) qrRef.current.innerHTML = '';
    };
  }, [qrValue, size, qrColor, bgColor, logo, outputFormat]);

  // Download handler
  const handleDownload = () => {
    if (qrInstance.current) {
      qrInstance.current.download({ extension: outputFormat === 'svg' ? 'svg' : 'png', name: 'qr-code' });
    }
  };

  // Copy handler (only for png)
  const handleCopy = async () => {
    if (outputFormat === 'svg') {
      setSnackbar({ open: true, message: 'Copy chỉ hỗ trợ PNG.', severity: 'info' });
      return;
    }
    if (qrInstance.current) {
      const dataUrl = await qrInstance.current.getRawData('png');
      fetch(dataUrl)
        .then(res => res.blob())
        .then(blob => {
          navigator.clipboard.write([
            new window.ClipboardItem({ 'image/png': blob })
          ]);
          setSnackbar({ open: true, message: 'QR code copied to clipboard!', severity: 'success' });
        })
        .catch(() => setSnackbar({ open: true, message: 'Copy failed.', severity: 'error' }));
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 320,
        background: '#f8f9fa',
        borderRadius: 4,
        boxShadow: '0 2px 12px rgba(106, 17, 203, 0.07)',
        p: 3,
      }}
    >
      {qrValue ? (
        <>
          <div ref={qrRef} style={{ width: size, height: size }} />
          {watermark && (
            <Typography variant="caption" sx={{ mt: 1, color: '#888' }}>
              {watermark}
            </Typography>
          )}
          {tag && (
            <Typography variant="caption" sx={{ mt: 0.5, color: '#aaa' }}>
              Tag: {tag}
            </Typography>
          )}
          {template && (
            <Typography variant="caption" sx={{ mt: 0.5, color: '#aaa' }}>
              Template: {template}
            </Typography>
          )}
          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              startIcon={<FileDownloadIcon />}
              onClick={handleDownload}
              sx={{ borderRadius: 2, textTransform: 'none' }}
            >
              Download
            </Button>
            <Button
              variant="outlined"
              startIcon={<ContentCopyIcon />}
              onClick={handleCopy}
              sx={{ borderRadius: 2, textTransform: 'none' }}
            >
              Copy
            </Button>
          </Box>
        </>
      ) : (
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          Your QR code preview will appear here after generation.
        </Typography>
      )}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} variant="filled" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
} 