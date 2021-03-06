import React, {useState, useEffect} from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

//COMPONENTS
import {GalleryCard} from './GalleryCard/GalleryCard'

//INTERFACES
import {Card} from '../../../../Interfaces'

//CSS
import './CardCarousel.css'

// eslint-disable-next-line
export function CardCarousel (props: any) {
    
    const [cardsToDisplay, setCardsToDisplay] = useState<Card[]>([])
    useEffect(
        () => {
            setCardsToDisplay(
                props.cardsToDisplay.map(
                    (card: Card) => <GalleryCard cardInfos={card} key={props.cardsToDisplay.indexOf(card) + 1}/>
                )
            )

        }, [props.cardsToDisplay]
    )

    const responsive = {
        0: { items: 1 },
        500: { items: 2 },
        1000: { items: 3},
        1500: { items: 4 },
        2000: { items: 5 },
        2500: { items: 6},
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