import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout component that provides the basic structure for the application pages.
 * It consists of a header, main content area, and footer.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered in the main content area
 * @returns {JSX.Element} A layout structure with header, main content, and footer
 * 
 * @example
 * <Layout>
 *   <YourPageContent />
 * </Layout>
 */
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