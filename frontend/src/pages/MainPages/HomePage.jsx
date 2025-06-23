// src/pages/HomePage.jsx
import { Box } from "@mui/material";
import lazyLoad from "../../utils/lazyLoad";
import LazySection from "../../components/common/LazySection";

// Lazy-load sections
const HeroSection = lazyLoad(() => import("../../components/home/HeroSection"));
const StatsSection = lazyLoad(() => import("../../components/home/StatsSection"));
const FeaturesSection = lazyLoad(() => import("../../components/home/FeaturesSection"));
const HowItWorksSection = lazyLoad(() => import("../../components/home/HowItWorksSection"));
const UseCasesSection = lazyLoad(() => import("../../components/home/UseCasesSection"));
const TestimonialsSection = lazyLoad(() => import("../../components/home/TestimonialsSection"));
const PricingSection = lazyLoad(() => import("../../components/home/PricingSection"));
const CtaSection = lazyLoad(() => import("../../components/home/CtaSection"));

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh", mb: 20 }}>
      <HeroSection />
      <LazySection><StatsSection /></LazySection>
      <LazySection><FeaturesSection /></LazySection>
      <LazySection><HowItWorksSection /></LazySection>
      <LazySection><UseCasesSection /></LazySection>
      <LazySection><TestimonialsSection /></LazySection>
      <LazySection><PricingSection /></LazySection>
      <LazySection><CtaSection /></LazySection>
    </Box>
  );
};

export default HomePage;
