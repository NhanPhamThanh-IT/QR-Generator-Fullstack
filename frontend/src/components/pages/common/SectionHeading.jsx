import {
    Box,
    Typography,
} from '@mui/material';

export default function SectionHeading({ overline, title, description }) {
    return (
        <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold', letterSpacing: 1.5 }}>
                {overline}
            </Typography>
            <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>
                {title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
                {description}
            </Typography>
        </Box>
    )
};