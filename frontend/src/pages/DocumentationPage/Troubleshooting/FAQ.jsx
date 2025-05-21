import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Stack,
    useTheme,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    alpha,
    Button,
} from '@mui/material';
import {
    HelpCircle,
    ChevronDown,
    Mail,
    MessageCircle,
} from 'lucide-react';
import { lazy, Suspense } from 'react';

// Components
const HeroSection = lazy(() => import('@components/sections/HeroSection'));
const SectionHeading = lazy(() => import('@components/ui/SectionHeading'));

// Constants
import { faqData } from '@constants/DocumentationPage/FAQ';


const FAQ = ({ isMobile }) => {
    const theme = useTheme();

    return (
        <Box sx={{ bgcolor: alpha(theme.palette.background.default, 0.8) }}>
            {/* Hero Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <HeroSection
                    heroData={{
                        title: "Frequently Asked Questions",
                        subtitle: "Find answers to common questions about our platform",
                        description: "Everything you need to know about using our AI tools platform effectively"
                    }}
                    isMobile={isMobile}
                />
            </Suspense>

            {/* Main Content */}
            <Box sx={{
                py: { xs: 8, md: 12 },
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: `radial-gradient(circle at top right, ${alpha(theme.palette.primary.main, 0.1)}, transparent 70%)`,
                    pointerEvents: 'none',
                }
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* FAQ Categories */}
                        {faqData.map((category, index) => (
                            <Grid size={{ xs: 12 }} key={index}>
                                <Suspense fallback={<Box sx={{ height: '100px' }} />}>
                                    <SectionHeading
                                        title={category.category}
                                        subtitle="Find answers to common questions in this category"
                                        centered={true}
                                    />
                                </Suspense>
                                <Stack spacing={2.5}>
                                    {category.questions.map((faq, faqIndex) => (
                                        <Accordion
                                            key={faqIndex}
                                            elevation={0}
                                            sx={{
                                                borderRadius: '16px !important',
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                transition: 'all 0.2s ease-in-out',
                                                '&:before': {
                                                    display: 'none',
                                                },
                                                '&:hover': {
                                                    borderColor: 'primary.main',
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
                                                },
                                                '&.Mui-expanded': {
                                                    bgcolor: alpha(theme.palette.primary.main, 0.04),
                                                    borderColor: 'primary.main',
                                                }
                                            }}
                                        >
                                            <AccordionSummary
                                                expandIcon={
                                                    <Box sx={{
                                                        transition: 'transform 0.2s ease',
                                                        '.Mui-expanded &': {
                                                            transform: 'rotate(180deg)',
                                                        }
                                                    }}>
                                                        <ChevronDown color={theme.palette.primary.main} />
                                                    </Box>
                                                }
                                                sx={{
                                                    '& .MuiAccordionSummary-content': {
                                                        margin: '16px 0',
                                                    },
                                                }}
                                            >
                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 2,
                                                    '& .icon-wrapper': {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: '12px',
                                                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                                                        transition: 'all 0.2s ease',
                                                        '.Mui-expanded &': {
                                                            bgcolor: theme.palette.primary.main,
                                                            '& svg': {
                                                                color: 'white',
                                                            }
                                                        }
                                                    }
                                                }}>
                                                    <Box className="icon-wrapper">
                                                        <HelpCircle size={20} color={theme.palette.primary.main} />
                                                    </Box>
                                                    <Typography
                                                        variant="h6"
                                                        fontWeight={600}
                                                        sx={{
                                                            fontSize: { xs: '1rem', md: '1.1rem' },
                                                            color: 'text.primary',
                                                        }}
                                                    >
                                                        {faq.question}
                                                    </Typography>
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography
                                                    variant="body1"
                                                    color="text.secondary"
                                                    sx={{
                                                        fontSize: { xs: '0.95rem', md: '1rem' },
                                                        lineHeight: 1.7,
                                                    }}
                                                >
                                                    {faq.answer}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    ))}
                                </Stack>
                            </Grid>
                        ))}

                        {/* Contact Support */}
                        <Grid size={{ xs: 12 }}>
                            <Card
                                elevation={0}
                                sx={{
                                    borderRadius: 4,
                                    boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.1)}`,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    bgcolor: theme.palette.primary.main,
                                    color: 'white',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: `radial-gradient(circle at top right, ${alpha('#fff', 0.1)}, transparent 70%)`,
                                        pointerEvents: 'none',
                                    }
                                }}
                            >
                                <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        mb: 3
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 48,
                                            height: 48,
                                            borderRadius: '14px',
                                            bgcolor: alpha('#fff', 0.1),
                                        }}>
                                            <HelpCircle size={24} />
                                        </Box>
                                        <Typography variant="h4" fontWeight={700}>
                                            Still Have Questions?
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            opacity: 0.9,
                                            mb: 4,
                                            fontSize: { xs: '1rem', md: '1.1rem' },
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        Can't find what you're looking for? Our support team is here to help. Contact us through our support portal or email us at support@aitoolsplatform.com
                                    </Typography>
                                    <Stack
                                        direction={{ xs: 'column', sm: 'row' }}
                                        spacing={2}
                                        width="100%"
                                        display="flex"
                                        justifyContent="flex-end"
                                    >
                                        <Button
                                            variant="contained"
                                            startIcon={<MessageCircle size={20} />}
                                            sx={{
                                                bgcolor: 'white',
                                                color: 'primary.main',
                                                '&:hover': {
                                                    bgcolor: alpha('#fff', 0.9),
                                                },
                                                py: 1.5,
                                                px: 3,
                                                borderRadius: 2,
                                            }}
                                        >
                                            Live Chat
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            startIcon={<Mail size={20} />}
                                            sx={{
                                                borderColor: 'white',
                                                color: 'white',
                                                '&:hover': {
                                                    borderColor: 'white',
                                                    bgcolor: alpha('#fff', 0.1),
                                                },
                                                py: 1.5,
                                                px: 3,
                                                borderRadius: 2,
                                            }}
                                        >
                                            Email Support
                                        </Button>
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

export default FAQ;
