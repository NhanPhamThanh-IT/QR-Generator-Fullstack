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
    Sparkles,
} from 'lucide-react';
import { lazy, Suspense } from 'react';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));
const FeatureCard = lazy(() => import('@components/ui/FeatureCard'));

// Constants
import { HERO_SECTION_DATA, aiTools } from '@constants/DocumentationPage/Core-Features/aiToolsOverview';

const AIToolsOverview = ({ isMobile }) => {
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
                                    title="AI Tools Platform"
                                    subtitle="Our platform offers a comprehensive suite of AI-powered tools designed to streamline your workflow and enhance productivity."
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
                                                        Advanced AI Capabilities
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body1" color="text.secondary">
                                                    Our platform leverages cutting-edge artificial intelligence to provide powerful tools for text generation, image processing, code assistance, and document analysis. Each tool is designed to enhance your productivity and creativity.
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
                                                        Seamless Integration
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body1" color="text.secondary">
                                                    Our AI tools are designed to work together seamlessly, allowing you to combine different capabilities to create powerful workflows. Whether you're a developer, content creator, or business professional, our tools adapt to your needs.
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* AI Tools Section */}
                        <Grid size={{ xs: 12 }}>
                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                <SectionHeading
                                    title="Available AI Tools"
                                    subtitle="Explore our range of AI-powered tools designed to enhance your productivity"
                                    centered={true}
                                />
                            </Suspense>
                            <Grid container spacing={3}>
                                {aiTools.map((tool) => {
                                    return (
                                        <Grid size={{ xs: 12, md: 6, lg: 3 }} key={tool.title}>
                                            <Suspense fallback={<Box sx={{ height: '200px', bgcolor: 'grey.100' }} />}>
                                                <FeatureCard
                                                    title={tool.title}
                                                    description={tool.description}
                                                    icon={tool.icon}
                                                    accentColor={tool.color}
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

export default AIToolsOverview;
