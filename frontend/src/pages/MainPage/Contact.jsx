import {
    Box,
} from '@mui/material';
import { lazy, Suspense } from 'react';

// Components
const ContactInfoSection = lazy(() => import('@components/sections/ContactInfoSection'));
const FAQSection = lazy(() => import('@components/sections/ContactPage/FAQSection'));
const MapSection = lazy(() => import('@components/sections/MapSection'));
const HeroSection = lazy(() => import('@components/sections/HeroSection'));

// Constants
import { HERO_SECTION_DATA, contactInfo, faqData } from '@constants/MainPage/ContactConstants';

const Contact = ({ isMobile }) => {
    return (
        <Box>
            {/* Hero section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'primary.main' }} />}>
                <HeroSection
                    heroData={HERO_SECTION_DATA}
                    isMobile={isMobile}
                />
            </Suspense>

            {/* Contact form and info section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'grey.100' }} />}>
                <ContactInfoSection contactInfo={contactInfo} />
            </Suspense>

            {/* FAQ Section */}
            <Suspense fallback={<Box sx={{ height: '300px', bgcolor: 'grey.100' }} />}>
                <FAQSection faqData={faqData} />
            </Suspense>

            {/* Map Section */}
            <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'grey.100' }} />}>
                <MapSection />
            </Suspense>
        </Box>
    );
};

export default Contact;