import { useState } from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    InputAdornment,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    useTheme,
    Button,
} from '@mui/material';
import {
    Search,
    Book,
    FileText,
    Code,
    Settings,
    HelpCircle,
    ChevronRight,
} from 'lucide-react';

const documentationSections = [
    {
        title: 'Getting Started',
        icon: Book,
        items: [
            { title: 'Introduction', path: '/docs/introduction' },
            { title: 'Quick Start Guide', path: '/docs/quick-start' },
            { title: 'Installation', path: '/docs/installation' },
        ],
    },
    {
        title: 'Core Features',
        icon: FileText,
        items: [
            { title: 'AI Tools Overview', path: '/docs/ai-tools' },
            { title: 'Text Generation', path: '/docs/text-generation' },
            { title: 'Image Processing', path: '/docs/image-processing' },
        ],
    },
    {
        title: 'API Reference',
        icon: Code,
        items: [
            { title: 'Authentication', path: '/docs/api/auth' },
            { title: 'Endpoints', path: '/docs/api/endpoints' },
            { title: 'Rate Limits', path: '/docs/api/rate-limits' },
        ],
    },
    {
        title: 'Configuration',
        icon: Settings,
        items: [
            { title: 'Environment Setup', path: '/docs/config/env' },
            { title: 'API Keys', path: '/docs/config/api-keys' },
            { title: 'Custom Settings', path: '/docs/config/settings' },
        ],
    },
    {
        title: 'Troubleshooting',
        icon: HelpCircle,
        items: [
            { title: 'Common Issues', path: '/docs/troubleshooting/common' },
            { title: 'Error Codes', path: '/docs/troubleshooting/errors' },
            { title: 'FAQ', path: '/docs/troubleshooting/faq' },
        ],
    },
];

const Docs = () => {
    const theme = useTheme();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    pt: { xs: 6, md: 10 },
                    pb: { xs: 6, md: 8 },
                    background: `linear-gradient(to right, ${theme.palette.primary.main}10, ${theme.palette.primary.light}20)`,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                                Documentation
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
                                Everything you need to know about our AI tools and how to use them effectively.
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: 5 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <Typography variant="h6" gutterBottom fontWeight={600}>
                                    Search Documentation
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    Find answers to your questions quickly
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Search documentation..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Search size={20} color={theme.palette.text.secondary} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '12px',
                                        },
                                    }}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Documentation Sections */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {documentationSections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={section.title}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            height: '100%',
                                            borderRadius: 3,
                                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            transition: 'transform 0.2s ease-in-out',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                            },
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <Icon size={24} color={theme.palette.primary.main} />
                                            <Typography variant="h6" sx={{ ml: 1.5, fontWeight: 600 }}>
                                                {section.title}
                                            </Typography>
                                        </Box>
                                        <Divider sx={{ mb: 2 }} />
                                        <List sx={{ py: 0, '& .MuiListItem-root': { mb: 2.5 } }}>
                                            {section.items.map((item) => (
                                                <ListItem
                                                    key={item.title}
                                                    component={Button}
                                                    href={item.path}
                                                    sx={{
                                                        py: 1,
                                                        px: 2,
                                                        borderRadius: 2,
                                                        '&:hover': {
                                                            bgcolor: theme.palette.primary.main + '10',
                                                        },
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={item.title}
                                                        primaryTypographyProps={{
                                                            variant: 'body1',
                                                            color: 'text.primary',
                                                        }}
                                                    />
                                                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                                                        <ChevronRight size={20} color={theme.palette.text.secondary} />
                                                    </ListItemIcon>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Paper>
                                </Grid>
                            );
                        })}
                    </Grid>

                    {/* Help Section */}
                    <Box sx={{ mt: 8, textAlign: 'center' }}>
                        <Typography variant="h5" gutterBottom fontWeight={600}>
                            Need more help?
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                            Can't find what you're looking for? Our support team is here to help.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            href="/contact"
                            sx={{
                                borderRadius: 28,
                                px: 4,
                                py: 1.5,
                            }}
                        >
                            Contact Support
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Docs;
