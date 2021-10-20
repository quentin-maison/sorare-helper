import React, {useEffect, useState} from 'react';

/*COMPONENTS*/
import {Card} from '../Card/Card'


/*CSS*/
import './PlayersLists.css'

export function DefList (props) {

    const [cardsToDisplay, setCardsToDisplay] = useState([])
    
    useEffect(
        () => {

            if (props.cardsList) {
                const defCards = props.cardsList.filter((card) => card.position === 'DEF');
                const defScarcitySelected = defCards.filter(
                    (card) => {
                        if (card.scarcity === 'limited' && props.limited === true) {return true}
                        if (card.scarcity === 'rare' && props.rare === true) {return true}
                        if (card.scarcity === 'super-rare' && props.superRare === true) {return true}
                        if (card.scarcity === 'unique' && props.unique === true) {return true}
                        else {return false}
                    }
                )
    
                const sortByScore = defScarcitySelected.sort((cardA, cardB) => cardB.score - cardA.score)
                const displayFirstTen = sortByScore.filter((card) => sortByScore.indexOf(card) < 10)
                
                setCardsToDisplay(displayFirstTen)
            }

        }, [props.limited, props.rare, props.superRare, props.unique, props.cardsList]
    )
    
    return(
        <div className="player-list-item">
            <h4>TOP DEFENDERS</h4>
            <div>
                {
                    cardsToDisplay.map(
                        (card) => (
                            <Card 
                                name={card.name} 
                                scarcity={card.scarcity}
                                position={card.position}
                                score={card.score}
                                id={card.id}
                                xp={card.xp}
                                zone={card.zone}
                                u23={card.u23}
                                nationality={card.nationality}
                                key={card.id} />)
                        )
                }
            </div>
        </div>


    );
}