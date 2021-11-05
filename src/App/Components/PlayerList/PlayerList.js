import React, {useState, useEffect} from 'react'

//COMPONENTS
import {PlayerListCard} from './PlayerListCard'

//CSS
import './PlayerList.css'
 
export function PlayerList (props) {

    const [cardsToDisplay, setCardsToDisplay] = useState([])
    useEffect(
        () => {
            if (props.cards) {
                const cardsScarcitySelected = props.cards.filter(
                    (card) => {
                        if (card.scarcity === 'limited' && props.limited === true) {return true}
                        if (card.scarcity === 'rare' && props.rare === true) {return true}
                        if (card.scarcity === 'super-rare' && props.superRare === true) {return true}
                        if (card.scarcity === 'unique' && props.unique === true) {return true}
                        else {return false}
                    }
                )
    
                const sortByScore = cardsScarcitySelected.sort((cardA, cardB) => cardB.score - cardA.score)
                const displayFirstTen = sortByScore.filter((card) => sortByScore.indexOf(card) < 10)
                
                setCardsToDisplay(displayFirstTen)
            }

        }, [props.limited, props.rare, props.superRare, props.unique, props.cards]
    )
    

    if (cardsToDisplay.length > 0) {
        return (
            <div className='player-list-container'>
                <h4>TOP 10 {props.position}</h4>
                <div>
                    {
                        cardsToDisplay.map(
                            (card) => (
                                <PlayerListCard 
                                    name={card.name} 
                                    scarcity={card.scarcity}
                                    position={card.position}
                                    score={card.score}
                                    id={card.id}
                                    xp={card.xp}
                                    zone={card.zone}
                                    u23={card.u23}
                                    nationality={card.nationality}
                                    key={card.id}/>)
                            )
                    }
                </div>
            </div>
        );
    } else {
        return <div></div>
    }

}