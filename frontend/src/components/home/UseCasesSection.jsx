import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';

const UseCasesSection = () => {
    const useCases = [
        { title: "Restaurant Menus", description: "Replace physical menus with easy-to-update digital versions", image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
        { title: "Business Cards", description: "Add all your contact information and social profiles in one scan", image: "https://images.unsplash.com/photo-1572502069441-dbd9c1d14d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
        { title: "Product Packaging", description: "Link customers to instruction manuals, warranty info, and more", image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
        { title: "Marketing Materials", description: "Track engagement on your print advertisements and flyers", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" }
    ];

    return (
        <Box sx={{ py: 10 }}>
            <Container>
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold', letterSpacing: 1.5 }}>
                        APPLICATIONS
                    </Typography>
                    <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>
                        QR Code Use Cases
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
                        Discover how businesses are using our QR code solutions to enhance customer experience
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {useCases.map((useCase, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Card sx={{
                                height: '100%',
                                borderRadius: 4,
                                overflow: 'hidden',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                                transition: '0.3s',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 15px 30px rgba(0,0,0,0.12)'
                                }
                            }}>
                                <Box sx={{ height: 200, overflow: 'hidden' }}>
                                    <Box
                                        component="img"
                                        src={useCase.image}
                                        alt={useCase.title}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: '0.5s',
                                            '&:hover': {
                                                transform: 'scale(1.1)'
                                            }
                                        }}
                                    />
                                </Box>
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {useCase.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {useCase.description}
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

export default UseCasesSection;
