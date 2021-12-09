import React, {useState, useEffect} from 'react'

//ALERT
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

//CAROUSEL
import {CardCarousel} from './CardCarousel/CardCarousel'

export function CardRarityGallery (props) {

    
    const titleStyle = {color: 'rgb(38, 38, 38)', fontSize: '36px', fontWeight: 600, paddingTop: '15px', marginBottom: '35px', width: '100%', display: 'flex', justifyContent: 'center'}
    const galleryStyle = {paddingTop: '10px', paddingBottom: '60px', marginLeft: '6%', marginRight: '6%'}



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
                <Stack sx={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '40px', width: '80%'}} spacing={2}>
                    <Alert severity="info" style={{height: '50px', fontSize: '22px', display: 'flex', alignItems: 'center'}}>No cards to display</Alert>
                </Stack> :
                <CardCarousel cardsToDisplay={cardsToDisplay}/>
            }
            
        </div>


    );
}