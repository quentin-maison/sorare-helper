import {Card} from '../../../Interfaces'

export function addExpectedScore (cardsArray: Card[]): Card[] {
    
    for (const card of cardsArray) {

        if (!Object.keys(card).includes('averageScore')) {
            card.expectedScore = 0
        } else {
            if (card.power === null || card.averageScore === null) {card.expectedScore = 0}  else {
                card.expectedScore = card.averageScore * parseInt(card.power, 10)
            }  
        }

    }

    return cardsArray;
}