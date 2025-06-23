import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SecurityIcon from '@mui/icons-material/Security';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import SpeedIcon from '@mui/icons-material/Speed';

const FeaturesSection = () => {
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
            icon: <AnalyticsIcon fontSize="large" color="primary" />,
            title: "Advanced Analytics",
            description: "Track scans and engagement with detailed analytics."
        },
        {
            icon: <SecurityIcon fontSize="large" color="primary" />,
            title: "Secure & Private",
            description: "Your data is always protected with enterprise-grade security."
        },
        {
            icon: <SpeedIcon fontSize="large" color="primary" />,
            title: "Lightning Fast",
            description: "Generate QR codes within milliseconds, ready for immediate use."
        },
        {
            icon: <EnhancedEncryptionIcon fontSize="large" color="primary" />,
            title: "Dynamic QR Codes",
            description: "Create QR codes that you can edit anytime without reprinting."
        }
    ];

    return (
        <Box id="features" sx={{ py: 10 }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold', letterSpacing: 1.5 }}>
                        POWERFUL FEATURES
                    </Typography>
                    <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>
                        Why Choose Our QR Generator?
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
                        We offer enterprise-grade QR code solutions with features designed to help your business grow
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: '0.3s',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 12px 20px rgba(0,0,0,0.12)'
                                    }
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                                    <Box sx={{
                                        mb: 2,
                                        backgroundColor: 'rgba(106, 17, 203, 0.1)',
                                        width: 60,
                                        height: 60,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {feature.icon}
                                    </Box>
                                    <Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default FeaturesSection;
