import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;