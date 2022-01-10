//INTERFACES
import {Card} from '../../../../Interfaces'

//CHALLENGER EUROPE
const challengerEuropeDomesticCompetition = [
    'eredivisie-nl',
    'bundesliga-at',
    'premier-league-ru',
    'first-division-a-be',
    'primeira-liga-pt',
    'superliga-dk',
    'super-league-ch',
    'super-lig-tr',
    'premiership-gb-sct'
]

export function challengerEuropeEligibility(card: Card): void {

    card.challengerEurope = false

    if (Object.keys(card).includes('domesticCompetition')) {
        if (challengerEuropeDomesticCompetition.some( (competition) => competition === card.domesticCompetition)) {
            card.challengerEurope = true
        }
    }
}
