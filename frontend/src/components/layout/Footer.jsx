import {
    Box,
    Container,
    Grid,
    Typography,
    Link as MuiLink,
    Divider,
    IconButton,
    useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/constants';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import QrCodeIcon from '@mui/icons-material/QrCode';

const FooterWrapper = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #3a7bd5, #2b5876)',
    color: '#fff',
    padding: '60px 0 20px',
    position: 'relative',
    overflow: 'hidden',
}));

const StyledLink = styled(MuiLink)({
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    display: 'block',
    marginBottom: '10px',
    '&:hover': {
        color: '#fff',
        transform: 'translateX(5px)',
    },
});

const SocialButton = styled(IconButton)({
    color: '#fff',
    margin: '0 8px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: 'rgba(255, 255, 255, 0.2)',
        transform: 'translateY(-3px)',
    },
});

const PatternOverlay = styled(Box)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.05,
    zIndex: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
}));

export default function Footer() {
    const isMobile = useMediaQuery('(max-width:600px)');

    // Updated footer links for QR Generator site
    const footerLinks = {
        product: [
            { name: 'QR Generator', path: ROUTES.TOOLS },
            { name: 'Features', path: ROUTES.FEATURES },
            { name: 'Use Cases', path: ROUTES.USE_CASES },
            { name: 'Pricing', path: ROUTES.PRICING }
        ],
        resources: [
            { name: 'Help Center', path: ROUTES.DOCS },
            { name: 'Tutorials', path: ROUTES.TUTORIALS },
            { name: 'API Docs', path: ROUTES.API },
            { name: 'Contact Us', path: ROUTES.CONTACT }
        ],
        company: [
            { name: 'About Us', path: ROUTES.ABOUT },
            { name: 'Privacy Policy', path: ROUTES.PRIVACY },
            { name: 'Terms of Service', path: ROUTES.TERMS },
            { name: 'Blog', path: ROUTES.BLOG }
        ]
    };

    return (
        <FooterWrapper>
            <PatternOverlay />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4}>
                    {/* Logo and Description */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <QrCodeIcon sx={{ fontSize: 32, mr: 1 }} />
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                QR Generator
                            </Typography>
                        </Box>

                        <Typography variant="body2" sx={{ mb: 3, opacity: 0.8, maxWidth: '300px' }}>
                            Create custom QR codes instantly for your business, events, or personal use. Track scans and manage all your QR codes in one place.
                        </Typography>

                        <Box sx={{ display: 'flex', mb: 2 }}>
                            <SocialButton size="small">
                                <FacebookIcon fontSize="small" />
                            </SocialButton>
                            <SocialButton size="small">
                                <TwitterIcon fontSize="small" />
                            </SocialButton>
                            <SocialButton size="small">
                                <LinkedInIcon fontSize="small" />
                            </SocialButton>
                            <SocialButton size="small">
                                <InstagramIcon fontSize="small" />
                            </SocialButton>
                        </Box>
                    </Grid>

                    {/* Footer Links */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Grid container spacing={isMobile ? 3 : 4}>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                                    Product
                                </Typography>
                                {footerLinks.product.map(link => (
                                    <StyledLink
                                        key={link.name}
                                        component={Link}
                                        to={link.path}
                                    >
                                        {link.name}
                                    </StyledLink>
                                ))}
                            </Grid>

                            <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                                    Resources
                                </Typography>
                                {footerLinks.resources.map(link => (
                                    <StyledLink
                                        key={link.name}
                                        component={Link}
                                        to={link.path}
                                    >
                                        {link.name}
                                    </StyledLink>
                                ))}
                            </Grid>

                            <Grid size={{ xs: 12, sm: 4 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                                    Company
                                </Typography>
                                {footerLinks.company.map(link => (
                                    <StyledLink
                                        key={link.name}
                                        component={Link}
                                        to={link.path}
                                    >
                                        {link.name}
                                    </StyledLink>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: isMobile ? 'center' : 'flex-start',
                        gap: 2
                    }}
                >
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        © {new Date().getFullYear()} QR Generator. All rights reserved.
                    </Typography>

                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Fast, reliable QR code solutions
                    </Typography>
                </Box>
            </Container>
        </FooterWrapper>
    );
}