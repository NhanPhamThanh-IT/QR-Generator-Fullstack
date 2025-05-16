import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    useTheme,
} from '@mui/material';
import { ArrowRight, Sparkles } from 'lucide-react';

// Components
import HeroSection from '@components/sections/HeroSection';
import FeaturesSection from '@components/sections/FeaturesSection';
import StatsSection from '@components/sections/StatsSection';
import SectionHeading from '@components/ui/SectionHeading';
import ToolCard from '@components/ui/ToolCard';

// Constants
import { featuresData, popularToolsData } from '@constants/Home';

const Home = () => {
    const theme = useTheme();

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
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6, flexWrap: 'wrap' }}>
                        <SectionHeading
                            title="Popular Tools"
                            subtitle="Discover our most loved AI tools that are helping thousands of users everyday."
                            marginBottom={0}
                        />

                        <Button
                            variant="outlined"
                            color="primary"
                            endIcon={<ArrowRight size={16} />}
                            sx={{
                                mt: { xs: 2, sm: 0 },
                                borderRadius: 28
                            }}
                        >
                            View All Tools
                        </Button>
                    </Box>

                    <Grid container spacing={4}>
                        {popularToolsData.map((tool) => (
                            <Grid item xs={12} sm={6} md={4} key={tool.id}>
                                <ToolCard {...tool} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{
                py: { xs: 10, md: 14 },
                bgcolor: theme.palette.primary.main,
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative elements */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -100,
                        right: -100,
                        width: 300,
                        height: 300,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: -120,
                        left: -50,
                        width: 250,
                        height: 250,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.05)',
                    }}
                />

                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Sparkles size={48} style={{ marginBottom: 16, opacity: 0.9 }} />

                        <Typography variant="h3" component="h2" gutterBottom fontWeight={700}>
                            Ready to Supercharge Your Workflow?
                        </Typography>

                        <Typography variant="h6" component="p" sx={{ mb: 5, opacity: 0.9, fontWeight: 400 }}>
                            Join thousands of users who are already using our AI tools to save time, boost productivity, and achieve more.
                        </Typography>

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
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;