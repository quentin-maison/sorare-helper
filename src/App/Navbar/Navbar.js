import * as React from 'react';
import {useState} from 'react'



import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

//DARK THEME
import { ThemeProvider, createTheme } from '@mui/material/styles';


//CSS
import './Navbar.css'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export function Navbar (props) {

  const [searchInput, setSearchInput] = useState('')
  const updateInput = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
  }

  const handleSearch = (e) => {  
      e.preventDefault();
      props.handleManagerSearch(searchInput)
      setSearchInput('')
  }

  return (
    <div className='margin-navbar'>
    <Box id='navbar' sx={{ flexGrow: 1}}>
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>



          <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block', marginLeft: '6%' } }}
            >
              SORARE HELPER
          </Typography>

          <Box sx={{ flexGrow: 12 }} />

          <Search>
            <form onSubmit={handleSearch}>
              <SearchIconWrapper>
                <button type='submit'>
                    <SearchIcon/>
                </button>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Enter manager name"
                inputProps={{ 'aria-label': 'search' }}
                onChange={updateInput}
                value={searchInput}
              /> 
            </form>
          </Search>

        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
    </div>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});