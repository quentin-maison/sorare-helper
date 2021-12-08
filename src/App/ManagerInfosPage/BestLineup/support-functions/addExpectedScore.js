
export function addExpectedScore (cardsArray) {
    
    for (let card of cardsArray) {

        if (!Object.keys(card).includes('averageScore')) {
            card.expectedScore = 0
        } else {    
            card.expectedScore = card.averageScore * (1*card.power)
        }

    }

    return cardsArray;
}