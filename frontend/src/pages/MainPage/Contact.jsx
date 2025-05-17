import {
    Box,
} from '@mui/material';

// Components
import { HeroSection, ContactInfoSection, FAQSection, MapSection } from '@components/sections/ContactPage';

// Constants
import { contactInfo, faqData } from '@constants/MainPage/ContactConstants';

const Contact = ({ isMobile }) => {
    return (
        <Box>
            {/* Hero section */}
            <HeroSection isMobile={isMobile}/>

            {/* Contact form and info section */}
            <ContactInfoSection contactInfo={contactInfo} />

            {/* FAQ Section */}
            <FAQSection faqData={faqData} />

            {/* Map Section */}
            <MapSection />
        </Box>
    );
};

export default Contact;