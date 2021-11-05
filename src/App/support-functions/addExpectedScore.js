import {bonusPerScarcity} from './gameRules/cardAttributes'

export function addExpectedScore (cardsList) {


    if (cardsList.length < 1) {
        return console.log('Input doesnt have any card')
    }
    else {
        for (let card of cardsList) {
            if (card.scarcity === 'limited') {card.expectedScore = card.score * (1 + (0.01 * card.xp)) * bonusPerScarcity.limited}
            if (card.scarcity === 'rare') {card.expectedScore = card.score * (1 + (0.01 * card.xp)) * bonusPerScarcity.rare}
            if (card.scarcity === 'super-rare') {card.expectedScore = card.score * (1 + (0.01 * card.xp)) * bonusPerScarcity.superRare}        
            if (card.scarcity === 'unique') {card.expectedScore = card.score * (1 + (0.01 * card.xp)) * bonusPerScarcity.unique}
        } return cardsList ; 
    }
}