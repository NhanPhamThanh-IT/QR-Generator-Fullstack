import { Box, Container, Grid } from '@mui/material';
import FeatureCard from '@components/ui/FeatureCard';
import SectionHeading from '@components/ui/SectionHeading';

export const FeaturesSection = ({ featuresData }) => {
    return (
        <Box sx={{ py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                <SectionHeading
                    title="Unlock the Power of AI"
                    subtitle="Our platform offers advanced AI capabilities designed to transform how you work, create, and interact with technology."
                    centered={true}
                />

                <Grid container spacing={4}>
                    {featuresData.map((feature, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <FeatureCard
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                                accentColor={feature.accentColor}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
};

export default FeaturesSection;