import { Box, Container, Typography, useTheme } from '@mui/material';

export const HeroSection = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                background: `linear-gradient(to right, ${theme.palette.primary.main}10, ${theme.palette.primary.light}20)`,
                borderBottom: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                    Get in Touch
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, fontWeight: 400 }}>
                    Have questions about our AI tools? Need help with your account? Or maybe you just want to say hello? We're here for you.
                </Typography>
            </Container>
        </Box>
    )
};

export default HeroSection;