import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Button, 
  Chip,
  useTheme
} from '@mui/material';
import { ArrowRight } from 'lucide-react';

const ToolCard = ({
  title,
  description,
  imageUrl,
  category,
  isNew,
  isPremium
}) => {
  const theme = useTheme();

  return (
    <Card 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={imageUrl}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Chip 
            label={category} 
            size="small" 
            sx={{ 
              bgcolor: theme.palette.primary.light, 
              color: 'white',
              fontWeight: 500,
              fontSize: '0.75rem'
            }} 
          />
          <Box>
            {isNew && (
              <Chip 
                label="New" 
                size="small" 
                sx={{ 
                  bgcolor: theme.palette.secondary.main, 
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  ml: 1
                }} 
              />
            )}
            {isPremium && (
              <Chip 
                label="Premium" 
                size="small" 
                sx={{ 
                  bgcolor: theme.palette.warning.main, 
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  ml: 1
                }} 
              />
            )}
          </Box>
        </Box>
        
        <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 1, fontWeight: 600 }}>
          {title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        
        <Button 
          endIcon={<ArrowRight size={16} />}
          sx={{ 
            mt: 'auto', 
            alignSelf: 'flex-start',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'transparent',
              transform: 'translateX(4px)'
            },
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          Try it now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ToolCard;