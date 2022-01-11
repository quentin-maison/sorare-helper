//ADD CARDS INFOS FUNCTIONS
import { addCardCompetition } from './addCardsInfoFunctions/addCardCompetition'
import { addCardZone } from './addCardsInfoFunctions/addCardZone'
import { addLastScores } from './addCardsInfoFunctions/addLastScores'
import { addDisplayName } from './addCardsInfoFunctions/addDisplayName'
import { addTeamName } from './addCardsInfoFunctions/addTeamName'
import { retrieveNextMatchUp } from './addCardsInfoFunctions/retrieveNextMatchUp'

//INTERFACE
import { Card } from '../../../Interfaces'

export function addCardsInfos (cardsArray: Card[]): Card[] {

    for (const card of cardsArray) {
        addCardCompetition(card)
        addCardZone(card)
        addLastScores(card)
        addDisplayName(card)
        addTeamName(card)
        retrieveNextMatchUp(card)
    }

    return cardsArray
}