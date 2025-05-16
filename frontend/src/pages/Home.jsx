import {
    Box,
    useTheme,
} from '@mui/material';

// Components
import HeroSection from '@components/sections/HeroSection';
import FeaturesSection from '@components/sections/FeaturesSection';
import StatsSection from '@components/sections/StatsSection';
import PopularToolsSection from '@components/sections/PopularToolsSection';
import CTASection from '@components/sections/CTASection';

// Constants
import { featuresData, popularToolsData } from '@constants/Home';

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

            {/* Stats Section */}
            <StatsSection />

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