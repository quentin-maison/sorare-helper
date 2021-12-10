import React, {useEffect, useState} from 'react'


//ALERT
import Alert from '@mui/material/Alert';

//LOADING SKELETON
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

//ICONE
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


//CSS
import './HomePage.css'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
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
  
export function HomePage (props) {

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



    const [displayAlertSearching, setDisplayAlertSearching] = useState({display: 'none'})
    const [displayAlertNotFound, setDisplayAlertNotFound] = useState({display: 'none'})
    const [displayHomePage, setDisplayHomePage] = useState({display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'})
    useEffect(
        () => {

            if (props.searchStatus === 'no-search') {
                setDisplayAlertSearching({display: 'none'})
                setDisplayAlertNotFound({display: 'none'})
                setDisplayHomePage({display: 'block'})
            }

            if (props.searchStatus === 'searching') {
                setDisplayAlertSearching({display: 'block'})
                setDisplayAlertNotFound({display: 'none'})
                setDisplayHomePage({display: 'none'})
            }

            if (props.searchStatus === 'search-not-found') {
                setDisplayAlertSearching({display: 'none'})
                setDisplayAlertNotFound({display: 'block'})
                setDisplayHomePage({display: 'block'})
            }


        }, [props.searchStatus]
    )
  
    return (
        <div id='homepage' style={{paddingTop: '60px'}}>
        <div style={displayAlertSearching}>
            <Alert severity="warning" variant="filled" style={{width: '70%', height: '50px', fontSize: '20px', backgroundColor: 'rgb(237, 108, 2, 0.85)', display: 'flex', alignItems: 'center', marginRight: 'auto', marginLeft: 'auto' }}>
                Searching '{props.managerSearched}' | Operation can take up to 15 sec.
            </Alert>

            <Box sx={{ width: '60%', marginTop: '25px', marginRight: 'auto', marginLeft: 'auto' }}>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
            </Box>
        </div>

        <div style={displayHomePage}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                <div style={{width: '50%', minWidth: '400px', marginBottom: '40px'}}>
                    <h2 style={{color: 'rgb(2, 163, 136)', fontSize: '44px', fontWeight: 600, paddingTop: '8px', paddingBottom: '8px', marginBottom: '15px'}}>Welcome to Sorare Helper!</h2>
                    <p style={{fontSize: '22px', marginBottom: '40px', lineHeight: 1.2, textAlign: 'justify'}}>Sorare Helper assists sorare manager in their line-up build each and every gameweek by assessing their key players and suggesting them their expected top-scoring team.</p>
                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '60%', backgroundColor: 'rgb(2, 163, 136)', margin: 'auto', borderRadius: '35px', paddingTop: '10px', paddingBottom: '10px'}}>
                        <Search style={{width: '100%'}}>
                            <form onSubmit={handleSearch} style={{width: '100%'}}>
                                <SearchIconWrapper style={{width: '20px'}}>
                                    <button type='submit' style={{backgroundColor: 'inherit', border: 'none', color: 'white'}}>
                                        <SearchIcon sx={{fontSize: 32}}/>
                                    </button>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    style={{fontSize: '20px', color: 'white'}}
                                    placeholder="Enter manager name"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onChange={updateInput}
                                    value={searchInput}
                                /> 
                            </form>
                        </Search>
                    </div>
                </div>
            </div>

            <div style={displayAlertNotFound}>
                <Alert variant="filled" severity="error" style={{height: '50px', backgroundColor: 'rgb(211, 47, 47, 0.9)', fontSize: '18px', display: 'flex', alignItems: 'center', width: '60%', margin: 'auto'}}>No match found for '{props.managerSearched}'</Alert>            </div>
            </div>
            

        </div>
    );
}

