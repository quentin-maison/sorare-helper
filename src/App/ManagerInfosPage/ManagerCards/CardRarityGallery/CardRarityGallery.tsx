import React, {useState, useEffect} from 'react'

//ALERT
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

//CAROUSEL
import {CardCarousel} from './CardCarousel/CardCarousel'

//CSS
import './CardRarityGallery.css'

//INTERFACES
import {Card} from '../../../Interfaces'

// eslint-disable-next-line
export function CardRarityGallery (props: any) {


    const [cardsToDisplay, setCardsToDisplay] = useState<Card[]>([])
    useEffect(
        () => {
            setCardsToDisplay(props.cardsToDisplay)
        }, [props.cardsToDisplay]
    )

    return (
        <div className='gallery-rarity'>

            <div className='gallery-title-rarity'>{props.rarity.toUpperCase()} GALLERY</div>
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