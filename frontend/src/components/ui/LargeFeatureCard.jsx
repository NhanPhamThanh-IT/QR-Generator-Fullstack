import {
    Card,
    CardContent,
    Stack,
    Typography,
    Box,
    useTheme,
} from '@mui/material';

const LargeFeatureCard = ({ icon: Icon, iconColor, title, description }) => {
    const theme = useTheme();
    const iconColorValue = iconColor || theme.palette.primary.main;

    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    borderColor: 'transparent',
                },
            }}
        >
            <CardContent sx={{ p: 4 }}>
                <Stack spacing={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {Icon && <Icon size={24} color={iconColorValue} />}
                        <Typography variant="h6" fontWeight={600}>
                            {title}
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" textAlign={"justify"}>
                        {description}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
};

export default LargeFeatureCard;