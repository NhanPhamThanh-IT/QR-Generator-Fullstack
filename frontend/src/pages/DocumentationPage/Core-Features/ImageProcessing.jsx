import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Stack,
    useTheme,
} from '@mui/material';
import {
    Image,
    Sparkles,
} from 'lucide-react';
import { lazy, Suspense } from 'react';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));
const FeatureCard = lazy(() => import('@components/ui/FeatureCard'));

// Constants
import { HERO_SECTION_DATA, features } from '@constants/DocumentationPage/Core-Features/imageProcessing';

const ImageProcessing = ({ isMobile }) => {
    const theme = useTheme();

    return (
        <Box>
            {/* Hero Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <HeroSection
                    heroData={HERO_SECTION_DATA}
                    isMobile={isMobile}
                />
            </Suspense>

            {/* Main Content */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Overview Section */}
                        <Grid size={{ xs: 12 }}>
                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                <SectionHeading
                                    title="Advanced Image Processing"
                                    subtitle="Our image processing tools combine cutting-edge AI technology with powerful algorithms to help you create, enhance, and analyze images with unprecedented precision."
                                    centered={true}
                                />
                            </Suspense>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Card
                                        elevation={0}
                                        sx={{
                                            height: '100%',
                                            borderRadius: 3,
                                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            transition: 'transform 0.2s ease-in-out',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                            },
                                        }}
                                    >
                                        <CardContent sx={{ p: 4 }}>
                                            <Stack spacing={3}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                    <Image size={24} color={theme.palette.primary.main} />
                                                    <Typography variant="h6" fontWeight={600}>
                                                        State-of-the-Art Technology
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body1" color="text.secondary">
                                                    Our image processing tools leverage advanced AI models and neural networks to deliver exceptional results. From generating new images to enhancing existing ones, our technology ensures high-quality output for all your visual needs.
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Card
                                        elevation={0}
                                        sx={{
                                            height: '100%',
                                            borderRadius: 3,
                                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            transition: 'transform 0.2s ease-in-out',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                            },
                                        }}
                                    >
                                        <CardContent sx={{ p: 4 }}>
                                            <Stack spacing={3}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                    <Sparkles size={24} color={theme.palette.secondary.main} />
                                                    <Typography variant="h6" fontWeight={600}>
                                                        Creative Freedom
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body1" color="text.secondary">
                                                    Express your creativity with our versatile image processing tools. Whether you're a professional designer, photographer, or hobbyist, our platform provides the tools you need to bring your vision to life.
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Features Section */}
                        <Grid size={{ xs: 12 }}>
                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                <SectionHeading
                                    title="Key Features"
                                    subtitle="Discover the powerful capabilities of our image processing tools"
                                    centered={true}
                                />
                            </Suspense>
                            <Grid container spacing={3}>
                                {features.map((feature) => {
                                    return (
                                        <Grid size={{ xs: 12, md: 6, lg: 3 }} key={feature.title}>
                                            <Suspense fallback={<Box sx={{ height: '200px', bgcolor: 'grey.100' }} />}>
                                                <FeatureCard
                                                    title={feature.title}
                                                    description={feature.description}
                                                    icon={feature.icon}
                                                    accentColor={feature.color}
                                                />
                                            </Suspense>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default ImageProcessing;
