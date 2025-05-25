import {
    Box,
    Container,
    Grid,
} from '@mui/material';
import {
    lazy,
    Suspense
} from 'react';

// Components
const DocumentationHeroSection = lazy(() => import('@components/sections/DocumentationPage/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));
const FeatureCard = lazy(() => import('@components/ui/FeatureCard'));
const LargeFeatureCard = lazy(() => import('@components/ui/LargeFeatureCard'));

// Constants
import {
    HERO_SECTION_DATA,
    OVERVIEW_SECTION_DATA,
    FEATURES_SECTION_DATA,
} from './constants';

const ImageProcessing = ({ isMobile }) => {
    return (
        <Box>
            {/* Hero Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <DocumentationHeroSection
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
                                {OVERVIEW_SECTION_DATA.features.map((section, index) => (
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
