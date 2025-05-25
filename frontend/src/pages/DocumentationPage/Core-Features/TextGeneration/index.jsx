import {
    Box,
    Container,
    Grid,
} from '@mui/material';
import { lazy, Suspense } from 'react';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));
const FeatureCard = lazy(() => import('@components/ui/FeatureCard'));
const LargeFeatureCard = lazy(() => import('@components/ui/LargeFeatureCard'));

// Constants
import {
    HERO_SECTION_DATA,
    features,
    OVERVIEW_SECTION_DATA
} from './constants';

const TextGeneration = ({ isMobile }) => {
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
                                    subtitle="Our text generation tools combine cutting-edge AI technology with powerful language models to help you create, analyze, and optimize text content with unprecedented precision."
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

                        {/* Features Section */}
                        <Grid size={{ xs: 12 }}>
                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                <SectionHeading
                                    title="Key Features"
                                    subtitle="Discover the powerful capabilities of our text generation tools"
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
