import { Box, Container, Grid, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HowItWorksSection = () => {
    const steps = [
        { step: 1, title: "Create an account", description: "Sign up for free to access all our QR code features" },
        { step: 2, title: "Choose your QR code type", description: "Website URL, text, phone number, Wi-Fi, and many more options" },
        { step: 3, title: "Customize and download", description: "Add colors, logos, and download in high resolution" }
    ];

    return (
        <Box sx={{ backgroundColor: '#f3f4ff', py: 10 }}>
            <Container>
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold', letterSpacing: 1.5 }}>
                        SIMPLE PROCESS
                    </Typography>
                    <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>
                        How It Works
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
                        Generate professional QR codes in just three simple steps
                    </Typography>
                </Box>

                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1622676666769-990a5a87fa31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                            alt="QR Code Demo"
                            sx={{
                                width: '100%',
                                borderRadius: 8,
                                boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        {steps.map((item) => (
                            <Box key={item.step} sx={{ mb: 5, display: 'flex', alignItems: 'flex-start' }}>
                                <Box
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        backgroundImage: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                                        color: 'white',
                                        borderRadius: '16px',
                                        width: 56,
                                        height: 56,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mr: 3,
                                        fontWeight: 'bold',
                                        fontSize: 24,
                                        flexShrink: 0,
                                        boxShadow: '0 8px 16px rgba(106, 17, 203, 0.3)'
                                    }}
                                >
                                    {item.step}
                                </Box>
                                <Box>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                        <Button
                            variant="contained"
                            size="large"
                            href="/register"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                mt: 3,
                                py: 1.5,
                                px: 4,
                                backgroundImage: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                                boxShadow: '0 8px 16px rgba(106, 17, 203, 0.3)',
                                '&:hover': {
                                    boxShadow: '0 12px 20px rgba(106, 17, 203, 0.4)',
                                }
                            }}
                        >
                            Start Creating QR Codes
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HowItWorksSection;
