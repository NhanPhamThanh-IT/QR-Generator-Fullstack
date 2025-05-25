import {
    Box,
    Container,
    Grid,
    Typography,
    Paper,
    List,
    ListItem,
    useTheme,
    Button,
    Zoom,
    alpha,
} from '@mui/material';
import {
    ChevronRight,
    MessageCircle,
    Sparkles
} from 'lucide-react';
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const CTASection = lazy(() => import('@components/sections/CTASection'));

// Constants
import {
    HERO_SECTION_DATA,
    CTA_SECTION_DATA,
    documentationSections
} from './constants';

// Hooks
import { useRouteNavigation } from '@hooks';

const MotionPaper = motion(Paper);

// Styles
const styles = {
    heroPaper: {
        p: 4,
        borderRadius: 4,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        width: '100%',
        maxWidth: 500,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
        transform: 'perspective(1500px) rotateY(-5deg)',
        transition: 'all 0.3s ease-in-out'
    },
    docCard: {
        p: 4,
        height: '100%',
        borderRadius: 4,
        boxShadow: (theme) => `0 20px 40px ${alpha(theme.palette.primary.main, 0.08)}`,
        border: '1px solid',
        borderColor: 'divider',
        background: (theme) => `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.default, 0.9)})`,
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
            background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            opacity: 1
        }
    },
    iconBox: {
        p: 2,
        borderRadius: 3,
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItem: {
        p: 0,
        borderRadius: 2,
        transition: 'all 0.2s ease',
        overflow: 'hidden'
    },
    itemContent: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        p: 2,
        transition: 'all 0.2s ease',
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1)
    },
    itemIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 2,
        bgcolor: (theme) => alpha(theme.palette.background.paper, 0.8),
        transition: 'all 0.2s ease',
        mr: 2,
        boxShadow: (theme) => `0 2px 8px ${alpha(theme.palette.primary.main, 0.05)}`,
        color: (theme) => theme.palette.primary.main
    },
    learnMore: {
        display: 'flex',
        alignItems: 'center',
        ml: 2,
        opacity: 1,
        transform: 'translateX(0)',
        transition: 'all 0.2s ease'
    }
};

const Docs = ({ isMobile }) => {
    const theme = useTheme();
    const { navigateTo } = useRouteNavigation();

    const renderHeroCard = () => (
        <Paper elevation={12} sx={styles.heroPaper}>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                <Sparkles size={50} color={theme.palette.primary.main} />
            </Box>
            <Typography variant="h5" align="center" fontWeight={600} gutterBottom>
                {HERO_SECTION_DATA.cardTitle}
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary">
                {HERO_SECTION_DATA.cardDescription}
            </Typography>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigateTo(CTA_SECTION_DATA.buttonLink)}
                    endIcon={<ChevronRight />}
                >
                    {HERO_SECTION_DATA.cardButtonText}
                </Button>
            </Box>
        </Paper>
    );

    const renderDocumentationSection = () => (
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
                            <Grid item xs={12} md={6} key={section.title}>
                                <Zoom in timeout={500} style={{ transitionDelay: `${index * 100}ms` }}>
                                    <MotionPaper
                                        elevation={0}
                                        initial={{ scale: 0.95, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        sx={styles.docCard}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                            <Box sx={styles.iconBox}>
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

                                        <List sx={{ py: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                            {section.items.map((item) => (
                                                <ListItem
                                                    key={item.title}
                                                    component={Button}
                                                    href={item.path}
                                                    sx={styles.listItem}
                                                >
                                                    <Box sx={styles.itemContent}>
                                                        <Box sx={styles.itemIcon}>
                                                            <ChevronRight size={20} />
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
                                                        <Box sx={styles.learnMore}>
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
    );

    return (
        <Box sx={{ bgcolor: 'background.default' }}>
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <HeroSection
                    isMobile={isMobile}
                    heroData={HERO_SECTION_DATA}
                    rightChildren={renderHeroCard()}
                />
            </Suspense>

            {renderDocumentationSection()}

            <Box sx={{ mt: 6, textAlign: 'center' }}>
                <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                    <CTASection
                        Icon={MessageCircle}
                        title={CTA_SECTION_DATA.title}
                        description={CTA_SECTION_DATA.description}
                        buttonsChildren={
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                sx={{
                                    px: 4,
                                    borderRadius: 28,
                                    boxShadow: '0 8px 20px rgba(131, 56, 236, 0.3)',
                                }}
                                onClick={() => navigateTo(CTA_SECTION_DATA.buttonLink)}
                            >
                                {CTA_SECTION_DATA.buttonText}
                            </Button>
                        }
                    />
                </Suspense>
            </Box>
        </Box>
    );
};

export default Docs;
