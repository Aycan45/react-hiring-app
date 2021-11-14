import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

export default function Header() {

    const navigate = useNavigate();

    const createDeveloper = () =>{ 
         
        navigate('/create');

    }

    const homePage = () =>{ 
         
      navigate('/');
      
    }

  return (
    <Box sx={{ flexGrow: 2 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={homePage}>
          Developers 
        </Typography>
            <Button color="inherit"
                onClick = {createDeveloper}
            >Add Developer</Button>
      </Toolbar>
    </AppBar>
  </Box>
  );
}
