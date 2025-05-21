/**
 * HeroSection Component
 * 
 * A versatile and responsive hero section component that displays a prominent header section
 * with customizable content, background, and layout options. The component supports both
 * mobile and desktop layouts with different styling and content arrangements.
 * 
 * @component
 * @example
 * ```jsx
 * <HeroSection
 *   heroData={{
 *     title: "Welcome to Our Platform",
 *     description: "Discover amazing features and possibilities"
 *   }}
 *   leftChildren={<Button>Get Started</Button>}
 *   rightChildren={<img src="hero-image.png" alt="Hero" />}
 *   isMobile={false}
 *   backgroundImage="/path/to/image.jpg"
 * />
 * ```
 * 
 * @param {Object} props - Component props
 * @param {Object} props.heroData - Data object containing hero section content
 * @param {string} props.heroData.title - Main heading text for the hero section
 * @param {string} props.heroData.description - Subheading or descriptive text
 * @param {React.ReactNode} props.leftChildren - React elements to be rendered in the left column
 * @param {React.ReactNode} props.rightChildren - React elements to be rendered in the right column
 * @param {boolean} props.isMobile - Flag indicating if the component is being rendered on mobile
 * @param {string} [props.backgroundImage] - Optional URL for the background image. If not provided,
 *                                          a gradient background using theme colors will be used
 * 
 * @returns {JSX.Element} A responsive hero section with customizable content and styling
 */
import {
    Box,
    Container,
    Typography,
    Grid,
    useTheme
} from '@mui/material';

export const HeroSection = ({
    heroData,
    leftChildren,
    rightChildren,
    isMobile,
    backgroundImage
}) => {
    const { title, description } = heroData;
    const theme = useTheme();

    const backgroundStyle = backgroundImage
        ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`
        : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`;

    return (
        <Box
            sx={{
                position: 'relative',
                background: backgroundStyle,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                pt: { xs: 12, md: 20 },
                pb: { xs: 12, md: 15 },
                color: 'white',
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.secondary.light}22 0%, ${theme.palette.primary.light}00 70%)`,
                    opacity: 0.6,
                    display: { xs: 'none', md: 'block' }
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
                    background: `radial-gradient(circle, ${theme.palette.primary.light}22 0%, ${theme.palette.secondary.light}00 70%)`,
                    opacity: 0.4,
                    display: { xs: 'none', md: 'block' }
                }}
            />

            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    {/* Left Column: Text Content */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ position: 'relative', zIndex: 2 }}>
                            <Typography
                                component="h1"
                                variant={isMobile ? 'h4' : 'h3'}
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    lineHeight: 1.2,
                                    textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                                }}
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant={isMobile ? 'body1' : 'h6'}
                                sx={{
                                    mb: 4,
                                    opacity: 0.9,
                                    maxWidth: 600,
                                    textShadow: '0 1px 8px rgba(0,0,0,0.1)'
                                }}
                            >
                                {description}
                            </Typography>
                            {leftChildren}
                        </Box>
                    </Grid>

                    {/* Right Column: Visual Card */}
                    <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {rightChildren}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
