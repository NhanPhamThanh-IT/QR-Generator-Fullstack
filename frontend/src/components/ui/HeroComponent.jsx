import { Box, useTheme } from '@mui/material';

export const HeroComponent = ({ children, backgroundImage }) => {
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
            {children}
        </Box>
    )
}

export default HeroComponent;