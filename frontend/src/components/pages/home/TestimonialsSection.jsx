import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "This QR code solution has transformed how we engage with customers. The analytics feature has been invaluable for tracking our campaign performance.",
            name: "Sarah Johnson",
            role: "Marketing Director, TechCorp",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            quote: "The custom branding options helped us create professional QR codes that match our company's visual identity. Extremely satisfied with the service.",
            name: "Michael Chen",
            role: "Restaurant Owner",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            quote: "We've been using these QR codes for our event tickets and the scanning reliability is exceptional. The dynamic QR feature saves us so much time.",
            name: "Jessica Williams",
            role: "Event Manager",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];

    return (
        <Box sx={{
            backgroundColor: '#f8f9fa',
            py: 10,
            backgroundImage: 'radial-gradient(#e0e6ff 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            mb: 18,
        }}>
            <Container>
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold', letterSpacing: 1.5 }}>
                        TRUSTED BY THOUSANDS
                    </Typography>
                    <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>
                        What Our Customers Say
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {testimonials.map((testimonial, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card sx={{
                                height: '100%',
                                borderRadius: 4,
                                p: 3,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Box sx={{ fontSize: 50, color: 'primary.main', height: 30, mb: 2 }}>
                                    "
                                </Box>
                                <Typography variant="body1" sx={{ flex: 1, mb: 3, fontStyle: 'italic' }}>
                                    {testimonial.quote}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box
                                        component="img"
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: '50%',
                                            mr: 2
                                        }}
                                    />
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {testimonial.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {testimonial.role}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TestimonialsSection;
