/**
 * @fileoverview Footer component for the AI Tools website
 * @module Footer
 */

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Button,
  TextField,
  Divider,
  IconButton,
  useTheme
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  Sparkles,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon
} from 'lucide-react';

/**
 * Footer component that displays the website's footer section
 * 
 * @component
 * @returns {JSX.Element} The rendered Footer component
 * 
 * @example
 * // Basic usage
 * <Footer />
 * 
 * @description
 * The Footer component includes:
 * - Company logo and description
 * - Social media links
 * - Navigation links (Pages and Resources sections)
 * - Newsletter subscription form
 * - Copyright information and legal links
 * 
 * The component uses Material-UI components for styling and layout,
 * and includes responsive design for different screen sizes.
 */
const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Sparkles size={28} color={theme.palette.primary.main} />
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 700, ml: 1 }}
              >
                AI Tools
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 300 }}>
              Empowering users with cutting-edge AI tools designed to simplify tasks,
              enhance productivity, and unlock new possibilities.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton size="small" aria-label="twitter" color="primary">
                <TwitterIcon size={20} />
              </IconButton>
              <IconButton size="small" aria-label="facebook" color="primary">
                <FacebookIcon size={20} />
              </IconButton>
              <IconButton size="small" aria-label="instagram" color="primary">
                <InstagramIcon size={20} />
              </IconButton>
              <IconButton size="small" aria-label="linkedin" color="primary">
                <LinkedinIcon size={20} />
              </IconButton>
              <IconButton size="small" aria-label="github" color="primary">
                <GithubIcon size={20} />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Pages
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link component={RouterLink} to="/" color="text.secondary" underline="hover">
                Home
              </Link>
              <Link component={RouterLink} to="/tools" color="text.secondary" underline="hover">
                Tools
              </Link>
              <Link component={RouterLink} to="/contact" color="text.secondary" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link component="a" href="/docs" color="text.secondary" underline="hover">
                Documentation
              </Link>
              <Link component="a" href="/docs" color="text.secondary" underline="hover">
                API Reference
              </Link>
              <Link component="a" href="#" color="text.secondary" underline="hover">
                Blog
              </Link>
              <Link component="a" href="/docs" color="text.secondary" underline="hover">
                Tutorials
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Get the latest updates and news directly in your inbox.
            </Typography>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <TextField
                size="small"
                placeholder="Your email"
                variant="outlined"
                sx={{
                  flexGrow: 1,
                  height: 40,
                  "& .MuiOutlinedInput-root": {
                    height: '100%',
                    borderRadius: "28px 0 0 28px",
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  height: 40,
                  borderRadius: "0 28px 28px 0",
                  boxShadow: 'none',
                  px: 3
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} AI Tools. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <Link component="a" href="#" color="text.secondary" underline="hover" variant="body2">
              Privacy Policy
            </Link>
            <Link component="a" href="#" color="text.secondary" underline="hover" variant="body2">
              Terms of Service
            </Link>
            <Link component="a" href="#" color="text.secondary" underline="hover" variant="body2">
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;