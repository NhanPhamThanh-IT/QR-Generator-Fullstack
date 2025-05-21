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
    Brain,
    CheckCircle2,
} from 'lucide-react';
import { lazy, Suspense } from 'react';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));
const FeatureCard = lazy(() => import('@components/ui/FeatureCard'));

// Constants
import { HERO_SECTION_DATA, features } from '@constants/DocumentationPage/Core-Features/textGeneration';

const TextGeneration = ({ isMobile }) => {
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
                                    title="Advanced Text Generation"
                                    subtitle="Our text generation tools leverage state-of-the-art language models to help you create, analyze, and optimize content efficiently."
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
                                                    <Brain size={24} color={theme.palette.primary.main} />
                                                    <Typography variant="h6" fontWeight={600}>
                                                        Powerful Language Models
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body1" color="text.secondary">
                                                    Our text generation tools are powered by advanced language models that understand context, tone, and style. Whether you need to create engaging content, summarize complex documents, or analyze text sentiment, our tools deliver exceptional results.
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
                                                    <CheckCircle2 size={24} color={theme.palette.secondary.main} />
                                                    <Typography variant="h6" fontWeight={600}>
                                                        Quality Assurance
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body1" color="text.secondary">
                                                    Every generated text undergoes rigorous quality checks to ensure accuracy, coherence, and relevance. Our tools maintain high standards while adapting to your specific requirements and style guidelines.
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
                                    subtitle="Explore the powerful capabilities of our text generation tools"
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

export default TextGeneration;
