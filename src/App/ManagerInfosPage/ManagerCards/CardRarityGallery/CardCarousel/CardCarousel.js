import React, {useState, useEffect} from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

//COMPONENTS
import {GalleryCard} from './GalleryCard/GalleryCard'


export function CardCarousel (props) {
    
    const [cardsToDisplay, setCardsToDisplay] = useState([])
    useEffect(
        () => {
            setCardsToDisplay(
                props.cardsToDisplay.map(
                    (card) => <GalleryCard cardInfos={card} key={props.cardsToDisplay.indexOf(card) + 1}/>
                )
            )

        }, [props.cardsToDisplay]
    )

    const responsive = {
        0: { items: 1 },
        200: { items: 2 },
        400: { items: 3},
        600: { items: 4 },
        800: { items: 5 },
        1000: { items: 6},
    };        


    return (

        <AliceCarousel
            mouseTracking
            items={cardsToDisplay}
            responsive={responsive}
            controlsStrategy="alternate"
            disableDotsControls={true}
        /> 
    );
  }