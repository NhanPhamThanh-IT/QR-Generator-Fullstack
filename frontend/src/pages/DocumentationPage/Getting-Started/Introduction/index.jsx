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
import {
    lazy,
    Suspense
} from 'react';
import {
    useNavigate
} from 'react-router-dom';

// Components
const DocumentationHeroSection = lazy(() => import('@components/sections/DocumentationHeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));
const LargeFeatureCard = lazy(() => import('@components/ui/LargeFeatureCard'));
const FeatureCard = lazy(() => import('@components/ui/FeatureCard'));

// Constants
import {
    HERO_SECTION_DATA,
    OVERVIEW_SECTION_DATA,
    FEATURES_SECTION_DATA,
    GETTING_STARTED_SECTION_DATA
} from './constants';

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
                <DocumentationHeroSection
                    title={HERO_SECTION_DATA.title}
                    description={HERO_SECTION_DATA.description}
                    leftChildren={HERO_SECTION_DATA.leftChildren}
                    rightChildren={HERO_SECTION_DATA.rightChildren}
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
                                    title={OVERVIEW_SECTION_DATA.title}
                                    subtitle={OVERVIEW_SECTION_DATA.description}
                                    centered={true}
                                />
                            </Suspense>
                            <Grid container spacing={3}>
                                {OVERVIEW_SECTION_DATA.features.map((feature) => {
                                    const Icon = feature.icon === "BookOpen" ? BookOpen : feature.icon === "Rocket" ? Rocket : null;
                                    return (
                                        <Grid size={{ xs: 12, md: 6 }} key={feature.title}>
                                            <LargeFeatureCard
                                                icon={Icon}
                                                iconColor={theme.palette[feature.iconColorKey.split('.')[0]][feature.iconColorKey.split('.')[1]]}
                                                title={feature.title}
                                                description={feature.description}
                                            />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>

                        {/* Key Features */}
                        <Grid size={{ xs: 12 }}>
                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                <SectionHeading
                                    title={FEATURES_SECTION_DATA.title}
                                    subtitle={FEATURES_SECTION_DATA.description}
                                    centered={true}
                                />
                            </Suspense>
                            <Grid container spacing={3}>
                                {FEATURES_SECTION_DATA.features.map((feature) => {
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
                                                {GETTING_STARTED_SECTION_DATA.title}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                            {GETTING_STARTED_SECTION_DATA.description}
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
        </Box >
    );
};

export default Introduction;
