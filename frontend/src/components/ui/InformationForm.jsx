import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MessageSquare } from 'lucide-react';

// Components
import ActionButton from './ActionButton';

const InformationForm = ({ contactInfo }) => {
    const theme = useTheme();

    return (
        <Paper
            elevation={0}
            sx={{
                p: 4,
                height: '100%',
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                overflow: 'hidden',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '5px',
                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                }
            }}
        >
            <Typography variant="h5" gutterBottom fontWeight={600}>
                Contact Information
            </Typography>
            <Typography color="text.secondary" paragraph>
                Here's how you can reach us directly.
            </Typography>

            <List sx={{ mt: 3 }}>
                {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <ListItem
                            key={index}
                            sx={{
                                px: 0,
                                py: 1.5,
                                ...(index < contactInfo.length - 1 && {
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                })
                            }}
                        >
                            <ListItemIcon>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 40,
                                        height: 40,
                                        borderRadius: '10px',
                                        bgcolor: theme.palette.primary.main + '15',
                                    }}
                                >
                                    <Icon size={20} color={theme.palette.primary.main} />
                                </Box>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        {item.primary}
                                    </Typography>
                                }
                                secondary={
                                    <Typography variant="body2" color="text.secondary">
                                        {item.secondary}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    );
                })}
            </List>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <ActionButton
                    text="Start Live Chat"
                    iconComponent={MessageSquare}
                    isIconAtStart={true}
                    color="primary"
                />
            </Box>
        </Paper>
    )
};

export default InformationForm;