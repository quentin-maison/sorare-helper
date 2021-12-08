export function addTeamCaptain (cardsArray) {

    
    if (cardsArray.length !== 5) {
        return cardsArray
    }

    let numberES = 0;
    for (let card of cardsArray) {
        if (Object.keys(card).includes('averageScore')) {numberES++}
    }

    if (numberES !== 5) {
        return cardsArray
    }

    let maxScore = 0;
    for (let card of cardsArray) {
        if (card.averageScore > maxScore) {maxScore = card.averageScore}
    }


    let captainIndex ;
    for (let card of cardsArray) {
        if (card.averageScore === maxScore) {
            captainIndex = cardsArray.indexOf(card)
        }
    }

    for (let card of cardsArray) {
        if (cardsArray.indexOf(card) === captainIndex) {
            card.isCaptain = true
        } else {
            card.isCaptain = false
        }
    }  
    
    return cardsArray
}