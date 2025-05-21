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
    useTheme,
    Button,
    Fade,
    Zoom,
    alpha,
} from '@mui/material';
import {
    Search,
    ChevronRight,
    MessageCircle,
} from 'lucide-react';
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const CTASection = lazy(() => import('@components/sections/CTASection'))

// Constants
import { HERO_SECTION_DATA, documentationSections } from '@constants/MainPage/DocsConstants';

const MotionPaper = motion.create(Paper);

const Docs = ({ isMobile }) => {
    const theme = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Box sx={{ bgcolor: 'background.default' }}>
            {/* Hero Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <HeroSection
                    isMobile={isMobile}
                    heroData={HERO_SECTION_DATA}
                    rightChildren={
                        <Fade in timeout={1000}>
                            <MotionPaper
                                elevation={0}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    borderRadius: 4,
                                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.default, 0.9)})`,
                                    backdropFilter: 'blur(10px)',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    fontWeight={700}
                                    sx={{
                                        mb: 2,
                                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent',
                                    }}
                                >
                                    Search Documentation
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                    Find answers to your questions quickly and efficiently
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
                                                <Search size={24} color={theme.palette.primary.main} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '16px',
                                            height: '56px',
                                            fontSize: '1.1rem',
                                            transition: 'all 0.3s ease',
                                            bgcolor: alpha(theme.palette.background.paper, 0.8),
                                            backdropFilter: 'blur(10px)',
                                            '&:hover': {
                                                boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`,
                                            },
                                            '&.Mui-focused': {
                                                boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.15)}`,
                                            },
                                        },
                                    }}
                                />
                            </MotionPaper>
                        </Fade>
                    }
                />
            </Suspense>

            {/* Documentation Sections */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ mb: 8, textAlign: 'center' }}>
                        <Typography
                            variant="h3"
                            fontWeight={700}
                            sx={{
                                mb: 2,
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Explore Our Documentation
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                maxWidth: '600px',
                                mx: 'auto',
                                fontSize: '1.1rem',
                                lineHeight: 1.6,
                            }}
                        >
                            Discover comprehensive guides and documentation to help you start working with our tools as quickly as possible
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {documentationSections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <Grid size={{ xs: 12, md: 6 }} key={section.title}>
                                    <Zoom in timeout={500} style={{ transitionDelay: `${index * 100}ms` }}>
                                        <MotionPaper
                                            elevation={0}
                                            initial={{ scale: 0.95, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            onHoverStart={() => setHoveredCard(section.title)}
                                            onHoverEnd={() => setHoveredCard(null)}
                                            sx={{
                                                p: 4,
                                                height: '100%',
                                                borderRadius: 4,
                                                boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.08)}`,
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.default, 0.9)})`,
                                                backdropFilter: 'blur(10px)',
                                                transition: 'all 0.3s ease',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: '4px',
                                                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                    opacity: 0,
                                                    transition: 'opacity 0.3s ease',
                                                },
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                    boxShadow: `0 30px 60px ${alpha(theme.palette.primary.main, 0.12)}`,
                                                    '&::before': {
                                                        opacity: 1,
                                                    },
                                                },
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                                <Box
                                                    sx={{
                                                        p: 2,
                                                        borderRadius: 3,
                                                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    <Icon size={32} color={theme.palette.primary.main} />
                                                </Box>
                                                <Box sx={{ ml: 3, flex: 1 }}>
                                                    <Typography
                                                        variant="h5"
                                                        sx={{
                                                            fontWeight: 700,
                                                            mb: 1,
                                                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                            backgroundClip: 'text',
                                                            WebkitBackgroundClip: 'text',
                                                            color: 'transparent',
                                                        }}
                                                    >
                                                        {section.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                        sx={{
                                                            fontSize: '1rem',
                                                            lineHeight: 1.6,
                                                        }}
                                                    >
                                                        {section.description || 'Explore our comprehensive guides and documentation'}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <List
                                                sx={{
                                                    py: 0,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 1.5,
                                                }}
                                            >
                                                {section.items.map((item) => (
                                                    <ListItem
                                                        key={item.title}
                                                        component={Button}
                                                        href={item.path}
                                                        sx={{
                                                            p: 0,
                                                            borderRadius: 2,
                                                            transition: 'all 0.2s ease',
                                                            overflow: 'hidden',
                                                            '&:hover': {
                                                                transform: 'translateX(8px)',
                                                                '& .item-content': {
                                                                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                                                                },
                                                                '& .item-icon': {
                                                                    transform: 'translateX(4px)',
                                                                    color: theme.palette.primary.main,
                                                                },
                                                            },
                                                        }}
                                                    >
                                                        <Box
                                                            className="item-content"
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                width: '100%',
                                                                p: 2,
                                                                transition: 'all 0.2s ease',
                                                            }}
                                                        >
                                                            <Box
                                                                className="item-icon"
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    width: 40,
                                                                    height: 40,
                                                                    borderRadius: 2,
                                                                    bgcolor: alpha(theme.palette.background.paper, 0.8),
                                                                    transition: 'all 0.2s ease',
                                                                    mr: 2,
                                                                    boxShadow: `0 2px 8px ${alpha(theme.palette.primary.main, 0.05)}`,
                                                                }}
                                                            >
                                                                <ChevronRight size={20} color={theme.palette.text.secondary} />
                                                            </Box>
                                                            <Box sx={{ flex: 1 }}>
                                                                <Typography
                                                                    variant="subtitle1"
                                                                    sx={{
                                                                        fontWeight: 600,
                                                                        color: theme.palette.text.primary,
                                                                        mb: 0.5,
                                                                    }}
                                                                >
                                                                    {item.title}
                                                                </Typography>
                                                                {item.description && (
                                                                    <Typography
                                                                        variant="body2"
                                                                        color="text.secondary"
                                                                        sx={{
                                                                            display: '-webkit-box',
                                                                            WebkitLineClamp: 2,
                                                                            WebkitBoxOrient: 'vertical',
                                                                            overflow: 'hidden',
                                                                            lineHeight: 1.4,
                                                                        }}
                                                                    >
                                                                        {item.description}
                                                                    </Typography>
                                                                )}
                                                            </Box>
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    ml: 2,
                                                                    opacity: 0,
                                                                    transform: 'translateX(-8px)',
                                                                    transition: 'all 0.2s ease',
                                                                    '.MuiListItem-root:hover &': {
                                                                        opacity: 1,
                                                                        transform: 'translateX(0)',
                                                                    },
                                                                }}
                                                            >
                                                                <Typography
                                                                    variant="body2"
                                                                    color="primary"
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                                        backgroundClip: 'text',
                                                                        WebkitBackgroundClip: 'text',
                                                                        color: 'transparent',
                                                                    }}
                                                                >
                                                                    Learn more
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </MotionPaper>
                                    </Zoom>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box
                sx={{
                    mt: 6,
                    textAlign: 'center',
                }}
            >
                <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                    <CTASection
                        Icon={MessageCircle}
                        title="Need more help?"
                        description="Can't find what you're looking for? Our dedicated support team is here to help you with any questions or concerns."
                        buttonsChildren={
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                sx={{
                                    px: 4,
                                    borderRadius: 28,
                                    boxShadow: '0 8px 20px rgba(131, 56, 236, 0.3)',
                                    '&:hover': {
                                        boxShadow: '0 12px 24px rgba(131, 56, 236, 0.4)',
                                    }
                                }}
                            >
                                Contact Support
                            </Button>
                        }
                    />
                </Suspense>
            </Box>
        </Box>
    );
};

export default Docs;
