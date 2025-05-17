import { Typography } from "@mui/material"

export const PageTitle = ({ title, description, isMobile, isDouble = false }) => {
    return (
        <>
            <Typography
                component="h1"
                variant={isMobile ? 'h4' : 'h3'}
                sx={{
                    fontWeight: 700,
                    mb: 2,
                    lineHeight: 1.2,
                    textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                {title}
            </Typography>
            <Typography
                variant={isMobile ? 'body1' : 'h6'}
                sx={{
                    mb: 4,
                    opacity: 0.9,
                    maxWidth: isDouble ? 600 : '100%',
                    textShadow: '0 1px 8px rgba(0,0,0,0.1)'
                }}
            >
                {description}
            </Typography>
        </>

    )
}