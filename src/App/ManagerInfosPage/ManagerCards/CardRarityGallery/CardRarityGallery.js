import React, {useState, useEffect} from 'react'

//ALERT
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

//CAROUSEL
import {CardCarousel} from './CardCarousel/CardCarousel'

export function CardRarityGallery (props) {

    
    let titleStyle ;
    let galleryStyle ;
    if (props.rarity === 'common') {
        titleStyle = {color: 'gray', fontSize: '26px', fontWeight: 600, paddingTop: '15px', marginBottom: '35px', width: '100%', display: 'flex', justifyContent: 'center'}
        galleryStyle = {paddingTop: '10px', paddingBottom: '60px', marginLeft: '6%', marginRight: '6%'}
    }

    if (props.rarity === 'limited') {
        titleStyle = {color: 'rgb(207, 196, 42)', fontSize: '26px', fontWeight: 600, paddingTop: '15px', marginBottom: '35px', width: '100%', display: 'flex', justifyContent: 'center'}
        galleryStyle = {paddingTop: '10px', paddingBottom: '60px', marginLeft: '6%', marginRight: '6%'}
    }

    if (props.rarity === 'rare') {
        titleStyle = {color: 'rgb(147, 6, 4)', fontSize: '26px', fontWeight: 600, paddingTop: '15px', marginBottom: '35px', width: '100%', display: 'flex', justifyContent: 'center'}
        galleryStyle = {paddingTop: '10px', paddingBottom: '60px', marginLeft: '6%', marginRight: '6%'}
    }

    if (props.rarity === 'super rare') {
        titleStyle = {color: 'rgb(0, 29, 102)', fontSize: '26px', fontWeight: 600, paddingTop: '15px', marginBottom: '35px', width: '100%', display: 'flex', justifyContent: 'center'}
        galleryStyle = {paddingTop: '10px', paddingBottom: '60px', marginLeft: '6%', marginRight: '6%'}
    }

    if (props.rarity === 'unique') {
        titleStyle = {color: 'rgb(20, 20, 20)', fontSize: '26px', fontWeight: 600, paddingTop: '15px', marginBottom: '35px', width: '100%', display: 'flex', justifyContent: 'center'}
        galleryStyle = {paddingTop: '10px', paddingBottom: '60px', marginLeft: '6%', marginRight: '6%'}
    }





    const [cardsToDisplay, setCardsToDisplay] = useState([])
    useEffect(
        () => {

            setCardsToDisplay(props.cardsToDisplay)

        }, [props.cardsToDisplay]
    )

    return (

        <div style={galleryStyle}>

            <div style={titleStyle}>{props.rarity.toUpperCase()} GALLERY</div>

            {
                cardsToDisplay.length === 0 ?
                <Stack sx={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', width: '80%'}} spacing={2}>
                    <Alert severity="info">No cards to display</Alert>
                </Stack> :
                <CardCarousel cardsToDisplay={cardsToDisplay}/>
            }
            
        </div>


    );
}