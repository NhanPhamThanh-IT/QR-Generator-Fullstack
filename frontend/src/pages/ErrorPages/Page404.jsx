import { styled, keyframes } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    Paper,
    Grid,
    useTheme,
    useMediaQuery
} from '@mui/material';

const float = keyframes`
0% { transform: translateY(0px); }
50% { transform: translateY(-20px); }
100% { transform: translateY(0px); }
`;

const AnimatedErrorIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
    fontSize: '150px',
    color: theme.palette.primary.main,
    animation: `${float} 3s ease-in-out infinite`
}));

const Page404 = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const goBack = () => {
        navigate(-1);
    };

    const goHome = () => {
        navigate('/');
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                py: 4
            }}
        >
            <Container maxWidth="md">
                <Paper
                    elevation={6}
                    sx={{
                        borderRadius: 4,
                        overflow: 'hidden',
                        p: { xs: 3, md: 5 },
                        backgroundColor: 'background.paper',
                        position: 'relative'
                    }}
                >
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: 'center' }}>
                            <AnimatedErrorIcon />
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography
                                variant="h1"
                                color="primary"
                                sx={{
                                    fontWeight: 900,
                                    fontSize: { xs: '5rem', md: '6rem' },
                                    mb: 1
                                }}
                            >
                                404
                            </Typography>
                            <Typography
                                variant="h4"
                                color="textPrimary"
                                gutterBottom
                                sx={{ fontWeight: 700, mb: 2 }}
                            >
                                Page Not Found
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                sx={{ mb: 4 }}
                            >
                                The page you are looking for might have been removed, had its name changed,
                                or is temporarily unavailable.
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<ArrowBackIcon />}
                                    onClick={goBack}
                                    fullWidth={isMobile}
                                    size="large"
                                >
                                    Go Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<HomeIcon />}
                                    onClick={goHome}
                                    fullWidth={isMobile}
                                    size="large"
                                >
                                    Back to Home
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default Page404;