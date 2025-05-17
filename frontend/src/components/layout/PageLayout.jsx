import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const PageLayout = ({ children, title, favicon }) => {
  const defaultFavicon = '/favicon.ico';

  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Tools Website` : 'Tools Website'}</title>
        <link rel="icon" type="image/x-icon" href={favicon || defaultFavicon} />
      </Helmet>
      <Box>
        {children}
      </Box>
    </>
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