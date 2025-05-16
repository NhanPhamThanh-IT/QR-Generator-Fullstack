import { Box, Button, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Sparkles } from 'lucide-react';

export const CTASection = () => {
    const theme = useTheme();

    return (
        <Box sx={{
            py: { xs: 10, md: 14 },
            bgcolor: theme.palette.primary.main,
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -120,
                    left: -50,
                    width: 250,
                    height: 250,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Sparkles size={48} style={{ marginBottom: 16, opacity: 0.9 }} />

                    <Typography variant="h3" component="h2" gutterBottom fontWeight={700}>
                        Ready to Supercharge Your Workflow?
                    </Typography>

                    <Typography variant="h6" component="p" sx={{ mb: 5, opacity: 0.9, fontWeight: 400 }}>
                        Join thousands of users who are already using our AI tools to save time, boost productivity, and achieve more.
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            sx={{
                                px: 4,
                                borderRadius: 28,
                                boxShadow: '0 8px 20px rgba(131, 56, 236, 0.3)',
                                '&:hover': {
                                    boxShadow: '0 12px 24px rgba(131, 56, 236, 0.4)',
                                }
                            }}
                        >
                            Get Started for Free
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{
                                px: 4,
                                borderRadius: 28,
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                                color: 'white',
                                '&:hover': {
                                    borderColor: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                }
                            }}
                        >
                            View Pricing
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default CTASection;