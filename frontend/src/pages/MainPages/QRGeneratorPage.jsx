import { useState } from "react";
import QRForm from "../../components/pages/qrgenerator/QRForm";
import QRPreview from "../../components/pages/qrgenerator/QRPreview";
import { Box, Grid } from "@mui/material";
import HeroSection from "../../components/pages/common/HeroSection";

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

      {/* QR Code Generator Form and Preview */}
      <Box sx={{ p: { xs: 1, md: 4 }, maxWidth: 1200, mx: "auto" }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <QRForm formData={formData} setFormData={setFormData} />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <QRPreview formData={formData} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default QRGeneratorPage;
