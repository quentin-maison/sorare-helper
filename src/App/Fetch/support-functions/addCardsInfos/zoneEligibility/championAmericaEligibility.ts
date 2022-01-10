//INTERFACES
import {Card} from '../../../../Interfaces'

//CHAMPION AMERICA
const championAmericaDomesticCompetition = [
    'mls-us',
    'superliga-ar',
    'liga-mx-mx',
    'primera-division-pe',
    'serie-a-br'
]

export function championAmericaEligibility(card: Card): void {

    card.championAmerica = false

    if (Object.keys(card).includes('domesticCompetition')) {
        if (championAmericaDomesticCompetition.some( (competition) => competition === card.domesticCompetition)) {
            card.championAmerica = true
        }
    }
}