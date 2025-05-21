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
    useTheme,
    Card,
    CardContent,
    Stack,
    Alert,
} from '@mui/material';
import {
    CheckCircle2,
    Bug,
    Settings,
    HelpCircle,
} from 'lucide-react';
import { lazy, Suspense } from 'react';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));

// Constants
import { commonIssues } from '@constants/DocumentationPage/Troubleshooting/CommonIssues.jsx'

const CommonIssues = ({ isMobile }) => {
    const theme = useTheme();

    return (
        <Box>
            {/* Hero Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <HeroSection
                    heroData={{
                        title: "Common Web Interface Issues",
                        subtitle: "Solutions for common website interface problems",
                        description: "Find quick solutions to common issues you might encounter while using our web interface"
                    }}
                    isMobile={isMobile}
                />
            </Suspense>

            {/* Main Content */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Quick Tips */}
                        <Grid size={{ xs: 12 }}>
                            <Alert
                                severity="info"
                                icon={<HelpCircle />}
                                sx={{
                                    borderRadius: 3,
                                    '& .MuiAlert-icon': {
                                        color: theme.palette.info.main,
                                    },
                                }}
                            >
                                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                    Quick Tips for Web Interface
                                </Typography>
                                <Typography variant="body2">
                                    • Keep your browser updated to the latest version
                                    <br />
                                    • Clear browser cache regularly for optimal performance
                                    <br />
                                    • Ensure JavaScript is enabled in your browser
                                    <br />
                                    • Use a modern, supported browser (Chrome, Firefox, Safari, Edge)
                                </Typography>
                            </Alert>
                        </Grid>

                        {/* Common Issues Sections */}
                        {commonIssues.map((category) => (
                            <Grid size={{ xs: 12 }} key={category.category}>
                                <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                    <SectionHeading
                                        title={category.category}
                                        subtitle={`Solutions for common ${category.category.toLowerCase()}`}
                                        centered={true}
                                    />
                                </Suspense>
                                <Stack spacing={4}>
                                    {category.issues.map((issue) => (
                                        <Card
                                            key={issue.title}
                                            elevation={0}
                                            sx={{
                                                borderRadius: 3,
                                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                                border: '1px solid',
                                                borderColor: 'divider',
                                            }}
                                        >
                                            <CardContent sx={{ p: 4 }}>
                                                <Grid container spacing={3}>
                                                    <Grid size={{ xs: 12, md: 4 }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                                            <Bug size={24} color={theme.palette.error.main} />
                                                            <Typography variant="h6" fontWeight={600}>
                                                                {issue.title}
                                                            </Typography>
                                                        </Box>
                                                        <Typography variant="body1" color="text.secondary" paragraph>
                                                            {issue.description}
                                                        </Typography>
                                                        <Typography variant="body1" color="primary" fontWeight={500}>
                                                            {issue.solution}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid size={{ xs: 12, md: 8 }}>
                                                        <Paper
                                                            elevation={0}
                                                            sx={{
                                                                p: 3,
                                                                bgcolor: 'grey.50',
                                                                borderRadius: 2,
                                                            }}
                                                        >
                                                            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                                                Troubleshooting Steps:
                                                            </Typography>
                                                            <List>
                                                                {issue.steps.map((step, index) => (
                                                                    <ListItem key={index}>
                                                                        <ListItemIcon>
                                                                            <CheckCircle2 size={20} color={theme.palette.success.main} />
                                                                        </ListItemIcon>
                                                                        <ListItemText primary={step} />
                                                                    </ListItem>
                                                                ))}
                                                            </List>
                                                        </Paper>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </Stack>
                            </Grid>
                        ))}

                        {/* Need More Help */}
                        <Grid size={{ xs: 12 }}>
                            <Card
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    bgcolor: theme.palette.primary.main,
                                    color: 'white',
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                        <Settings size={24} />
                                        <Typography variant="h5" fontWeight={600}>
                                            Need More Help?
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                        If you're still experiencing issues with our web interface, our support team is here to help. Contact us through our support portal or check our detailed documentation for more information.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default CommonIssues;
