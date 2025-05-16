import React from 'react';
import { Paper, Box, Typography, useTheme } from '@mui/material';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  accentColor
}) => {
  const theme = useTheme();
  const iconColor = accentColor || theme.palette.primary.main;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        borderRadius: 4,
        transition: 'all 0.3s ease',
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          transform: 'translateY(-5px)',
          borderColor: 'transparent',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 56,
          height: 56,
          borderRadius: '12px',
          backgroundColor: `${iconColor}16`,
          mb: 3,
        }}
      >
        <Icon size={28} color={iconColor} />
      </Box>
      
      <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
        {title}
      </Typography>
      
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );
};

export default FeatureCard;