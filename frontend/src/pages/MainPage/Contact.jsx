import {
    Box,
} from '@mui/material';

// Components
import { ContactInfoSection, FAQSection, MapSection } from '@components/sections/ContactPage';
import { HeroSection } from '@components/sections/HeroSection'

// Constants
import { contactInfo, faqData } from '@constants/MainPage/ContactConstants';

const Contact = ({ isMobile }) => {
    return (
        <Box>
            {/* Hero section */}
            <HeroSection
                title={"Get in Touch"}
                description={"Have questions about our AI tools? Need help with your account? Or maybe you just want to say hello? We're here for you."}
                isMobile={isMobile}
            />

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