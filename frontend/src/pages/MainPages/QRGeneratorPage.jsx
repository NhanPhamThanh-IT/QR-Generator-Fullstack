import { useState } from "react";
import { Box, Grid, Container } from "@mui/material";
import HeroSection from "../../components/pages/common/HeroSection";
import SectionHeading from "../../components/pages/common/SectionHeading";
import QRForm from "../../components/pages/qrgenerator/QRForm";
import QRPreview from "../../components/pages/qrgenerator/QRPreview";

const QRGeneratorPage = () => {
  const [formData, setFormData] = useState({
    text: "",
    color: "#000000",
    logo: null,
  });

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Section Heading */}
        <SectionHeading
          overline="Create Your Own QR Code"
          title="Design a Unique QR Code"
          description="Easily customize your QR code with your own text, colors, and logo to match your style or business identity."
        />


        {/* QR Code Generator Form and Preview */}
        <Box
          sx={{
            p: { xs: 1, md: 4 },
            maxWidth: 1200,
            mx: "auto",
            mb: 20,
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="stretch"
          >
            <Grid
              size={{ xs: 12, md: 6 }}
            >
              <QRForm formData={formData} setFormData={setFormData} />
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
            >
              <QRPreview formData={formData} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default QRGeneratorPage;
