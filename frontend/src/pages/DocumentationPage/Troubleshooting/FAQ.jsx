import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import { ChevronDown } from 'lucide-react';

const FAQ = ({ isMobile }) => {
    const faqItems = [
        {
            question: "How do I get started with the tool?",
            answer: "To get started with the tool, you need to register an account and verify your email. After that, you can access basic features. To use advanced features, you need to upgrade to a premium account."
        },
        {
            question: "Is there a limit on the number of requests?",
            answer: "Free accounts have a limit of 100 requests per month. Premium accounts have no limits and receive priority processing."
        },
        {
            question: "How do I upgrade my account?",
            answer: "You can upgrade your account by going to Settings > Subscription and choosing the premium plan that best suits your needs."
        },
        {
            question: "Is there 24/7 technical support?",
            answer: "We provide 24/7 technical support for premium accounts. Free accounts will receive support during business hours."
        },
        {
            question: "How do I report a bug?",
            answer: "You can report bugs by using the contact form in the Contact section or by sending an email directly to support@example.com"
        }
    ];

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', p: isMobile ? 2 : 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Frequently Asked Questions
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
                Find answers to common questions about our service.
            </Typography>

            <Box sx={{ mt: 4 }}>
                {faqItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ChevronDown />}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'action.hover'
                                    }
                                }}
                            >
                                <Typography variant="h6" color="primary">
                                    {item.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" color="text.secondary">
                                    {item.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        {index < faqItems.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </Box>

            <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 1 }}>
                <Typography variant="h6" gutterBottom>
                    Can't find your answer?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    If you can't find the answer to your question, please contact us through the Contact page or send an email to support@example.com
                </Typography>
            </Box>
        </Box>
    );
};

export default FAQ; 