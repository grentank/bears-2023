import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function NavigationBar(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            Hi!
          </IconButton>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/counter" color="inherit">
            Counter
          </Button>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} to="/signup" color="inherit">
            Sign Up
          </Button>
          <Button component={Link} to="/posts" color="inherit">
            Posts
          </Button>
          <Button component={Link} to="/search" color="inherit">
            Search-
          </Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
