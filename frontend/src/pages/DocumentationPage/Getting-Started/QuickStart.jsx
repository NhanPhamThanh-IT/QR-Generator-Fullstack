import {
    Box,
    Container,
    Typography,
    Paper,
    Grid,
    useTheme,
    Card,
    CardContent,
    Stack,
} from '@mui/material';
import {
    Code2,
    Terminal,
    Package,
    Play,
} from 'lucide-react';
import { lazy, Suspense } from 'react';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));

const QuickStart = ({ isMobile }) => {
    const theme = useTheme();

    const steps = [
        {
            title: "Installation",
            description: "Install our package using npm or yarn",
            icon: Package,
            code: "npm install ai-tools-platform\n# or\nyarn add ai-tools-platform"
        },
        {
            title: "Configuration",
            description: "Set up your API key and configuration",
            icon: Terminal,
            code: "import { AITools } from 'ai-tools-platform';\n\nconst aiTools = new AITools({\n  apiKey: 'your-api-key'\n});"
        },
        {
            title: "Start Using",
            description: "Begin using our tools in your project",
            icon: Play,
            code: "// Example usage\nconst result = await aiTools.text.generate({\n  prompt: 'Hello, world!'\n});"
        }
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <HeroSection
                    heroData={{
                        title: "Quick Start Guide",
                        subtitle: "Get up and running with our AI tools platform in minutes",
                        description: "Follow these simple steps to integrate our powerful AI tools into your project"
                    }}
                    isMobile={isMobile}
                />
            </Suspense>

            {/* Main Content */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Quick Start Steps */}
                        <Grid size={{ xs: 12 }}>
                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                <SectionHeading
                                    title="Getting Started"
                                    subtitle="Follow these steps to quickly integrate our platform into your project"
                                    centered={true}
                                />
                            </Suspense>
                            <Stack spacing={4}>
                                {steps.map((step, index) => (
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
                                                        <step.icon size={24} color={theme.palette.primary.main} />
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

                        {/* Next Steps */}
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
                                        <Code2 size={24} />
                                        <Typography variant="h5" fontWeight={600}>
                                            Next Steps
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                        Now that you've set up the basic integration, explore our detailed documentation to learn more about specific features and advanced usage.
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

export default QuickStart; 