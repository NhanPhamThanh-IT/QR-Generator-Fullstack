import { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useScrollTrigger,
    Avatar,
    Menu,
    MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { ROUTES } from '../../routes/constants';
import Cookies from 'js-cookie';

// Styled AppBar that changes based on scroll
const StyledAppBar = styled(AppBar)(({ trigger }) => ({
    background: trigger ? 'white' : 'transparent',
    boxShadow: trigger ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
    transition: 'all 0.3s ease',
    color: trigger ? '#333' : '#fff',
}));

// Icon style
const StyledQrCodeIcon = styled(QrCodeIcon)(({ trigger }) => ({
    fontSize: 32,
    marginRight: '8px',
    color: trigger ? 'inherit' : '#fff',
    transition: 'all 0.3s ease',
}));

// Logo text style
const LogoText = styled(Typography)(({ trigger }) => ({
    fontWeight: 700,
    color: trigger ? 'inherit' : '#fff',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
}));

// Toolbar layout
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

// Navigation button
const NavButton = styled(Button)({
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '16px',
    margin: '0 8px',
    borderRadius: '8px',
    padding: '8px 16px',
    transition: 'all 0.2s ease',
    '&:hover': {
        background: 'rgba(58, 123, 213, 0.1)',
    },
});

// Auth button
const AuthButton = styled(Button)({
    borderRadius: '10px',
    padding: '8px 20px',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '15px',
    background: 'linear-gradient(90deg, #3a7bd5, #2b5876)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(59, 123, 213, 0.3)',
    color: '#fff',
    '&:hover': {
        background: 'linear-gradient(90deg, #3583e9, #356cb1)',
        boxShadow: '0 6px 18px rgba(59, 123, 213, 0.4)',
        transform: 'translateY(-2px)',
    },
});

export default function Header() {
    const navigate = useNavigate();
    const isAuthenticated = Boolean(Cookies.get('access_token'));
    const isMobile = useMediaQuery('(max-width:900px)');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const menuItems = [
        { text: 'Home', path: ROUTES.HOMEPAGE },
        { text: 'QR Generator', path: ROUTES.QRGENERATOR },
        { text: 'QR History', path: ROUTES.QRHISTORY },
        { text: 'Contact', path: ROUTES.CONTACT },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(prev => !prev);
    };

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        Cookies.remove('access_token');
        setAnchorEl(null);
        navigate(ROUTES.LOGIN);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                <StyledQrCodeIcon trigger={false} />
                <LogoText variant="h6" trigger={false}>
                    QR Generator
                </LogoText>
            </Box>

            <List>
                {menuItems.map((item) => (
                    <ListItem
                        key={item.text}
                        component={Link}
                        to={item.path}
                        sx={{
                            borderRadius: '8px',
                            my: 1,
                            '&:hover': {
                                backgroundColor: 'rgba(58, 123, 213, 0.1)',
                            },
                        }}
                    >
                        <ListItemText
                            primary={item.text}
                            primaryTypographyProps={{
                                sx: { textAlign: 'center', fontWeight: 500 },
                            }}
                        />
                    </ListItem>
                ))}

                {!isAuthenticated ? (
                    <>
                        <ListItem
                            component={Link}
                            to={ROUTES.LOGIN}
                            sx={{ justifyContent: 'center', mt: 2 }}
                        >
                            <Button variant="outlined" fullWidth sx={{ borderRadius: '8px' }}>
                                Sign In
                            </Button>
                        </ListItem>
                        <ListItem
                            component={Link}
                            to={ROUTES.REGISTER}
                            sx={{ justifyContent: 'center', mt: 1 }}
                        >
                            <AuthButton fullWidth>
                                Create Account
                            </AuthButton>
                        </ListItem>
                    </>
                ) : (
                    <ListItem
                        onClick={handleLogout}
                        sx={{ justifyContent: 'center', mt: 2 }}
                    >
                        <Button
                            color="error"
                            variant="outlined"
                            fullWidth
                            sx={{ borderRadius: '8px' }}
                        >
                            Sign Out
                        </Button>
                    </ListItem>
                )}
            </List>
        </Box>
    );

    return (
        <StyledAppBar position="fixed" trigger={trigger}>
            <Container maxWidth="lg">
                <StyledToolbar disableGutters>
                    <Box
                        component={Link}
                        to={ROUTES.HOMEPAGE}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                        }}
                    >
                        <StyledQrCodeIcon trigger={trigger} />
                        <LogoText variant="h6" noWrap trigger={trigger}>
                            QR Generator
                        </LogoText>
                    </Box>

                    {!isMobile && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {menuItems.map((item) => (
                                <NavButton
                                    key={item.text}
                                    component={Link}
                                    to={item.path}
                                    color="inherit"
                                >
                                    {item.text}
                                </NavButton>
                            ))}
                        </Box>
                    )}

                    {!isMobile && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {isAuthenticated ? (
                                <>
                                    <IconButton onClick={handleProfileClick}>
                                        <Avatar
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                background: 'linear-gradient(135deg, #3a7bd5, #2b5876)',
                                            }}
                                        >
                                            U
                                        </Avatar>
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleMenuClose}
                                        PaperProps={{
                                            sx: {
                                                mt: 1,
                                                borderRadius: '12px',
                                                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)',
                                            },
                                        }}
                                    >
                                        <MenuItem
                                            component={Link}
                                            to={ROUTES.PROFILE}
                                            onClick={handleMenuClose}
                                        >
                                            My Account
                                        </MenuItem>
                                        <MenuItem
                                            component={Link}
                                            to={ROUTES.DASHBOARD}
                                            onClick={handleMenuClose}
                                        >
                                            My QR Codes
                                        </MenuItem>
                                        <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <>
                                    <NavButton
                                        component={Link}
                                        to={ROUTES.LOGIN}
                                        color="inherit"
                                    >
                                        Sign In
                                    </NavButton>
                                    <AuthButton
                                        component={Link}
                                        to={ROUTES.REGISTER}
                                        variant="contained"
                                    >
                                        Create Account
                                    </AuthButton>
                                </>
                            )}
                        </Box>
                    )}

                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </StyledToolbar>
            </Container>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: 280,
                        borderRadius: '0 16px 16px 0',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </StyledAppBar>
    );
}
