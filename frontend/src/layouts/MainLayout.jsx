import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Box>
        {children}
      </Box>
      <Footer />
    </>
  );
} 