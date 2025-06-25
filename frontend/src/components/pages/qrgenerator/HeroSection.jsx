import { Box } from '@mui/material';

/**
 * HeroSection component renders a visually appealing hero section
 * with a gradient background and subtle radial patterns.
 * @returns {JSX.Element} The rendered hero section.
 * @component
 * @example
 * return (
 *   <HeroSection />
 * );
 */
export default function HeroSection() {
    return (
        <Box sx={{
            py: '32px',
            background: 'linear-gradient(120deg, #6a11cb 0%, #2575fc 100%)',
            mb: 4,
            boxShadow: '0 4px 24px rgba(37,117,252,0.10)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.05,
                backgroundImage: 'radial-gradient(circle, #ffffff 10%, transparent 10%), radial-gradient(circle, #ffffff 10%, transparent 10%)',
                backgroundSize: '30px 30px',
                backgroundPosition: '0 0, 15px 15px',
            }} />
        </Box>
    )
};