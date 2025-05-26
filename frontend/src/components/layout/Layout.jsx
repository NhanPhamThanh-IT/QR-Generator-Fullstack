import { Box } from '@mui/material';
import { lazy, Suspense } from 'react';

// Lazy load components to improve initial load performance
const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));

/**
 * @component Layout
 * @description A main layout component that provides the structure for all pages in the application.
 * It includes a header at the top, a main content area in the middle, and a footer at the bottom.
 * The component uses React.lazy for code-splitting to improve performance by loading the Header and Footer
 * components only when they are needed.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to be rendered in the main section of the layout
 * 
 * @returns {JSX.Element} A complete page layout with header, main content area, and footer
 * 
 * @example
 * // Basic usage
 * <Layout>
 *   <HomePage />
 * </Layout>
 * 
 * @example
 * // With specific content
 * <Layout>
 *   <Box>Your specific page content</Box>
 * </Layout>
 */
const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>      {/* Header with loading fallback */}
      <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'white' }} />}>
        <Header />
      </Suspense>

      {/* Main content area - grows to fill available space */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      {/* Footer with loading fallback */}
      <Suspense fallback={<Box sx={{ height: '400px', bgcolor: 'white' }} />}>
        <Footer />
      </Suspense>
    </Box>
  );
};

export default Layout;
