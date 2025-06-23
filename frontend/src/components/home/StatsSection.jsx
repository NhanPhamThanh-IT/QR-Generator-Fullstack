import { Box, Container, Grid, Typography } from '@mui/material';

const StatsSection = () => {
    const stats = [
        { number: '5M+', label: 'QR Codes Created' },
        { number: '98%', label: 'Scan Success Rate' },
        { number: '10K+', label: 'Business Users' },
        { number: '200+', label: 'Countries Served' }
    ];

    return (
        <Box sx={{ backgroundColor: 'white', py: 6, borderBottom: '1px solid #e0e0e0' }}>
            <Container maxWidth="lg">
                <Grid container spacing={3} justifyContent="center">
                    {stats.map((stat, index) => (
                        <Grid size={{ xs: 12, md: 3 }} key={index} sx={{ textAlign: 'center' }}>
                            <Typography variant="h3" fontWeight="bold" color="primary">
                                {stat.number}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {stat.label}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default StatsSection;
