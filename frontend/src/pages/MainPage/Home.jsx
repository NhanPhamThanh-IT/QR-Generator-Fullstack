import {
    Box,
} from '@mui/material';

// Components
import {
    HeroSection,
    FeaturesSection,
    StatisticsSection,
    PopularToolsSection,
    CTASection
} from '@components/sections/Homepage';

// Constants
import {
    featuresData,
    popularToolsData
} from '@constants/HomeConstants';

const Home = () => {
    return (
        <Box>
            {/* Hero Section */}
            <HeroSection
                title="Powerful AI Tools for Your Everyday Tasks"
                subtitle="Simplify complex tasks, boost productivity, and unlock new possibilities with our cutting-edge AI tools."
                primaryButtonText="Explore Tools"
                primaryButtonLink={"/tools"}
                secondaryButtonText="Learn More"
                secondaryButtonLink={"/contact"}
                cardTitle="AI-Powered Tools"
                cardDescription="Unlock the power of artificial intelligence with our suite of tools designed to enhance productivity and creativity."
                cardButtonText={"Get Started"}
                cardButtonLink={"/tools"}
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