import {
    Box,
    Container,
    Grid,
} from '@mui/material';
import { lazy, Suspense } from 'react';
import { useTheme } from '@mui/material/styles';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));
const FeatureCard = lazy(() => import('@components/ui/FeatureCard'));
const LargeFeatureCard = lazy(() => import('@components/ui/LargeFeatureCard'));

// Constants
import {
    HERO_SECTION_DATA,
    aiTools,
    OVERVIEW_SECTION_DATA
} from './constants';

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
                                {OVERVIEW_SECTION_DATA.map((section, index) => (
                                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                                        <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                            <LargeFeatureCard
                                                icon={section.icon}
                                                title={section.title}
                                                description={section.description}
                                                iconColor={section.iconColor}
                                            />
                                        </Suspense>
                                    </Grid>
                                ))}
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
