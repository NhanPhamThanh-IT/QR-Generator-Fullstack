import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import QRHistoryItem from './QRHistoryItem';

export default function QRHistory({ history, onDownload, onCopy, onClear }) {
  return (
    <Box sx={{ mt: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold">
          History
        </Typography>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteSweepIcon />}
          onClick={onClear}
          disabled={history.length === 0}
          sx={{ borderRadius: 2, textTransform: 'none' }}
        >
          Clear History
        </Button>
      </Box>
      {history.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No QR codes generated yet.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {history.map((entry) => (
            <Grid item xs={12} sm={6} md={4} key={entry.id}>
              <QRHistoryItem
                entry={entry}
                onDownload={() => onDownload(entry)}
                onCopy={() => onCopy(entry)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
} 