import {
    Box,
    Container,
    Grid,
} from '@mui/material';
import {
    lazy,
    Suspense
} from 'react';
import {
    Microscope,
    LineChart,
} from 'lucide-react'

// Components
const HeroSection = lazy(() => import('@components/sections/DocumentationPage/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));
const FeatureCard = lazy(() => import('@components/ui/FeatureCard'));
const LargeFeatureCard = lazy(() => import('@components/ui/LargeFeatureCard'));
const HelpSection = lazy(() => import('@components/sections/DocumentationPage/HelpSection'));

// Constants
import {
    HERO_SECTION_DATA,
    OVERVIEW_SECTION_DATA,
    FEATURES_SECTION_DATA,
} from './constants';

const MaxAccuracy = ({ isMobile }) => {
    return (
        <Box>
            {/* Hero Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <HeroSection
                    title={HERO_SECTION_DATA.title}
                    description={HERO_SECTION_DATA.description}
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
                                {OVERVIEW_SECTION_DATA.features.map((feature, index) => {
                                    const Icon = feature.icon === "Microscope" ? Microscope : feature.icon === "LineChart" ? LineChart : null;
                                    return (
                                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                                <LargeFeatureCard
                                                    icon={Icon}
                                                    title={feature.title}
                                                    description={feature.description}
                                                    iconColor={feature.iconColor}
                                                />
                                            </Suspense>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>

                        {/* Features Section */}
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
                    </Grid>
                </Container>
            </Box>

            {/* Help Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'white' }} />}>
                <HelpSection />
            </Suspense>
        </Box>
    );
};

export default MaxAccuracy;
