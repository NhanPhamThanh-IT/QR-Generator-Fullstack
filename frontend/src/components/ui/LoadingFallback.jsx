import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import { Sparkles } from 'lucide-react';

const LoadingFallback = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light}15 100%)`,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Animated background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.primary.light}22 0%, ${theme.palette.primary.light}00 70%)`,
                    opacity: 0.6,
                    animation: 'pulse 3s ease-in-out infinite',
                    '@keyframes pulse': {
                        '0%': {
                            transform: 'scale(1)',
                            opacity: 0.6,
                        },
                        '50%': {
                            transform: 'scale(1.1)',
                            opacity: 0.4,
                        },
                        '100%': {
                            transform: 'scale(1)',
                            opacity: 0.6,
                        },
                    },
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '5%',
                    left: '5%',
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.secondary.light}22 0%, ${theme.palette.secondary.light}00 70%)`,
                    opacity: 0.4,
                    animation: 'pulse 4s ease-in-out infinite',
                    '@keyframes pulse': {
                        '0%': {
                            transform: 'scale(1)',
                            opacity: 0.4,
                        },
                        '50%': {
                            transform: 'scale(1.2)',
                            opacity: 0.2,
                        },
                        '100%': {
                            transform: 'scale(1)',
                            opacity: 0.4,
                        },
                    },
                }}
            />

            {/* Loading content */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <CircularProgress
                        size={60}
                        thickness={4}
                        sx={{
                            color: theme.palette.primary.main,
                            animation: 'spin 1.5s linear infinite',
                            '@keyframes spin': {
                                '0%': {
                                    transform: 'rotate(0deg)',
                                },
                                '100%': {
                                    transform: 'rotate(360deg)',
                                },
                            },
                        }}
                    />
                    <Sparkles
                        size={32}
                        color={theme.palette.primary.main}
                        style={{
                            position: 'absolute',
                            animation: 'sparkle 2s ease-in-out infinite',
                        }}
                    />
                </Box>

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        animation: 'fadeInOut 2s ease-in-out infinite',
                        '@keyframes fadeInOut': {
                            '0%': {
                                opacity: 0.6,
                            },
                            '50%': {
                                opacity: 1,
                            },
                            '100%': {
                                opacity: 0.6,
                            },
                        },
                    }}
                >
                    Loading...
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        maxWidth: 300,
                        textAlign: 'center',
                        animation: 'fadeInOut 2s ease-in-out infinite',
                        animationDelay: '0.5s',
                    }}
                >
                    Please wait while we prepare your experience
                </Typography>
            </Box>
        </Box>
    );
};

export default LoadingFallback; 