import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { usePageTitle } from '@hooks';

/**
 * A layout component that wraps page content and manages page title and favicon.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the layout
 * @param {string} [props.title] - The page title to be displayed in the browser tab
 * @param {string} [props.favicon] - The path to the favicon image
 * 
 * @example
 * // Basic usage
 * <PageLayout title="Home">
 *   <div>Page content</div>
 * </PageLayout>
 * 
 * @example
 * // Usage with custom favicon
 * <PageLayout title="Dashboard" favicon="/images/dashboard-icon.ico">
 *   <div>Dashboard content</div>
 * </PageLayout>
 */
const PageLayout = ({ children, title, favicon }) => {
  usePageTitle(title, favicon);

  return (
    <Box>
      {children}
    </Box>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  favicon: PropTypes.string,
};

PageLayout.defaultProps = {
  title: '',
  favicon: '',
};

export default PageLayout; 