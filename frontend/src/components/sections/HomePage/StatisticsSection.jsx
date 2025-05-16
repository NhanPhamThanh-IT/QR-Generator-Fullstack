import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { ArrowRight } from 'lucide-react';

export const StatisticsSection = () => {
    return (
        <Box sx={{
            py: { xs: 8, md: 10 },
            bgcolor: 'grey.50',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'divider',
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography variant="h4" component="h2" gutterBottom fontWeight={700}>
                            Trusted by thousands of users worldwide
                        </Typography>
                        <Typography color="text.secondary" paragraph sx={{ mb: 4 }}>
                            Our AI tools have helped individuals and businesses across the globe to streamline workflows,
                            enhance creativity, and achieve more with less effort.
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            endIcon={<ArrowRight size={16} />}
                            sx={{ borderRadius: 28 }}
                        >
                            Read Success Stories
                        </Button>
                    </Grid>

                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                            <Paper elevation={0} sx={{
                                py: 4,
                                px: 5,
                                textAlign: 'center',
                                borderRadius: 4,
                                mb: { xs: 2, md: 0 },
                                background: 'white',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                width: { xs: '45%', sm: '30%' }
                            }}>
                                <Typography variant="h3" component="p" color="primary" fontWeight={700} gutterBottom>
                                    1.2M+
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Monthly Users
                                </Typography>
                            </Paper>

                            <Paper elevation={0} sx={{
                                py: 4,
                                px: 5,
                                textAlign: 'center',
                                borderRadius: 4,
                                mb: { xs: 2, md: 0 },
                                background: 'white',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                width: { xs: '45%', sm: '30%' }
                            }}>
                                <Typography variant="h3" component="p" color="primary" fontWeight={700} gutterBottom>
                                    15+
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    AI Tools
                                </Typography>
                            </Paper>

                            <Paper elevation={0} sx={{
                                py: 4,
                                px: 5,
                                textAlign: 'center',
                                borderRadius: 4,
                                background: 'white',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                width: { xs: '92%', sm: '30%' }
                            }}>
                                <Typography variant="h3" component="p" color="primary" fontWeight={700} gutterBottom>
                                    98%
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Satisfaction Rate
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default StatisticsSection;