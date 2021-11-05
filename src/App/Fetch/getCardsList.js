import {generateRandomCard} from './generateRandomCard'

export function getCardsList (managerName) {
    const cardsList = []
    
    for (let i = 0; i < 100; i++) {
        cardsList.push(generateRandomCard())
    }

    return cardsList ;
}