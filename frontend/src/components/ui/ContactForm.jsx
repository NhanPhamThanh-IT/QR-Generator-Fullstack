import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Paper,
  Typography,
  useTheme
} from '@mui/material';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const theme = useTheme();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const validateForm = () => {
    const errors = {
      name: formValues.name.trim() === '',
      email: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email),
      subject: formValues.subject.trim() === '',
      message: formValues.message.trim() === '',
    };
    
    setFormErrors(errors);
    
    return !Object.values(errors).some(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, submit the data
      console.log('Form submitted:', formValues);
      
      // Reset form after submission (in a real app, you'd do this after the API response)
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <Paper 
      elevation={0} 
      component="form" 
      onSubmit={handleSubmit}
      sx={{ 
        p: { xs: 3, md: 5 },
        borderRadius: 4,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        border: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        overflow: 'hidden',
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
      <Typography variant="h5" component="h2" gutterBottom fontWeight={600}>
        Get in Touch
      </Typography>
      <Typography color="text.secondary" paragraph>
        Fill out this form and we'll get back to you as soon as possible.
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            error={formErrors.name}
            helperText={formErrors.name ? 'Name is required' : ''}
            required
            variant="outlined"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            error={formErrors.email}
            helperText={formErrors.email ? 'Valid email is required' : ''}
            required
            variant="outlined"
          />
        </Grid>
        
        <Grid item xs={12}>
          <FormControl fullWidth error={formErrors.subject} required>
            <InputLabel>Subject</InputLabel>
            <Select
              name="subject"
              value={formValues.subject}
              label="Subject"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Select a subject</em>
              </MenuItem>
              <MenuItem value="general">General Inquiry</MenuItem>
              <MenuItem value="support">Technical Support</MenuItem>
              <MenuItem value="pricing">Pricing & Plans</MenuItem>
              <MenuItem value="feedback">Feedback</MenuItem>
              <MenuItem value="partnership">Partnership Opportunity</MenuItem>
            </Select>
            {formErrors.subject && (
              <FormHelperText>Please select a subject</FormHelperText>
            )}
          </FormControl>
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={5}
            value={formValues.message}
            onChange={handleChange}
            error={formErrors.message}
            helperText={formErrors.message ? 'Message is required' : ''}
            required
            variant="outlined"
          />
        </Grid>
        
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<Send size={18} />}
              sx={{ 
                px: 4,
                py: 1.5,
                borderRadius: '28px',
                boxShadow: '0 4px 14px rgba(58, 134, 255, 0.2)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(58, 134, 255, 0.4)',
                }
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactForm;