//ZONE ELIGIBILITY
import {championEuropeEligibility} from './zoneEligibility/championEuropeEligibility'
import {challengerEuropeEligibility} from './zoneEligibility/challengerEuropeEligibility'
import {championAsiaEligibility} from './zoneEligibility/championAsiaEligibility'
import {championAmericaEligibility} from './zoneEligibility/championAmericaEligibility'

//INTERFACE
import { Card } from '../../../../Interfaces'


export function addCardZone (card: Card): Card {

    if (card === null || card === undefined) {
        return card
    }

    if (!Object.keys(card).includes('domesticCompetition') || card.domesticCompetition === undefined || card.domesticCompetition === null) {
        card.domesticCompetition = 'no competition'
        return card
    }

    championEuropeEligibility(card)
    challengerEuropeEligibility(card)
    championAsiaEligibility(card)
    championAmericaEligibility(card)

    return card
}