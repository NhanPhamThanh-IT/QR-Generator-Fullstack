import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid,
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import { ChevronRight, Sparkles } from 'lucide-react';

const HeroSection = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  backgroundImage
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        background: backgroundImage 
          ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`
          : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: { xs: 12, md: 20 },
        pb: { xs: 12, md: 15 },
        color: 'white',
        overflow: 'hidden'
      }}
    >
      {/* Decorative elements */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.light}22 0%, ${theme.palette.primary.light}00 70%)`,
          opacity: 0.6,
          display: { xs: 'none', md: 'block' }
        }} 
      />
      <Box 
        sx={{ 
          position: 'absolute',
          bottom: '5%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.light}22 0%, ${theme.palette.secondary.light}00 70%)`,
          opacity: 0.4,
          display: { xs: 'none', md: 'block' }
        }} 
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Typography 
                component="h1"
                variant={isMobile ? "h3" : "h2"}
                sx={{ 
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2,
                  textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                {title}
              </Typography>
              
              <Typography 
                variant={isMobile ? "body1" : "h6"}
                sx={{ 
                  mb: 4, 
                  opacity: 0.9,
                  maxWidth: 600,
                  textShadow: '0 1px 8px rgba(0,0,0,0.1)'
                }}
              >
                {subtitle}
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button 
                  variant="contained" 
                  color="secondary"
                  size="large"
                  endIcon={<ChevronRight />}
                  sx={{ 
                    px: 4,
                    boxShadow: '0 4px 14px rgba(131, 56, 236, 0.4)',
                    '&:hover': {
                      boxShadow: '0 6px 20px rgba(131, 56, 236, 0.6)',
                    }
                  }}
                >
                  {primaryButtonText}
                </Button>
                
                {secondaryButtonText && (
                  <Button 
                    variant="outlined" 
                    size="large"
                    sx={{ 
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    {secondaryButtonText}
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box 
              sx={{ 
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Paper
                elevation={12}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  width: '100%',
                  maxWidth: 400,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                  transform: 'perspective(1500px) rotateY(-5deg)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'perspective(1500px) rotateY(0deg) translateY(-10px)',
                  }
                }}
              >
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                  <Sparkles size={50} color={theme.palette.primary.main} />
                </Box>
                <Typography variant="h5" align="center" color="text.primary" fontWeight={600} gutterBottom>
                  AI-Powered Tools
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary" paragraph>
                  Unlock the power of artificial intelligence with our suite of tools designed to enhance productivity and creativity.
                </Typography>
                <Box sx={{ textAlign: 'center', mt: 1 }}>
                  <Button variant="contained" color="primary">
                    Get Started
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;