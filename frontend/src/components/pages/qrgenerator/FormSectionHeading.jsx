import {
    Box,
    InputLabel,
} from '@mui/material';

export default function FormSectionHeading({ index, title }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
                sx={{
                    padding: 1,
                    fontWeight: 'bold',
                    color: 'white',
                    background: 'linear-gradient(120deg, #6a11cb 0%, #2575fc 100%)',
                    fontSize: '1rem',
                    borderRadius: 1.5,
                }}
            >
                {index}
            </Box>
            <InputLabel
                sx={{
                    color: 'text.primary',
                    minWidth: '80px',
                    fontWeight: 600,
                }}
            >
                {title}
            </InputLabel>
        </Box>
    );
};