import {
    ButtonBase,
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
} from '@mui/material';
import {
    CheckCircle2,
    Bug,
    Settings,
    HelpCircle,
} from 'lucide-react';
import {
    lazy,
    Suspense
} from 'react';

// Components
const DocumentationHeroSection = lazy(() => import('@components/sections/DocumentationPage/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));

// Constants
import {
    HERO_SECTION_DATA,
    REQUIREMENTS_SECTION_DATA,
    ISSUES_SECTION_DATA,
    HELPS_SECTION_DATA
} from './constants';

// Hooks
import { useRouteNavigation } from '@hooks';

const CommonIssues = ({ isMobile }) => {
    const theme = useTheme();
    const { navigateTo } = useRouteNavigation();

    return (
        <Box>
            {/* Hero Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <DocumentationHeroSection
                    title={HERO_SECTION_DATA.title}
                    description={HERO_SECTION_DATA.description}
                    isMobile={isMobile}
                    rightChildren={
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 2, md: 3 },
                                borderRadius: 4,
                                border: '1px solid',
                                borderColor: 'divider',
                                bgcolor: 'background.paper',
                                boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: 2,
                            }}
                        >
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        gap: 1,
                                        mb: 1
                                    }}
                                >
                                    <HelpCircle size={24} color={theme.palette.info.main} />
                                    <Typography variant="h6" fontWeight={700}>
                                        {REQUIREMENTS_SECTION_DATA.title}
                                    </Typography>
                                </Box>
                                <Box component="ul" sx={{ m: 0 }}>
                                    {REQUIREMENTS_SECTION_DATA.requirements.map((tip, index) => (
                                        <Typography
                                            key={index}
                                            component="li"
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 0.5, textAlign: 'justify' }}
                                        >
                                            {tip}
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                        </Paper>
                    }
                />
            </Suspense>

            {/* Main Content */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Common Issues Sections */}
                        {ISSUES_SECTION_DATA.issues.map((category) => (
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
                            <ButtonBase
                                onClick={() => navigateTo(HELPS_SECTION_DATA.link)} // Use navigateTo here
                            >
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
                                                {HELPS_SECTION_DATA.title}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body1" sx={{ opacity: 0.9, textAlign: 'justify' }}>
                                            {HELPS_SECTION_DATA.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default CommonIssues;
