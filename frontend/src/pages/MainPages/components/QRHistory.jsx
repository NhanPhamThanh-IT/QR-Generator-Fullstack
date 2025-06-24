import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import QRHistoryItem from './QRHistoryItem';
import { getQRHistory, clearQRHistory } from '../../../services/qrService';

export default function QRHistory({ setSnackbar }) {
  const [history, setHistory] = useState([]);

  // Fetch history on mount
  useEffect(() => {
    getQRHistory()
      .then(h => {
        if (Array.isArray(h)) setHistory(h);
      })
      .catch(() => { });
  }, []);

  // Clear history
  const handleClearHistory = async () => {
    try {
      await clearQRHistory();
      setHistory([]);
      setSnackbar && setSnackbar({ open: true, message: 'History cleared successfully.', severity: 'success' });
    } catch {
      setSnackbar && setSnackbar({ open: true, message: 'Failed to clear history.', severity: 'error' });
    }
  };

  // Sync history from backend
  const handleSyncHistory = async () => {
    try {
      const h = await getQRHistory();
      setHistory(h);
      setSnackbar && setSnackbar({ open: true, message: 'History synced successfully.', severity: 'success' });
    } catch {
      setSnackbar && setSnackbar({ open: true, message: 'Failed to sync history.', severity: 'error' });
    }
  };

  return (
    <Box sx={{ mt: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold">
          QR Code History
        </Typography>
        <Box>
          <Button
            variant="outlined"
            onClick={handleSyncHistory}
            sx={{ borderRadius: 2, textTransform: 'none', mr: 1 }}
          >
            Sync History
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteSweepIcon />}
            onClick={handleClearHistory}
            disabled={history.length === 0}
            sx={{ borderRadius: 2, textTransform: 'none' }}
          >
            Clear History
          </Button>
        </Box>
      </Box>
      {history.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No QR codes have been generated yet.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {history.map((entry) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={entry.id}>
              <QRHistoryItem
                entry={entry}
                onDownload={() => handleHistoryDownload(entry)}
                onCopy={() => handleHistoryCopy(entry)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
