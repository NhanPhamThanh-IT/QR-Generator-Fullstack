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
    Package,
    AlertTriangle,
    CheckCircle2,
} from 'lucide-react';
import { lazy, Suspense } from 'react';

// Components
const HeroSection = lazy(() => import('@components/sections/DocumentationPage/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));

// Constants
import { HERO_SECTION_DATA } from './constants'

const Installation = ({ isMobile }) => {
    const theme = useTheme();

    const requirements = [
        "Node.js 16.x or higher",
        "npm 7.x or higher (or yarn 1.22.x)",
        "Modern web browser with JavaScript enabled"
    ];

    const installationSteps = [
        {
            title: "Using npm",
            code: "npm install ai-tools-platform",
            description: "Install using npm package manager"
        },
        {
            title: "Using yarn",
            code: "yarn add ai-tools-platform",
            description: "Install using yarn package manager"
        },
        {
            title: "Using pnpm",
            code: "pnpm add ai-tools-platform",
            description: "Install using pnpm package manager"
        }
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <HeroSection
                    title={HERO_SECTION_DATA.title}
                    description={HERO_SECTION_DATA.description}
                    isMobile={isMobile}
                />
            </Suspense>

            {/* Main Content */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Requirements */}
                        <Grid size={{ xs: 12 }}>
                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                <SectionHeading
                                    title="System Requirements"
                                    subtitle="Ensure your system meets the following requirements"
                                    centered={true}
                                />
                            </Suspense>
                            <Card
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <List>
                                        {requirements.map((requirement, index) => (
                                            <ListItem key={index}>
                                                <ListItemIcon>
                                                    <CheckCircle2 size={20} color={theme.palette.success.main} />
                                                </ListItemIcon>
                                                <ListItemText primary={requirement} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Installation Methods */}
                        <Grid size={{ xs: 12 }}>
                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                <SectionHeading
                                    title="Installation Methods"
                                    subtitle="Choose your preferred package manager"
                                    centered={true}
                                />
                            </Suspense>
                            <Stack spacing={4}>
                                {installationSteps.map((step) => (
                                    <Card
                                        key={step.title}
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
                                                        <Package size={24} color={theme.palette.primary.main} />
                                                        <Typography variant="h6" fontWeight={600}>
                                                            {step.title}
                                                        </Typography>
                                                    </Box>
                                                    <Typography variant="body1" color="text.secondary">
                                                        {step.description}
                                                    </Typography>
                                                </Grid>
                                                <Grid size={{ xs: 12, md: 8 }}>
                                                    <Paper
                                                        elevation={0}
                                                        sx={{
                                                            p: 2,
                                                            bgcolor: 'grey.900',
                                                            color: 'grey.100',
                                                            borderRadius: 2,
                                                            fontFamily: 'monospace',
                                                        }}
                                                    >
                                                        <Typography component="pre" sx={{ m: 0, whiteSpace: 'pre-wrap' }}>
                                                            {step.code}
                                                        </Typography>
                                                    </Paper>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Important Notes */}
                        <Grid size={{ xs: 12 }}>
                            <Alert
                                severity="info"
                                icon={<AlertTriangle />}
                                sx={{
                                    borderRadius: 3,
                                    '& .MuiAlert-icon': {
                                        color: theme.palette.info.main,
                                    },
                                }}
                            >
                                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                    Important Notes
                                </Typography>
                                <Typography variant="body2">
                                    • Make sure you have the latest version of your package manager installed
                                    <br />
                                    • If you encounter any issues during installation, try clearing your package manager's cache
                                    <br />
                                    • For production environments, we recommend using a specific version number instead of the latest version
                                </Typography>
                            </Alert>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Installation; 