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
    useMediaQuery,
} from '@mui/material';
import {
    Search,
    ChevronRight,
} from 'lucide-react';

// Components
import { HeroComponent } from '@components/ui/HeroComponent';
import { PageTitle } from '@components/ui/PageTitle';

// Constants
import { HERO_SECTION_DATA, documentationSections } from '@constants/MainPage/DocsConstants';

const Docs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Box>
            {/* Hero Section */}
            <HeroComponent>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 7 }}>
                            <PageTitle
                                title={HERO_SECTION_DATA.title}
                                description={HERO_SECTION_DATA.description}
                            />
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
                                <Typography variant="body2" color="text.secondary">
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
            </HeroComponent>

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
