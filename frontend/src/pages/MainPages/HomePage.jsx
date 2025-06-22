import { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography, Paper, Card, CardContent, CircularProgress, useTheme, useMediaQuery } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LinkIcon from '@mui/icons-material/Link';
import DownloadIcon from '@mui/icons-material/Download';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const HomePage = () => {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleGenerateQR = () => {
    if (!url) return;

    setLoading(true);
    // Simulate API call to generate QR code
    setTimeout(() => {
      // This would be replaced with actual API call
      setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`);
      setLoading(false);
    }, 1000);
  };

  const features = [
    {
      icon: <QrCodeIcon fontSize="large" color="primary" />,
      title: "Custom QR Codes",
      description: "Create personalized QR codes with custom colors and logos."
    },
    {
      icon: <PhoneIphoneIcon fontSize="large" color="primary" />,
      title: "Mobile Friendly",
      description: "QR codes optimized for quick scanning on all mobile devices."
    },
    {
      icon: <QrCodeScannerIcon fontSize="large" color="primary" />,
      title: "Analytics",
      description: "Track scans and engagement with detailed analytics."
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: 'linear-gradient(120deg, #6a11cb 0%, #2575fc 100%)',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
            Generate QR Codes <span style={{ color: '#ffeb3b' }}>Instantly</span>
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Create custom QR codes for your website, business card, or any URL in seconds. Free, fast and easy to use!
          </Typography>

          <Paper
            elevation={5}
            sx={{
              p: 4,
              borderRadius: 2,
              maxWidth: '800px',
              mx: 'auto',
              mt: 5,
              backgroundColor: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <TextField
                  fullWidth
                  label="Enter website URL or text"
                  variant="outlined"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  InputProps={{
                    startAdornment: <LinkIcon color="action" sx={{ mr: 1 }} />,
                  }}
                  sx={{ backgroundColor: 'white' }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleGenerateQR}
                  disabled={!url || loading}
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <QrCodeIcon />}
                  sx={{
                    py: 1.5,
                    backgroundColor: '#6a11cb',
                    '&:hover': {
                      backgroundColor: '#5a0cb2',
                    }
                  }}
                >
                  {loading ? 'Generating...' : 'Generate QR Code'}
                </Button>
              </Grid>
            </Grid>

            {qrCode && (
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Box
                  component="img"
                  src={qrCode}
                  alt="QR Code"
                  sx={{
                    maxWidth: '200px',
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: 'white',
                    p: 2,
                  }}
                />
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    sx={{ mr: 2 }}
                    onClick={() => {
                      const link = document.createElement('a');
                      link.download = 'qrcode.png';
                      link.href = qrCode;
                      link.click();
                    }}
                  >
                    Download
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<ColorLensIcon />}
                  >
                    Customize
                  </Button>
                </Box>
              </Box>
            )}
          </Paper>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 6 }}>
          Why Choose Our QR Generator?
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ backgroundColor: '#e9ecef', py: 8 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 6 }}>
            How It Works
          </Typography>

          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1622676666769-990a5a87fa31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="QR Code Demo"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Box display="flex" alignItems="center" mb={3}>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      borderRadius: '50%',
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}
                  >
                    1
                  </Box>
                  <Typography variant="h6">Enter any URL or text</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={3}>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      borderRadius: '50%',
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}
                  >
                    2
                  </Box>
                  <Typography variant="h6">Click "Generate QR Code" button</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      borderRadius: '50%',
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}
                  >
                    3
                  </Box>
                  <Typography variant="h6">Download or share your QR code</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call To Action */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          background: 'linear-gradient(120deg, #6a11cb 0%, #2575fc 100%)',
          color: 'white',
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
            Ready to Create Your QR Code?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Generate professional QR codes for your business or personal use in seconds.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#ffffff',
              color: '#6a11cb',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
              px: 4,
              py: 1.5
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Create QR Code Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;