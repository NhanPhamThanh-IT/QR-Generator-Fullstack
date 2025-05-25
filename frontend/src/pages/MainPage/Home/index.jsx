import {
    Box,
    Button,
    Paper,
    Typography,
    useTheme
} from '@mui/material';
import {
    ChevronRight,
    Sparkles,
} from 'lucide-react';
import { lazy, Suspense } from 'react';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const FeaturesSection = lazy(() => import('@components/sections/HomePage/FeaturesSection'));
const StatisticsSection = lazy(() => import('@components/sections/HomePage/StatisticsSection'));
const PopularToolsSection = lazy(() => import('@components/sections/HomePage/PopularToolsSection'));
const CTASection = lazy(() => import('@components/sections/CTASection'));

// Hooks
import { useRouteNavigation } from '@hooks';

// Constants
import {
    featuresData,
    popularToolsData
} from './constants';
import { HERO_SECTION_DATA } from './constants';

const Home = ({ isMobile }) => {
    const theme = useTheme();
    const { navigateTo } = useRouteNavigation();

    const handleButtonClick = (link) => {
        if (link) {
            navigateTo(link);
        }
    };

    return (
        <Box>
            {/* Hero Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <HeroSection
                    heroData={HERO_SECTION_DATA}
                    isMobile={isMobile}
                    leftChildren={<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            endIcon={<ChevronRight />}
                            sx={{
                                px: 4,
                                boxShadow: '0 4px 14px rgba(131, 56, 236, 0.4)',
                                '&:hover': {
                                    boxShadow: '0 6px 20px rgba(131, 56, 236, 0.6)'
                                }
                            }}
                            onClick={() => handleButtonClick(HERO_SECTION_DATA.primaryButtonLink)}
                        >
                            {HERO_SECTION_DATA.primaryButtonText}
                        </Button>
                        {HERO_SECTION_DATA.secondaryButtonText && (
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: 'white',
                                    color: 'white',
                                    '&:hover': {
                                        borderColor: 'white',
                                        bgcolor: 'rgba(255, 255, 255, 0.1)'
                                    }
                                }}
                                onClick={() => handleButtonClick(HERO_SECTION_DATA.secondaryButtonLink)}
                            >
                                {HERO_SECTION_DATA.secondaryButtonText}
                            </Button>
                        )}
                    </Box>}
                    rightChildren={<Paper
                        elevation={12}
                        sx={{
                            p: 4,
                            borderRadius: 4,
                            background: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(10px)',
                            width: '100%',
                            maxWidth: 500,
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                            transform: 'perspective(1500px) rotateY(-5deg)',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'perspective(1500px) rotateY(0deg) translateY(-10px)'
                            }
                        }}
                    >
                        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                            <Sparkles size={50} color={theme.palette.primary.main} />
                        </Box>
                        <Typography variant="h5" align="center" fontWeight={600} gutterBottom>
                            {HERO_SECTION_DATA.cardTitle}
                        </Typography>
                        <Typography variant="body2" align="center" color="text.secondary">
                            {HERO_SECTION_DATA.cardDescription}
                        </Typography>
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Button variant="contained" color="primary" onClick={() => handleButtonClick(HERO_SECTION_DATA.cardButtonLink)} endIcon={<ChevronRight />}>
                                {HERO_SECTION_DATA.cardButtonText}
                            </Button>
                        </Box>
                    </Paper>}
                />
            </Suspense>

            {/* Features Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'grey.100' }} />}>
                <FeaturesSection
                    featuresData={featuresData}
                />
            </Suspense>

            {/* Statistics Section */}
            <Suspense fallback={<Box sx={{ height: '300px', bgcolor: 'grey.100' }} />}>
                <StatisticsSection />
            </Suspense>

            {/* Popular Tools Section */}
            <Suspense fallback={<Box sx={{ height: '500px', bgcolor: 'grey.100' }} />}>
                <PopularToolsSection
                    popularToolsData={popularToolsData}
                />
            </Suspense>

            {/* CTA Section */}
            <Suspense fallback={<Box sx={{ height: '300px', bgcolor: 'primary.main' }} />}>
                <CTASection
                    Icon={Sparkles}
                    title="Ready to Supercharge Your Workflow?"
                    description="Join thousands of users who are already using our AI tools to save time, boost productivity, and achieve more."
                    buttonsChildren={
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                sx={{
                                    px: 4,
                                    borderRadius: 28,
                                    boxShadow: '0 8px 20px rgba(131, 56, 236, 0.3)',
                                    '&:hover': {
                                        boxShadow: '0 12px 24px rgba(131, 56, 236, 0.4)',
                                    }
                                }}
                            >
                                Get Started for Free
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    px: 4,
                                    borderRadius: 28,
                                    borderColor: 'rgba(255, 255, 255, 0.5)',
                                    color: 'white',
                                    '&:hover': {
                                        borderColor: 'white',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                    }
                                }}
                            >
                                View Pricing
                            </Button>
                        </Box>
                    }
                />
            </Suspense>
        </Box >
    );
};

export default Home;