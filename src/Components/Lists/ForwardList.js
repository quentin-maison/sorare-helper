import React, {useEffect, useState} from 'react';
import {Card} from '../Card/Card'
import './Lists.css'

export function ForwardList(props) {

    const limited = props.limited;
    const rare = props.rare;
    const superRare = props.superRare;
    const unique = props.unique;
    const cardsList = props.cardsList;

    const [cardsToDisplay, setCardsToDisplay] = useState([])
    
    useEffect(
        () => {

            const forwardCards = cardsList.filter((card) => card.position === 'FOR');
            const scarcitySelected = forwardCards.filter(
                (card) => {
                    if (card.scarcity === 'limited' && limited === true) {return true}
                    if (card.scarcity === 'rare' && rare === true) {return true}
                    if (card.scarcity === 'super-rare' && superRare === true) {return true}
                    if (card.scarcity === 'unique' && unique === true) {return true}
                    else {return false}
                }
            )

            const sortByScore = scarcitySelected.sort((cardA, cardB) => cardB.score - cardA.score)
            const displayFirstTen = sortByScore.filter((card) => sortByScore.indexOf(card) < 10)
            
            setCardsToDisplay(displayFirstTen)

        }, [limited, rare, superRare, unique, cardsList]
    )
    
    return(
        <div id="forward-list" className="list-template">
            <h3>FORWARD LIST</h3>
            <p>Only top 10 cards</p>
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
                                key={card.id} />)
                        )
                }

        </div>


    );
}