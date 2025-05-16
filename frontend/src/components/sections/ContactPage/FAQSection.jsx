import {
    Container,
    Box,
    Grid,
    Typography,
    Paper,
    Button,
    Divider,
    Link
} from '@mui/material';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '@components/ui/SectionHeading';

export const FAQSection = ({ faqData }) => {
    return (
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
                    <Grid size={{ xs: 12, md: 10, lg: 8 }}>
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
    )
};

export default FAQSection;