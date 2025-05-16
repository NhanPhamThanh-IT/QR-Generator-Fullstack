import React from 'react';
import { Box, Typography, useTheme, Container } from '@mui/material';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  marginBottom?: number | string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle,
  centered = false,
  marginBottom = 6
}) => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        textAlign: centered ? 'center' : 'left',
        mb: marginBottom
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom
        sx={{ 
          fontWeight: 700,
          position: 'relative',
          display: 'inline-block',
          mb: subtitle ? 2 : 0,
          '&::after': centered ? {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            bgcolor: theme.palette.primary.main,
            borderRadius: '2px'
          } : {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: '60px',
            height: '4px',
            bgcolor: theme.palette.primary.main,
            borderRadius: '2px'
          }
        }}
      >
        {title}
      </Typography>
      
      {subtitle && (
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ 
            maxWidth: centered ? '700px' : '100%',
            mx: centered ? 'auto' : 0,
            mt: 3
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeading;