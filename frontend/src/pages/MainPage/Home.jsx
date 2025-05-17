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

// Components
import {
    FeaturesSection,
    StatisticsSection,
    PopularToolsSection,
    CTASection
} from '@components/sections/Homepage';
import {
    HeroSection
} from '@components/sections/HeroSection'

// Hooks
import { useRouteNavigation } from '@hooks';

// Constants
import {
    featuresData,
    popularToolsData
} from '@constants/MainPage/HomeConstants';

const Home = ({ isMobile }) => {
    const theme = useTheme();
    const { navigateTo } = useRouteNavigation();

    const handleButtonClick = (link) => {
        if (link) {
            navigateTo(link);
        }
    };

    const title = "Powerful AI Tools for Your Everyday Tasks"
    const description = "Simplify complex tasks, boost productivity, and unlock new possibilities with our cutting-edge AI tools."
    const primaryButtonText = "Explore Tools"
    const primaryButtonLink = "/tools"
    const secondaryButtonText = "Learn More"
    const secondaryButtonLink = "/contact"
    const cardTitle = "AI-Powered Tools"
    const cardDescription = "Unlock the power of artificial intelligence with our suite of tools designed to enhance productivity and creativity."
    const cardButtonText = "Get Started"
    const cardButtonLink = "/tools"

    return (
        <Box>
            {/* Hero Section */}
            <HeroSection
                title={title}
                description={description}
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
                        onClick={() => handleButtonClick(primaryButtonLink)}
                    >
                        {primaryButtonText}
                    </Button>
                    {secondaryButtonText && (
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
                            onClick={() => handleButtonClick(secondaryButtonLink)}
                        >
                            {secondaryButtonText}
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
                        {cardTitle}
                    </Typography>
                    <Typography variant="body2" align="center" color="text.secondary">
                        {cardDescription}
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Button variant="contained" color="primary" onClick={() => handleButtonClick(cardButtonLink)} endIcon={<ChevronRight />}>
                            {cardButtonText}
                        </Button>
                    </Box>
                </Paper>}
            />

            {/* Features Section */}
            <FeaturesSection
                featuresData={featuresData}
            />

            {/* Statistics Section */}
            <StatisticsSection />

            {/* Popular Tools Section */}
            <PopularToolsSection
                popularToolsData={popularToolsData}
            />

            {/* CTA Section */}
            <CTASection />
        </Box>
    );
};

export default Home;