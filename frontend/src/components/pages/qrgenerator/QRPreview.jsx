import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { generateQR } from '../../../services/qrService';

const QRPreview = ({ formData }) => {
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    const fetchQR = async () => {
      if (formData.text) {
        const payload = {
          data: formData.text,
          qr_color: formData.color || '#000000',
          bg_color: formData.bgColor || '#ffffff',
          size: Number(formData.size) || 200,
          logo: formData.logoBase64 || undefined,
          // Add more fields as needed
        };
        const img = await generateQR(payload);
        setQrUrl(img);
      } else {
        setQrUrl('');
      }
    };
    fetchQR();
  }, [formData]);

  return (
    <Card sx={{ p: 3, minHeight: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: 2 }}>
      <CardContent>
        <Typography variant="h6" mb={2}>QR Code Preview</Typography>
        <Box sx={{ position: 'relative', width: 200, height: 200 }}>
          {qrUrl && (
            <img
              src={qrUrl}
              alt="QR Preview"
              style={{ width: 200, height: 200, borderRadius: 8, background: '#f5f5f5' }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default QRPreview; 