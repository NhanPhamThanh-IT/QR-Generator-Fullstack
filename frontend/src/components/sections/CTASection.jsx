import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

/**
 * CTASection - A Call-to-Action section component with customizable content and styling
 * @param {Object} props
 * @param {React.Component} props.Icon - Optional icon component to display
 * @param {string} props.title - Main heading text
 * @param {string} props.description - Descriptive text below the title
 * @param {React.ReactNode} props.buttonsChildren - Button components to display
 * @param {string} props.bgColor - Background color (defaults to primary.main)
 * @param {Object} props.sx - Additional styles to apply to the main Box
 */
export const CTASection = ({
    Icon,
    title,
    description,
    buttonsChildren,
    bgColor,
    sx = {}
}) => {
    const theme = useTheme();

    return (
        <Box sx={{
            py: { xs: 10, md: 14 },
            bgcolor: bgColor || theme.palette.primary.main,
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            ...sx
        }}>
            {/* Decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -120,
                    left: -50,
                    width: 250,
                    height: 250,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ textAlign: 'center' }}>
                    {Icon && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                            <Icon size={48} color="white" style={{ opacity: 0.9 }} />
                        </Box>
                    )}

                    <Typography variant="h3" component="h2" gutterBottom fontWeight={700}>
                        {title}
                    </Typography>

                    <Typography variant="h6" component="p" sx={{ mb: 5, opacity: 0.9, fontWeight: 400 }}>
                        {description}
                    </Typography>

                    {buttonsChildren}
                </Box>
            </Container>
        </Box>
    )
}

CTASection.propTypes = {
    Icon: PropTypes.elementType,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonsChildren: PropTypes.node,
    bgColor: PropTypes.string,
    sx: PropTypes.object
};

export default CTASection;