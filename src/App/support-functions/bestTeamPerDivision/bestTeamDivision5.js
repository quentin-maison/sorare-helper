//SUPPORT-FUNCTIONS
import {filterByZone} from '../filterByZone'
import {filterByScarcity} from '../filterByScarcity'
import {getBest5} from '../getBest5'
import {addCaptain} from '../addCaptain'
import {addExpectedScore} from '../addExpectedScore'






export function bestTeamDivision5 (cardsListArray, leagueSelected) {

    const cardsZoneEligible = filterByZone(cardsListArray, leagueSelected)
    const cardsScarcityEligible = filterByScarcity(cardsListArray, 'limited')
    const cardsEligible = cardsZoneEligible.filter( (card) => cardsScarcityEligible.includes(card));

    if (cardsEligible.length !== 0) {
        const cardsWithES = addExpectedScore(cardsEligible)

        const best5 = getBest5(cardsWithES)
        const best5WithCaptain = addCaptain(best5)
    
        return best5WithCaptain
    } else {
        return ;
    }





}