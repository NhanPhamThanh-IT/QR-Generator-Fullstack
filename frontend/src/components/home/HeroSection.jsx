import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroSection = () => {
    const navigate = useNavigate();

    const goToRoute = (route) => () => {
        navigate(route);
    };

    const goToSection = (section) => () => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(120deg, #6a11cb 0%, #2575fc 100%)',
                color: 'white',
                textAlign: 'center',
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

            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
                            QR Codes for the <span style={{ color: '#ffeb3b' }}>Modern Business</span>
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                            Transform how you connect with customers. Create custom QR codes for websites, business cards, products, and more.
                        </Typography>
                        <Box sx={{ mt: 5, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={goToRoute('/qr-generator')}
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    py: 1.5,
                                    px: 4,
                                    backgroundColor: '#ffffff',
                                    color: '#6a11cb',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                    }
                                }}
                            >
                                Get Started - Free
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={goToSection('features')}
                                sx={{
                                    py: 1.5,
                                    px: 4,
                                    borderColor: 'white',
                                    color: 'white',
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        borderColor: 'white'
                                    }
                                }}
                            >
                                Explore Features
                            </Button>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src="https://imgv3.fotor.com/images/share/Various-QR-code-types-to-choose-from-on-Fotors-QR-code-generator.jpg"
                            alt="QR Code Example"
                            sx={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: 4,
                                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.3)',
                                transform: { xs: 'none', md: 'rotate(2deg)' },
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
