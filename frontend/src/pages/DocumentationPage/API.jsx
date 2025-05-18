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
    Card,
    CardContent,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import {
    Code2,
    Terminal,
    Package,
    BookOpen,
    FileText,
    Image,
    MessageSquare,
    Database,
} from 'lucide-react';
import { lazy, Suspense } from 'react';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));

const API = ({ isMobile }) => {
    const theme = useTheme();

    const endpoints = [
        {
            method: "POST",
            path: "/api/v1/text/generate",
            description: "Generate text content using AI models",
            parameters: [
                { name: "prompt", type: "string", required: true, description: "The input prompt for text generation" },
                { name: "maxTokens", type: "number", required: false, description: "Maximum number of tokens to generate" },
                { name: "temperature", type: "number", required: false, description: "Controls randomness in generation" }
            ]
        },
        {
            method: "POST",
            path: "/api/v1/image/generate",
            description: "Generate images using AI models",
            parameters: [
                { name: "prompt", type: "string", required: true, description: "The input prompt for image generation" },
                { name: "size", type: "string", required: false, description: "Output image size (e.g., '1024x1024')" },
                { name: "quality", type: "string", required: false, description: "Output image quality" }
            ]
        },
        {
            method: "POST",
            path: "/api/v1/chat/completions",
            description: "Create chat completions using AI models",
            parameters: [
                { name: "messages", type: "array", required: true, description: "Array of message objects" },
                { name: "model", type: "string", required: false, description: "The model to use for completion" },
                { name: "temperature", type: "number", required: false, description: "Controls randomness in responses" }
            ]
        }
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <HeroSection
                    heroData={{
                        title: "API Reference",
                        subtitle: "Comprehensive documentation of our API endpoints",
                        description: "Learn about all available endpoints, parameters, and response formats"
                    }}
                    isMobile={isMobile}
                />
            </Suspense>

            {/* Main Content */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* API Overview */}
                        <Grid item xs={12}>
                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                <SectionHeading
                                    title="API Overview"
                                    subtitle="Understanding our RESTful API"
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
                                    <Typography variant="h6" gutterBottom>
                                        Base URL
                                    </Typography>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 2,
                                            bgcolor: 'grey.900',
                                            color: 'grey.100',
                                            borderRadius: 2,
                                            fontFamily: 'monospace',
                                            mb: 4,
                                        }}
                                    >
                                        <Typography component="pre" sx={{ m: 0, whiteSpace: 'pre-wrap' }}>
                                            https://api.ai-tools-platform.com
                                        </Typography>
                                    </Paper>
                                    <Typography variant="body1" color="text.secondary" paragraph>
                                        All API requests should be made to this base URL. The API uses standard HTTP response codes and JSON for request and response bodies.
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Authentication is required for all API requests. Include your API key in the Authorization header:
                                    </Typography>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 2,
                                            bgcolor: 'grey.900',
                                            color: 'grey.100',
                                            borderRadius: 2,
                                            fontFamily: 'monospace',
                                            mt: 2,
                                        }}
                                    >
                                        <Typography component="pre" sx={{ m: 0, whiteSpace: 'pre-wrap' }}>
                                            Authorization: Bearer your-api-key
                                        </Typography>
                                    </Paper>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* API Endpoints */}
                        <Grid item xs={12}>
                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                <SectionHeading
                                    title="API Endpoints"
                                    subtitle="Available endpoints and their parameters"
                                    centered={true}
                                />
                            </Suspense>
                            <Stack spacing={4}>
                                {endpoints.map((endpoint) => (
                                    <Card
                                        key={endpoint.path}
                                        elevation={0}
                                        sx={{
                                            borderRadius: 3,
                                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                        }}
                                    >
                                        <CardContent sx={{ p: 4 }}>
                                            <Box sx={{ mb: 3 }}>
                                                <Typography
                                                    variant="h6"
                                                    component="div"
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 2,
                                                    }}
                                                >
                                                    <Typography
                                                        component="span"
                                                        sx={{
                                                            bgcolor: theme.palette.primary.main,
                                                            color: 'white',
                                                            px: 2,
                                                            py: 0.5,
                                                            borderRadius: 1,
                                                            fontSize: '0.875rem',
                                                        }}
                                                    >
                                                        {endpoint.method}
                                                    </Typography>
                                                    <Typography
                                                        component="span"
                                                        sx={{
                                                            fontFamily: 'monospace',
                                                            color: theme.palette.primary.main,
                                                        }}
                                                    >
                                                        {endpoint.path}
                                                    </Typography>
                                                </Typography>
                                                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                                                    {endpoint.description}
                                                </Typography>
                                            </Box>

                                            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                                Parameters
                                            </Typography>
                                            <TableContainer>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Name</TableCell>
                                                            <TableCell>Type</TableCell>
                                                            <TableCell>Required</TableCell>
                                                            <TableCell>Description</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {endpoint.parameters.map((param) => (
                                                            <TableRow key={param.name}>
                                                                <TableCell>
                                                                    <Typography
                                                                        component="span"
                                                                        sx={{
                                                                            fontFamily: 'monospace',
                                                                            color: theme.palette.primary.main,
                                                                        }}
                                                                    >
                                                                        {param.name}
                                                                    </Typography>
                                                                </TableCell>
                                                                <TableCell>{param.type}</TableCell>
                                                                <TableCell>{param.required ? 'Yes' : 'No'}</TableCell>
                                                                <TableCell>{param.description}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Rate Limits */}
                        <Grid item xs={12}>
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
                                        <Database size={24} />
                                        <Typography variant="h5" fontWeight={600}>
                                            Rate Limits
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                        • Free tier: 100 requests per minute
                                        <br />
                                        • Pro tier: 1000 requests per minute
                                        <br />
                                        • Enterprise tier: Custom limits available
                                        <br />
                                        • Rate limit headers are included in all responses
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

export default API; 