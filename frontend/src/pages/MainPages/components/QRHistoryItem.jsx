import React from 'react';
import { Paper, Box, Typography, IconButton } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';

export default function QRHistoryItem({ entry, onDownload, onCopy }) {
  const renderHistoryQR = (entry) => {
    return entry.output_format === 'png' ? (
      <QRCodeCanvas
        value={entry.input}
        size={64}
        fgColor={entry.qr_color}
        bgColor={entry.bg_color}
        level="Q"
        includeMargin={false}
        imageSettings={entry.logo ? {
          src: entry.logo,
          height: 12,
          width: 12,
          excavate: true,
        } : undefined}
        style={{ borderRadius: entry.corner_radius }}
      />
    ) : (
      <QRCodeSVG
        value={entry.input}
        size={64}
        fgColor={entry.qr_color}
        bgColor={entry.bg_color}
        level="Q"
        includeMargin={false}
        imageSettings={entry.logo ? {
          src: entry.logo,
          height: 12,
          width: 12,
          excavate: true,
        } : undefined}
        style={{ borderRadius: entry.corner_radius }}
      />
    );
  };

  return (
    <Paper sx={{ p: 2, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
      {renderHistoryQR(entry)}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="body2" noWrap title={entry.input} sx={{ fontWeight: 500 }}>
          {entry.input}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {(entry.data_type || '').toUpperCase()} • {new Date(entry.timestamp).toLocaleString()}
        </Typography>
      </Box>
      <IconButton onClick={onDownload} size="small">
        <FileDownloadIcon fontSize="small" />
      </IconButton>
      <IconButton onClick={onCopy} size="small">
        <ContentCopyIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
} 