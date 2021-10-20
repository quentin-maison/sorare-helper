import React, {useEffect, useState} from 'react';
import './BestLineUp.css'

import {getEligibleCards} from './support-functions/getEligibleCards'
import {addExpectedScore} from './support-functions/addExpectedScore'
import {getTotalExpectedScore} from './support-functions/getTotalExpectedScore'

import {bestLineUpDiv1} from './BestLineUpPerDivision/bestLineUpDiv1'
import {bestLineUpDiv2} from './BestLineUpPerDivision/bestLineUpDiv2'
import {bestLineUpDiv3} from './BestLineUpPerDivision/bestLineUpDiv3'
import {bestLineUpDiv4} from './BestLineUpPerDivision/bestLineUpDiv4'
import {bestLineUpDiv5} from './BestLineUpPerDivision/bestLineUpDiv5'



import {BestCard} from './BestCard/BestCard'

export function BestLineUp (props) {
    const [cardsToDisplay, setCardsToDisplay] = useState([])
    const [totalExpectedScore, setTotalExpectedScore] = useState(0)



    
    
    

    useEffect(
        () => {
            let eligibleCards = getEligibleCards(props.cardsList, props.divisionSelected, props.leagueSelected)
            const cardsWithExpectedScore = addExpectedScore(eligibleCards)

            if (props.divisionSelected === 'd5') {
                setCardsToDisplay(bestLineUpDiv5(cardsWithExpectedScore))
            }

            if (props.divisionSelected === 'd3') {
                setCardsToDisplay(bestLineUpDiv3(cardsWithExpectedScore))
            }




            

        }, [props.cardsList, props.divisionSelected, props.leagueSelected]
    )


    useEffect(
        () => {
            setTotalExpectedScore(getTotalExpectedScore(cardsToDisplay).toFixed(2))
        }, [cardsToDisplay]
    )



    return (

        <div>
            <div>
                EXPECTED SCORE = {totalExpectedScore}
            </div>
            <div className="best-line-up-container">
                {
                    cardsToDisplay.map(
                        (card) => <BestCard card={card} id={cardsToDisplay.indexOf(card)}/>
                    )
                }

            </div>
        </div>


    );
}