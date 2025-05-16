import {
    Box,
    Container,
    Grid,
} from '@mui/material';
import ContactForm from '@components/ui/ContactForm';
import InformationForm from '@components/ui/InformationForm';

export const ContactInfoSection = ({ contactInfo }) => {
    return (
        <Box sx={{ py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="stretch">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <ContactForm />
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <InformationForm contactInfo={contactInfo} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

export default ContactInfoSection;