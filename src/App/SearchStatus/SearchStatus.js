import React, {useState, useEffect} from 'react'

//ALERT
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

//LOADING SKELETON
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

//SNACKBAR
import { useSnackbar } from 'notistack';

export function SearchStatus (props) {

    const [managerSearched, setManagerSearched] = useState('')    
    const searchStatusNoSearch = <Alert severity="info" style={{height: '50px', fontSize: '22px', display: 'flex', alignItems: 'center'}}>Search manager by name to access infos</Alert>
    const searchStatusManagerNotFound = <Alert severity="error" style={{height: '50px', fontSize: '22px', display: 'flex', alignItems: 'center'}}>No match found for '{managerSearched}'</Alert>
    const searchStatusSearching = (
        <div>
            <Alert severity="warning" style={{height: '50px', fontSize: '22px', display: 'flex', alignItems: 'center'}}>Searching '{managerSearched}'</Alert>
            <Box sx={{ width: '60%', marginTop: '25px', marginRight: 'auto', marginLeft: 'auto' }}>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
            </Box>
        </div>
    );



    const [searchStatus, setSearchStatus] = useState(searchStatusNoSearch)
    useEffect(
        () => {
            setManagerSearched(props.managerSearched)
            if (props.searchStatus === 'no-search') {setSearchStatus(searchStatusNoSearch)}
            if (props.searchStatus === 'searching') {setSearchStatus(searchStatusSearching)}
            if (props.searchStatus === 'search-not-found') {setSearchStatus(searchStatusManagerNotFound)}
            if (props.searchStatus === 'search-found') {setSearchStatus('')}
        }, [props.searchStatus, props.managerSearched]
    )

    const { enqueueSnackbar } = useSnackbar();
    const showSnackbar = (text, variant) => {
        enqueueSnackbar(text, {variant});
    };


    useEffect(
        () => {

            if (props.searchStatus === 'search-found') {
                showSnackbar(`Manager '${props.managerName}' found | ${props.managerInfos.cardCounts.total} cards`, 'success')
                showSnackbar(`Searched term '${props.managerSearched}'`)

            }

        }, [props.managerInfos]
    )



    return (

        <div id='searchstatus-container' style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
            <Stack className='searchstatus' spacing={2} style={{width: '60%', marginTop: '25px'}}>
                {searchStatus}
            </Stack>
        </div>
        
    );
}