import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Stack,
    useTheme,
    Alert,
    AlertTitle,
    Divider,
} from '@mui/material';
import {
    Code2,
    HelpCircle,
} from 'lucide-react';
import { lazy, Suspense } from 'react';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));

// Constants
import {
    HERO_SECTION_DATA,
    errorCodes
} from './constants';;

const ErrorCodes = ({ isMobile }) => {
    const theme = useTheme();

    return (
        <Box>
            {/* Hero Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <HeroSection
                    heroData={HERO_SECTION_DATA}
                    isMobile={isMobile}
                />
            </Suspense>

            {/* Main Content */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Overview Section */}
                        <Grid size={{ xs: 12 }}>
                            <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                <SectionHeading
                                    title="Common Error Codes"
                                    subtitle="Understanding and resolving common issues with our AI tools platform"
                                    centered={true}
                                />
                            </Suspense>
                        </Grid>

                        {/* Error Codes List */}
                        <Grid container spacing={3}>
                            {errorCodes.map((error) => (
                                <Grid size={{ xs: 12, md: 6 }} key={error.code}>
                                    <Card
                                        elevation={0}
                                        sx={{
                                            borderRadius: 3,
                                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            overflow: 'hidden',
                                            height: '100%'
                                        }}
                                    >
                                        <CardContent sx={{ p: 0 }}>
                                            <Box sx={{ p: 4, bgcolor: theme.palette[error.severity].main, color: 'white' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                                    <Code2 size={24} />
                                                    <Typography variant="h5" fontWeight={600}>
                                                        {error.code}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="h6" fontWeight={500}>
                                                    {error.title}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ p: 4 }}>
                                                <Stack spacing={3}>
                                                    <Box>
                                                        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                                            Description
                                                        </Typography>
                                                        <Typography variant="body1" color="text.secondary">
                                                            {error.description}
                                                        </Typography>
                                                    </Box>
                                                    <Divider />
                                                    <Box>
                                                        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                                            Solution
                                                        </Typography>
                                                        <Typography variant="body1" color="text.secondary">
                                                            {error.solution}
                                                        </Typography>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Additional Help Section */}
                        <Grid size={{ xs: 12 }}>
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
                                    <Stack spacing={3}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <HelpCircle size={24} color={theme.palette.primary.main} />
                                            <Typography variant="h6" fontWeight={600}>
                                                Need Additional Help?
                                            </Typography>
                                        </Box>
                                        <Typography variant="body1" color="text.secondary">
                                            If you're still experiencing issues or can't find your error code here, please:
                                        </Typography>
                                        <Stack spacing={2}>
                                            <Alert severity="info" sx={{ borderRadius: 2 }}>
                                                <AlertTitle>Check Documentation</AlertTitle>
                                                Visit our detailed documentation for more information about error handling and best practices.
                                            </Alert>
                                            <Alert severity="info" sx={{ borderRadius: 2 }}>
                                                <AlertTitle>Contact Support</AlertTitle>
                                                Reach out to our support team with your error code and any relevant logs for assistance.
                                            </Alert>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default ErrorCodes;
