import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';

const PricingSection = () => {
    const features = [
        "Up to 1,000 QR codes",
        "Advanced analytics & reporting",
        "Custom branding & design",
        "Dynamic QR codes",
        "Bulk creation & API access"
    ];

    return (
        <Box sx={{ py: 10 }}>
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold', letterSpacing: 1.5 }}>
                            FLEXIBLE PRICING
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, mb: 3 }}>
                            Plans for businesses of all sizes
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                            Whether you're an individual creator or a large enterprise, we have pricing options that match your needs. Start with our forever-free plan and upgrade as you grow.
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                            <Button
                                variant="contained"
                                size="large"
                                href="/pricing"
                                sx={{
                                    py: 1.5,
                                    px: 4,
                                    backgroundImage: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                }}
                            >
                                View Pricing
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                href="/contact"
                                sx={{
                                    py: 1.5,
                                    px: 4,
                                    textTransform: 'none',
                                }}
                            >
                                Contact Sales
                            </Button>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 15px 50px rgba(0,0,0,0.1)' }}>
                            <CardContent sx={{ p: 0 }}>
                                <Box sx={{ p: 3, borderBottom: '1px solid #eee', bgcolor: '#f9fafc' }}>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        Most Popular Plan
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        For growing businesses
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 2 }}>
                                        <Typography variant="h3" fontWeight="bold">$29</Typography>
                                        <Typography variant="subtitle1" sx={{ ml: 1 }}>/ month</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ p: 3 }}>
                                    {features.map((feature, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                            <Box sx={{
                                                color: 'success.main',
                                                mr: 1.5,
                                                fontSize: 20,
                                                fontWeight: 'bold'
                                            }}>✓</Box>
                                            <Typography variant="body1">{feature}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default PricingSection;
