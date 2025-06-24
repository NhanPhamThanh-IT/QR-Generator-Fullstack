import { Box, Typography, Button, Snackbar, Alert } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';

export default function QRPreview({
  qrValue,
  size,
  qrColor,
  bgColor,
  cornerRadius,
  logo,
  outputFormat,
  onDownload,
  onCopy,
  snackbar,
  setSnackbar,
}) {
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
          {outputFormat === 'png' ? (
            <QRCodeCanvas
              value={qrValue}
              size={size}
              fgColor={qrColor}
              bgColor={bgColor}
              level="Q"
              includeMargin={false}
              imageSettings={logo ? {
                src: logo,
                x: undefined,
                y: undefined,
                height: size * 0.2,
                width: size * 0.2,
                excavate: true,
              } : undefined}
              style={{ borderRadius: cornerRadius }}
            />
          ) : (
            <QRCodeSVG
              value={qrValue}
              size={size}
              fgColor={qrColor}
              bgColor={bgColor}
              level="Q"
              includeMargin={false}
              imageSettings={logo ? {
                src: logo,
                x: undefined,
                y: undefined,
                height: size * 0.2,
                width: size * 0.2,
                excavate: true,
              } : undefined}
              style={{ borderRadius: cornerRadius }}
            />
          )}
          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              startIcon={<FileDownloadIcon />}
              onClick={onDownload}
              sx={{ borderRadius: 2, textTransform: 'none' }}
            >
              Download
            </Button>
            <Button
              variant="outlined"
              startIcon={<ContentCopyIcon />}
              onClick={onCopy}
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