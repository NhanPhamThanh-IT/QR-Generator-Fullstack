import {
    Box,
    Container,
    Grid,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Divider,
    Link,
    useTheme
} from '@mui/material';
import { MapPin, Mail, Phone, Clock, MessageSquare, ExternalLink } from 'lucide-react';

// Components
import ContactForm from '@components/ui/ContactForm';
import SectionHeading from '@components/ui/SectionHeading';

const contactInfo = [
    {
        icon: MapPin,
        primary: 'Address',
        secondary: '123 AI Innovation Street, San Francisco, CA 94103, USA',
    },
    {
        icon: Mail,
        primary: 'Email',
        secondary: 'info@aitools.com',
    },
    {
        icon: Phone,
        primary: 'Phone',
        secondary: '+1 (555) 123-4567',
    },
    {
        icon: Clock,
        primary: 'Business Hours',
        secondary: 'Monday - Friday: 9:00 AM - 6:00 PM (PST)',
    },
];

const faqData = [
    {
        question: 'What types of AI tools do you offer?',
        answer: 'We offer a variety of AI tools including text generation, image processing, data analysis, and document AI solutions. Our tools are designed to help with productivity, creativity, and automating repetitive tasks.',
    },
    {
        question: 'Are there free tools available?',
        answer: 'Yes, we offer both free and premium tools. Free tools come with basic features and are perfect for getting started, while premium tools offer advanced capabilities for professional needs.',
    },
    {
        question: 'How do I get support for a tool I\'m using?',
        answer: 'You can get support by contacting our team through this contact form, emailing support@aitools.com, or using the in-app help feature available for each tool.',
    },
];

const Contact = () => {
    const theme = useTheme();

    return (
        <Box>
            {/* Hero section */}
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background: `linear-gradient(to right, ${theme.palette.primary.main}10, ${theme.palette.primary.light}20)`,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                        Get in Touch
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, fontWeight: 400 }}>
                        Have questions about our AI tools? Need help with your account? Or maybe you just want to say hello? We're here for you.
                    </Typography>
                </Container>
            </Box>

            {/* Contact form and info section */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={7}>
                            <ContactForm />
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    borderRadius: 4,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
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
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<MessageSquare size={16} />}
                                        sx={{ borderRadius: 28 }}
                                    >
                                        Start Live Chat
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* FAQ Section */}
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    bgcolor: 'grey.50',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Container maxWidth="lg">
                    <SectionHeading
                        title="Frequently Asked Questions"
                        subtitle="Find quick answers to common questions about our AI tools and services."
                        centered={true}
                    />

                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={10} lg={8}>
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                {faqData.map((faq, index) => (
                                    <Box key={index}>
                                        <Box sx={{ p: 3 }}>
                                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                                {faq.question}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {faq.answer}
                                            </Typography>
                                        </Box>
                                        {index < faqData.length - 1 && <Divider />}
                                    </Box>
                                ))}
                            </Paper>

                            <Box sx={{ textAlign: 'center', mt: 4 }}>
                                <Typography variant="body1" paragraph>
                                    Didn't find what you're looking for?
                                </Typography>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    endIcon={<ExternalLink size={16} />}
                                    component={Link}
                                    href="#"
                                    sx={{ borderRadius: 28 }}
                                >
                                    Visit our Knowledge Base
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Map Section */}
            <Box sx={{ height: '400px', width: '100%' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d-122.43759999999999!3d37.75769999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635787483929!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Google Maps location"
                ></iframe>
            </Box>
        </Box>
    );
};

export default Contact;