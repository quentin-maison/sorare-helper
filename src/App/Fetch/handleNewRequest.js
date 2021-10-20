import {generateRandomCard} from './generateRandomCard'

export function getCardsList (newRequest) {
    const cardsList = []
    
    for (let i = 0; i < 30; i++) {
        cardsList.push(generateRandomCard())
    }

    return cardsList ;
}

export function getNextGWInfos () {
    const nextGW = {
        number: 210,
        startingDate: '20-oct-21'
    }

    return nextGW;

}