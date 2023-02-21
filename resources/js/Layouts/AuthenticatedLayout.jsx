import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { styled, useTheme } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanIcon from '@mui/icons-material/Lan';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import ApplicationLogo from '@/Components/ApplicationLogo';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        background: '#f8f9fa',
        flexGrow: 1,
        height: '100vh',
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
  
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    [theme.breakpoints.up('sm')]: {
        minHeight: 48
    },
    minHeight: 48
}));

export default function Authenticated({ auth, header, children }) {
    const theme = useTheme();

    // Drawer logic
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    // Account Menu logic
    const [accountMenuEl, setAccountMenuEl] = React.useState(null);
    const openAccountMenu = Boolean(accountMenuEl);
    const handleAccountMenuClick = (event) => {
      setAccountMenuEl(event.currentTarget);
    };
    const handleAccountMenuClose = () => {
      setAccountMenuEl(null);
    };

    return (
        <Box sx={{ display: 'flex', minWidth: '100vw' }}>
            <AppBar position="fixed" elevation={2} open={open}>
                <Toolbar variant="dense">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <ApplicationLogo />

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
                        <Button
                            size="small"
                            startIcon={<AccountCircle />}
                            endIcon={<ExpandMoreIcon />}
                            onClick={handleAccountMenuClick}
                        >
                            {auth.user.name}
                        </Button>

                        <Menu
                            anchorEl={accountMenuEl}
                            open={openAccountMenu}
                            onClose={handleAccountMenuClose}
                            MenuListProps={{
                            'aria-labelledby': 'account-menu-button',
                            }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={handleAccountMenuClose}>
                                <Link method="post" href={route('logout')}>Logout</Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            // aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            // onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    }
                }}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider />

                <List>
                    <ListItem>
                        <Link href={route('vlans.index')}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LanIcon />
                                </ListItemIcon>
                                <ListItemText primary="VLANS" />
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <NetworkCheckIcon />
                            </ListItemIcon>
                            <Link href={route('networks.index')}>
                                <ListItemText primary="Internal Networks" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                </List>

            </Drawer>

            <Main open={open}>
                <DrawerHeader />
                {children}
            </Main>
        </Box>
    );
}
