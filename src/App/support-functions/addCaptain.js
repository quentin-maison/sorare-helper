import {bonusPerScarcity} from './gameRules/cardAttributes'


export function addCaptain(cardsList) {

    let numberScore = 0;

        for (let card of cardsList) {
            if (card.hasOwnProperty('score')) {
                numberScore++
            }
        }

    
    if (numberScore !== 5) {
        return 'Wrong input format'
    } else {

        let maxScore = 0;
        for (let card of cardsList) {
            if (card.score > maxScore) {
                maxScore = card.score
            } 
        }

        let captainIndex = 0 ;
        for (let card of cardsList) {
            if (card.score === maxScore) {
                captainIndex = cardsList.indexOf(card)
            }
        }

        for (let card of cardsList) {
            if (cardsList.indexOf(card) === captainIndex) {
                card.isCaptain = true;

                if (card.scarcity === 'limited') {card.expectedScore = card.score * (1 + (0.01 * card.xp)) * bonusPerScarcity.limited * 1.2}
                if (card.scarcity === 'rare') {card.expectedScore = card.score * (1 + (0.01 * card.xp)) * bonusPerScarcity.rare * 1.2}
                if (card.scarcity === 'super-rare') {card.expectedScore = card.score * (1 + (0.01 * card.xp)) * bonusPerScarcity.superRare * 1.2}        
                if (card.scarcity === 'unique') {card.expectedScore = card.score * (1 + (0.01 * card.xp)) * bonusPerScarcity.unique * 1.2} 

            } else {
                card.isCaptain = false;
            }
        }

        return cardsList;
    }
}