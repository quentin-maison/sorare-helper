//INTERFACES
import {Card} from '../../../../../Interfaces'

// CHAMPION EUROPE
const championEuropeDomesticCompetition = [
    'bundesliga-de',
    'ligue-1-fr',
    'serie-a-it',
    'primera-division-es',
    'premier-league-gb-eng'
]

export function championEuropeEligibility(card: Card): void {

    card.championEurope = false

    if (card === null || card === undefined) {
        return
    }

    if (!Object.keys(card).includes('domesticCompetition') || card.domesticCompetition === undefined || card.domesticCompetition === null) {
        return
    }

    if (championEuropeDomesticCompetition.some( 
        (competition) => competition === card.domesticCompetition)) {
        card.championEurope = true
        return
    }

    return
}
