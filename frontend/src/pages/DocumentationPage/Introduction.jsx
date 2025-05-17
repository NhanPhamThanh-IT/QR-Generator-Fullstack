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
    ArrowRight,
} from 'lucide-react';

// Components
import { HeroSection } from '@components/sections/HeroSection'
import SectionHeading from '@components/ui/SectionHeading';
import FeatureCard from '@components/ui/FeatureCard';

// Constants
import { HERO_SECTION_DATA, features } from '@constants/DocumentationPage/IntroductionConstants';

const Introduction = ({ isMobile }) => {
    const theme = useTheme();

    return (
        <Box>
            {/* Hero Section */}
            <HeroSection
                title={HERO_SECTION_DATA.title}
                description={HERO_SECTION_DATA.description}
                isMobile={isMobile}
            />

            {/* Main Content */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Overview Section */}
                        <Grid size={{ xs: 12 }}>
                            <SectionHeading
                                title="Overview"
                                subtitle="Our platform provides a comprehensive suite of AI-powered tools designed to streamline your workflow and enhance productivity."
                                centered={true}
                            />
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
                                <Typography variant="body1">
                                    This documentation will guide you through everything you need to know about our platform, from basic concepts to advanced features and best practices.
                                </Typography>
                            </Paper>
                        </Grid>

                        {/* Key Features */}
                        <Grid size={{ xs: 12 }}>
                            <SectionHeading
                                title="Key Features"
                                subtitle="Our platform offers a range of powerful AI tools designed to streamline your workflow and enhance productivity."
                                centered={true}
                            />
                            <Grid container spacing={3}>
                                {features.map((feature) => {
                                    const Icon = feature.icon;
                                    return (
                                        <Grid size={{ xs: 12, md: 6, lg: 3 }} key={feature.title}>
                                            <FeatureCard
                                                title={feature.title}
                                                description={feature.description}
                                                icon={Icon}
                                                accentColor={feature.color}
                                            />
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
        </Box >
    );
};

export default Introduction;
