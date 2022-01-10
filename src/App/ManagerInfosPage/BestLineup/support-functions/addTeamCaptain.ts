import {Card} from '../../../Interfaces'

export function addTeamCaptain (cardsArray: Card[]): Card[] {

    
    if (cardsArray.length !== 5) {
        return cardsArray
    }

    let numberES = 0;
    for (const card of cardsArray) {
        if (Object.keys(card).includes('averageScore')) {numberES++}
    }

    if (numberES !== 5) {
        return cardsArray
    }

    let maxScore = 0;
    for (const card of cardsArray) {

        if (card.averageScore !== null && card.averageScore > maxScore) {
            maxScore = card.averageScore
        }
    }


    let captainIndex = -1;
    for (const card of cardsArray) {
        if (card.averageScore === maxScore) {
            captainIndex = cardsArray.indexOf(card)
        }
    }

    for (const card of cardsArray) {
        if (cardsArray.indexOf(card) === captainIndex) {
            card.isCaptain = true
        } else {
            card.isCaptain = false
        }
    }  
    
    return cardsArray
}