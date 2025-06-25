// src/pages/HomePage.jsx
import { Box } from "@mui/material";
import lazyLoad from "../../utils/lazyLoad";
import LazySection from "../../components/common/LazySection";

// Lazy-load sections
const HeroSection = lazyLoad(() => import("../../components/pages/home/HeroSection"));
const StatsSection = lazyLoad(() => import("../../components/pages/home/StatsSection"));
const FeaturesSection = lazyLoad(() => import("../../components/pages/home/FeaturesSection"));
const HowItWorksSection = lazyLoad(() => import("../../components/pages/home/HowItWorksSection"));
const UseCasesSection = lazyLoad(() => import("../../components/pages/home/UseCasesSection"));
const TestimonialsSection = lazyLoad(() => import("../../components/pages/home/TestimonialsSection"));
const CtaSection = lazyLoad(() => import("../../components/pages/home/CtaSection"));

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh", mb: 20 }}>
      <HeroSection />
      <LazySection><StatsSection /></LazySection>
      <LazySection><FeaturesSection /></LazySection>
      <LazySection><HowItWorksSection /></LazySection>
      <LazySection><UseCasesSection /></LazySection>
      <LazySection><TestimonialsSection /></LazySection>
      <LazySection><CtaSection /></LazySection>
    </Box>
  );
};

export default HomePage;
