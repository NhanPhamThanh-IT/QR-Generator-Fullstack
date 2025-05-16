import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    useTheme,
    Paper,
    Divider
} from '@mui/material';
import { ArrowRight, Brain, Cpu, FileSearch, MessageSquare, Sparkles, Zap } from 'lucide-react';

// Components
import HeroSection from '../components/ui/HeroSection';
import SectionHeading from '../components/ui/SectionHeading';
import ToolCard from '../components/ui/ToolCard';
import FeatureCard from '../components/ui/FeatureCard';

const featuresData = [
    {
        title: 'Advanced AI Algorithms',
        description: 'Our tools leverage state-of-the-art AI algorithms to deliver high-quality results and insights.',
        icon: Brain,
        accentColor: '#3a86ff',
    },
    {
        title: 'Fast Processing',
        description: 'Process large amounts of data in seconds with our optimized AI processing infrastructure.',
        icon: Zap,
        accentColor: '#ffbe0b',
    },
    {
        title: 'Smart Automation',
        description: 'Automate repetitive tasks and workflows with intelligent AI assistants and tools.',
        icon: Cpu,
        accentColor: '#8338ec',
    },
    {
        title: 'Natural Language Processing',
        description: 'Advanced NLP capabilities for text analysis, summarization, and content generation.',
        icon: MessageSquare,
        accentColor: '#2cb67d',
    },
];

const popularToolsData = [
    {
        id: '1',
        title: 'Smart Document Analyzer',
        description: 'Extract key information from documents, contracts, and forms using intelligent AI processing.',
        imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Document AI',
        isNew: true,
    },
    {
        id: '2',
        title: 'AI Content Generator',
        description: 'Create high-quality content for blogs, social media, and marketing with advanced language models.',
        imageUrl: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Text Generation',
        isPremium: true,
    },
    {
        id: '3',
        title: 'Image Enhancer',
        description: 'Automatically enhance and upscale images using AI-powered image processing algorithms.',
        imageUrl: 'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Image Processing',
    },
];

const Home = () => {
    const theme = useTheme();

    return (
        <Box>
            {/* Hero Section */}
            <HeroSection
                title="Powerful AI Tools for Your Everyday Tasks"
                subtitle="Simplify complex tasks, boost productivity, and unlock new possibilities with our cutting-edge AI tools."
                primaryButtonText="Explore Tools"
                secondaryButtonText="Learn More"
            />

            {/* Features Section */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <SectionHeading
                        title="Unlock the Power of AI"
                        subtitle="Our platform offers advanced AI capabilities designed to transform how you work, create, and interact with technology."
                        centered={true}
                    />

                    <Grid container spacing={4}>
                        {featuresData.map((feature, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <FeatureCard
                                    title={feature.title}
                                    description={feature.description}
                                    icon={feature.icon}
                                    accentColor={feature.accentColor}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Stats Section */}
            <Box sx={{
                py: { xs: 8, md: 10 },
                bgcolor: 'grey.50',
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'divider',
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Typography variant="h4" component="h2" gutterBottom fontWeight={700}>
                                Trusted by thousands of users worldwide
                            </Typography>
                            <Typography color="text.secondary" paragraph sx={{ mb: 4 }}>
                                Our AI tools have helped individuals and businesses across the globe to streamline workflows,
                                enhance creativity, and achieve more with less effort.
                            </Typography>
                            <Button
                                variant="outlined"
                                color="primary"
                                endIcon={<ArrowRight size={16} />}
                                sx={{ borderRadius: 28 }}
                            >
                                Read Success Stories
                            </Button>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                <Paper elevation={0} sx={{
                                    py: 4,
                                    px: 5,
                                    textAlign: 'center',
                                    borderRadius: 4,
                                    mb: { xs: 2, md: 0 },
                                    background: 'white',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                    width: { xs: '45%', sm: '30%' }
                                }}>
                                    <Typography variant="h3" component="p" color="primary" fontWeight={700} gutterBottom>
                                        1.2M+
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Monthly Users
                                    </Typography>
                                </Paper>

                                <Paper elevation={0} sx={{
                                    py: 4,
                                    px: 5,
                                    textAlign: 'center',
                                    borderRadius: 4,
                                    mb: { xs: 2, md: 0 },
                                    background: 'white',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                    width: { xs: '45%', sm: '30%' }
                                }}>
                                    <Typography variant="h3" component="p" color="primary" fontWeight={700} gutterBottom>
                                        15+
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        AI Tools
                                    </Typography>
                                </Paper>

                                <Paper elevation={0} sx={{
                                    py: 4,
                                    px: 5,
                                    textAlign: 'center',
                                    borderRadius: 4,
                                    background: 'white',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                    width: { xs: '92%', sm: '30%' }
                                }}>
                                    <Typography variant="h3" component="p" color="primary" fontWeight={700} gutterBottom>
                                        98%
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Satisfaction Rate
                                    </Typography>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

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