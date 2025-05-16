import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Container,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Sparkles, Menu as MenuIcon, X } from 'lucide-react';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Contact', path: '/contact' }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <Sparkles size={24} color={theme.palette.primary.main} />
            <Box component="span" sx={{ ml: 1 }}>AI Tools</Box>
          </Box>
        </Typography>
        <IconButton>
          <X size={24} />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              component={RouterLink} 
              to={item.path}
              sx={{ 
                textAlign: 'center',
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                fontWeight: location.pathname === item.path ? 600 : 400,
                '&:hover': {
                  bgcolor: 'rgba(58, 134, 255, 0.08)'
                }
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          color="default" 
          elevation={isScrolled ? 4 : 0} 
          sx={{ 
            bgcolor: isScrolled ? 'background.paper' : 'transparent',
            transition: 'all 0.3s ease'
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                  <Sparkles size={28} color={theme.palette.primary.main} />
                  <Box component="span" sx={{ ml: 1 }}>AI Tools</Box>
                </Box>
              </Typography>
              
              {isMobile ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {navItems.map((item) => (
                    <Button 
                      key={item.name} 
                      component={RouterLink} 
                      to={item.path}
                      color={location.pathname === item.path ? 'primary' : 'inherit'}
                      sx={{ 
                        mx: 1, 
                        position: 'relative',
                        fontWeight: location.pathname === item.path ? 600 : 400,
                        '&::after': location.pathname === item.path ? {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '20%',
                          width: '60%',
                          height: '3px',
                          bgcolor: 'primary.main',
                          borderRadius: '3px'
                        } : {}
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ ml: 2 }}
                  >
                    Get Started
                  </Button>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
          anchor="right"
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </>
  );
};

export default Header;