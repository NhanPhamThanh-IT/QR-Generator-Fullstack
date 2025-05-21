import {
    Box,
    Container,
    Typography,
    Grid,
    List,
    ListItemIcon,
    ListItemText,
    Divider,
    useTheme,
    ListItemButton,
    Card,
    CardContent,
    Stack,
} from '@mui/material';
import {
    ArrowRight,
    BookOpen,
    Code2,
    Rocket,
} from 'lucide-react';
import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));
const FeatureCard = lazy(() => import('@components/ui/FeatureCard'));

// Constants
import { HERO_SECTION_DATA, features } from '@constants/DocumentationPage/Getting-Started/IntroductionConstants';

const Introduction = ({ isMobile }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

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
                                    title="Overview"
                                    subtitle="Our platform provides a comprehensive suite of AI-powered tools designed to streamline your workflow and enhance productivity."
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
                                                    <BookOpen size={24} color={theme.palette.primary.main} />
                                                    <Typography variant="h6" fontWeight={600}>
                                                        What is AI Tools Platform?
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body1" color="text.secondary">
                                                    Our platform is a comprehensive suite of AI-powered tools designed to help you work smarter, not harder. From text generation to image processing, we provide the tools you need to enhance your productivity and creativity.
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
                                                    <Rocket size={24} color={theme.palette.secondary.main} />
                                                    <Typography variant="h6" fontWeight={600}>
                                                        Why Choose Us?
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body1" color="text.secondary">
                                                    With state-of-the-art AI technology, intuitive interfaces, and comprehensive documentation, we make it easy for you to leverage the power of artificial intelligence in your projects.
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Key Features */}
                        <Grid size={{ xs: 12 }}>
                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                <SectionHeading
                                    title="Key Features"
                                    subtitle="Our platform offers a range of powerful AI tools designed to streamline your workflow and enhance productivity."
                                    centered={true}
                                />
                            </Suspense>
                            <Grid container spacing={3}>
                                {features.map((feature) => {
                                    const Icon = feature.icon;
                                    return (
                                        <Grid size={{ xs: 12, md: 6, lg: 3 }} key={feature.title}>
                                            <Suspense fallback={<Box sx={{ height: '200px', bgcolor: 'grey.100' }} />}>
                                                <FeatureCard
                                                    title={feature.title}
                                                    description={feature.description}
                                                    icon={Icon}
                                                    accentColor={feature.color}
                                                />
                                            </Suspense>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>

                        {/* Getting Started */}
                        <Grid size={{ xs: 12 }}>
                            <Card
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    overflow: 'hidden',
                                }}
                            >
                                <CardContent sx={{ p: 0 }}>
                                    <Box sx={{ p: 4, bgcolor: theme.palette.primary.main, color: 'white' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                            <Code2 size={24} />
                                            <Typography variant="h5" fontWeight={600}>
                                                Getting Started
                                            </Typography>
                                        </Box>
                                        <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                            Follow these steps to begin your journey with our AI tools platform
                                        </Typography>
                                    </Box>
                                    <List sx={{ p: 3 }}>
                                        <ListItemButton
                                            onClick={() => handleNavigation('/tools')}
                                            sx={{
                                                borderRadius: 2,
                                                mb: 2,
                                                '&:hover': {
                                                    bgcolor: theme.palette.primary.main + '10',
                                                },
                                            }}
                                        >
                                            <ListItemIcon>
                                                <ArrowRight color={theme.palette.primary.main} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Explore the tools"
                                                secondary="Browse through our collection of AI-powered tools"
                                                primaryTypographyProps={{
                                                    fontWeight: 500,
                                                }}
                                            />
                                        </ListItemButton>
                                        <Divider component="li" sx={{ my: 2 }} />
                                        <ListItemButton
                                            onClick={() => handleNavigation('/docs/quick-start')}
                                            sx={{
                                                borderRadius: 2,
                                                '&:hover': {
                                                    bgcolor: theme.palette.primary.main + '10',
                                                },
                                            }}
                                        >
                                            <ListItemIcon>
                                                <ArrowRight color={theme.palette.primary.main} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Start building"
                                                secondary="Begin integrating our tools into your projects"
                                                primaryTypographyProps={{
                                                    fontWeight: 500,
                                                }}
                                            />
                                        </ListItemButton>
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Introduction;
