import {
    Box,
    Container,
    Typography,
    Paper,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    useTheme,
} from '@mui/material';
import {
    Rocket,
    Zap,
    Shield,
    Code,
    Lightbulb,
    ArrowRight,
} from 'lucide-react';

const Introduction = () => {
    const theme = useTheme();

    const features = [
        {
            icon: Rocket,
            title: 'Powerful AI Tools',
            description: 'Access a suite of advanced AI tools designed to enhance your productivity and creativity.',
        },
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Experience rapid processing and real-time results with our optimized AI infrastructure.',
        },
        {
            icon: Shield,
            title: 'Secure & Reliable',
            description: 'Your data is protected with enterprise-grade security and reliable uptime.',
        },
        {
            icon: Code,
            title: 'Developer Friendly',
            description: 'Comprehensive API documentation and SDKs for seamless integration.',
        },
        {
            icon: Lightbulb,
            title: 'Smart Solutions',
            description: 'Intelligent features that adapt to your needs and improve over time.',
        },
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    pt: { xs: 6, md: 10 },
                    pb: { xs: 6, md: 8 },
                    background: 'grey.50',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                        Welcome to Our AI Tools Platform
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
                        Your comprehensive guide to leveraging the power of artificial intelligence for your projects.
                    </Typography>
                </Container>
            </Box>

            {/* Main Content */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Overview Section */}
                        <Grid size={{ xs: 12 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: 3,
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <Typography variant="h5" fontWeight={600} gutterBottom>
                                    Overview
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Our platform provides a comprehensive suite of AI-powered tools designed to streamline your workflow and enhance productivity. Whether you're a developer, content creator, or business professional, our tools are built to help you achieve more with less effort.
                                </Typography>
                                <Typography variant="body1">
                                    This documentation will guide you through everything you need to know about our platform, from basic concepts to advanced features and best practices.
                                </Typography>
                            </Paper>
                        </Grid>

                        {/* Key Features */}
                        <Grid size={{ xs: 12 }}>
                            <Typography variant="h5" fontWeight={600} gutterBottom>
                                Key Features
                            </Typography>
                            <Grid container spacing={3}>
                                {features.map((feature) => {
                                    const Icon = feature.icon;
                                    return (
                                        <Grid size={{ xs: 12, md: 6 }} key={feature.title}>
                                            <Paper
                                                elevation={0}
                                                sx={{
                                                    p: 3,
                                                    height: '100%',
                                                    borderRadius: 3,
                                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                                    border: '1px solid',
                                                    borderColor: 'divider',
                                                    transition: 'transform 0.2s ease-in-out',
                                                    '&:hover': {
                                                        transform: 'translateY(-4px)',
                                                    },
                                                }}
                                            >
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                    <Icon size={24} color={theme.palette.primary.main} />
                                                    <Typography variant="h6" sx={{ ml: 1.5, fontWeight: 600 }}>
                                                        {feature.title}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2" color="text.secondary">
                                                    {feature.description}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>

                        {/* Getting Started */}
                        <Grid size={{ xs: 12 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: 3,
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <Typography variant="h5" fontWeight={600} gutterBottom>
                                    Getting Started
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowRight color={theme.palette.primary.main} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Create an account"
                                            secondary="Sign up for a free account to access our tools"
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowRight color={theme.palette.primary.main} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Explore the tools"
                                            secondary="Browse through our collection of AI-powered tools"
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowRight color={theme.palette.primary.main} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Start building"
                                            secondary="Begin integrating our tools into your projects"
                                        />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Introduction;
