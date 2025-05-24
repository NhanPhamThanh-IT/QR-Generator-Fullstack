import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance
let theme = createTheme({
    palette: {
        primary: {
            main: '#3a86ff',
            light: '#6ea8ff',
            lighter: '#9ecaff', // Added lighter shade
            dark: '#0066cc',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#8338ec',
            light: '#a66ef9',
            lighter: '#c79eff', // Added lighter shade
            dark: '#6020b0',
            contrastText: '#ffffff',
        },
        success: {
            main: '#2cb67d',
            light: '#4fd598',
            dark: '#1a9964',
        },
        error: {
            main: '#ff5a5f',
            light: '#ff8a8e',
            dark: '#e13339',
        },
        warning: {
            main: '#ffbe0b',
            light: '#ffce4b',
            dark: '#d99c00',
        },
        info: {
            main: '#38b2ac',
            light: '#64c5c0',
            dark: '#2a8580',
        },
        background: {
            default: '#f8f9fa',
            paper: '#ffffff',
        },
        text: {
            primary: '#333333',
            secondary: '#6b7280',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontWeight: 600,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontWeight: 600,
            letterSpacing: '0em',
        },
        h4: {
            fontWeight: 600,
            letterSpacing: '0.00735em',
        },
        h5: {
            fontWeight: 500,
            letterSpacing: '0em',
        },
        h6: {
            fontWeight: 500,
            letterSpacing: '0.0075em',
        },
        button: {
            fontWeight: 500,
            letterSpacing: '0.02857em',
            textTransform: 'none',
        },
        body1: {
            lineHeight: 1.5,
        },
        body2: {
            lineHeight: 1.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 28,
                    padding: '10px 24px',
                    boxShadow: '0 4px 6px rgba(58, 134, 255, 0.12)',
                },
                contained: {
                    '&:hover': {
                        boxShadow: '0 6px 10px rgba(58, 134, 255, 0.2)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                rounded: {
                    borderRadius: 12,
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    userSelect: 'none',
                },
            },
        },
    },
});

// Apply responsive font sizes
theme = responsiveFontSizes(theme);

export default theme;