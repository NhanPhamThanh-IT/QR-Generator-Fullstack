import { Box, Container, Typography, Button } from '@mui/material';

const CtaSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        background: 'linear-gradient(120deg, #6a11cb 0%, #2575fc 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: 'radial-gradient(circle, #ffffff 10%, transparent 10%), radial-gradient(circle, #ffffff 10%, transparent 10%)',
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0, 15px 15px',
      }} />

      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 3 }}>
          Ready to Elevate Your <span style={{ color: '#ffeb3b' }}>Marketing</span>?
        </Typography>
        <Typography variant="h6" sx={{ mb: 5, maxWidth: '800px', mx: 'auto', opacity: 0.9 }}>
          Join thousands of businesses already using our QR code platform to connect with customers in innovative ways.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            href="/register"
            sx={{
              backgroundColor: '#ffffff',
              color: '#6a11cb',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
              px: 4,
              py: 1.5
            }}
          >
            Get Started For Free
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="/demo"
            sx={{
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: 'white'
              },
              px: 4,
              py: 1.5
            }}
          >
            Request Demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CtaSection;
