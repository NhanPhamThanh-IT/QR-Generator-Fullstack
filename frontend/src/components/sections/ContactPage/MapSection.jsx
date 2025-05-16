import { Box } from '@mui/material'

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