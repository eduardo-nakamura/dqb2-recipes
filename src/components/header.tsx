import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import {
  List, ListItem, ListItemButton, ListItemText, Drawer, Avatar, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, ButtonGroup, Tooltip, MenuItem
} from '@mui/material';
import { getLinks } from "../assets/data"
import { Link, NavLink } from "react-router-dom";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  let menuLinks = getLinks();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuLinks.map((page, index) => (
                <ListItem key={'btn-' + index} button component={Link} to={page.location}>
                  <ListItemButton>
                    
                    <ListItemText sx={{ ml: 2 }} primary={page.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuLinks.map((page, index) => (
              <NavLink
                style={({ isActive }) => ({
                  margin: '0 10px',
                  fontWeight: isActive ? "600" : "400",
                  color: isActive ? '#FFFFFF' : '#f0f0f0',
                  textDecoration: isActive ? 'underline' : 'none',
                })}
                className="btn-header"
                key={'btn-' + index}
                to={page.location}>
                {page.name}
              </NavLink>
            ))}
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;