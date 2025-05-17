import { Container, Grid } from '@mui/material';
import { HeroComponent } from '@components/ui/HeroComponent';
import { PageTitle } from '@components/ui/PageTitle';

export const HeroSection = ({ isMobile }) => {
    return (
        <HeroComponent>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12 }}>
                        <PageTitle
                            title={"Get in Touch"}
                            description={"Have questions about our AI tools? Need help with your account? Or maybe you just want to say hello? We're here for you."}
                            isMobile={isMobile}
                        />
                    </Grid>
                </Grid>
            </Container>
        </HeroComponent>
    )
};

export default HeroSection;