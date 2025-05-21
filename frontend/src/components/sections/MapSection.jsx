/**
 * @file MapSection.jsx
 * @description A React component that renders an embedded Google Maps iframe showing the MIT location.
 * This component is part of the website's sections and provides an interactive map view.
 * 
 * @component
 * @example
 * ```jsx
 * import { MapSection } from './components/sections/MapSection';
 * 
 * function App() {
 *   return <MapSection />;
 * }
 * ```
 */

import { Box } from '@mui/material'

/**
 * MapSection Component
 * 
 * @component
 * @description Renders a full-width Google Maps iframe embedded in a Material-UI Box container.
 * The map is centered on the Massachusetts Institute of Technology campus.
 * 
 * @returns {JSX.Element} A Box component containing an iframe with the embedded Google Map
 * 
 * @property {Object} Box.sx - Material-UI Box styling properties
 * @property {string} Box.sx.height - Fixed height of 550px for the map container
 * @property {string} Box.sx.width - Full width (100%) for the map container
 * 
 * @property {Object} iframe - Google Maps iframe properties
 * @property {string} iframe.src - Google Maps embed URL with MIT location coordinates
 * @property {string} iframe.width - Full width (100%) for the iframe
 * @property {string} iframe.height - Full height (100%) for the iframe
 * @property {Object} iframe.style - Inline styles for the iframe
 * @property {boolean} iframe.allowFullScreen - Enables fullscreen mode for the map
 * @property {string} iframe.loading - Lazy loading attribute for better performance
 * @property {string} iframe.title - Accessibility title for the iframe
 */
export const MapSection = () => {
    return (
        <Box sx={{ height: '550px', width: '100%' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.262831631471!2d-71.09416028454378!3d42.36009197918619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370aaf08789e5%3A0x91c5c60f2820f4!2sMassachusetts%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1623883902144!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps location"
            ></iframe>
        </Box>
    )
}

export default MapSection;