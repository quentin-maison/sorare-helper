//SUPPORT-FUNCTIONS
import {addUnavailablePlayer} from '../support-functions/unavailablePlayer'

export function getBest5 (cardsList) {

    /*GOAL*/
    const eligibleGoals = cardsList.filter((card) => card.position === 'GOA')
    eligibleGoals.sort((cardA, cardB) => cardB.expectedScore - cardA.expectedScore)

    /*DEF*/
    const eligibleDefenders = cardsList.filter((card) => card.position === 'DEF')
    eligibleDefenders.sort((cardA, cardB) => cardB.expectedScore - cardA.expectedScore)

    /*MID*/
    const eligibleMidfielders = cardsList.filter((card) => card.position === 'MID')
    eligibleMidfielders.sort((cardA, cardB) => cardB.expectedScore - cardA.expectedScore)

    /*FOR*/
    const eligibleForwards = cardsList.filter((card) => card.position === 'FOR')
    eligibleForwards.sort((cardA, cardB) => cardB.expectedScore - cardA.expectedScore)


    /*EXTRA*/
    const extraArray = [eligibleDefenders[1], eligibleMidfielders[1], eligibleForwards[1]]
    extraArray.sort((cardA, cardB) => cardB.expectedScore - cardA.expectedScore)


    /*BEST 5*/
    let best5 = [eligibleGoals[0], eligibleDefenders[0], eligibleMidfielders[0], eligibleForwards[0], extraArray[0]]

    addUnavailablePlayer(best5)

    return best5;
}


