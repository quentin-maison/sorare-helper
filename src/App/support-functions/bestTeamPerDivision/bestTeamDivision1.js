//SUPPORT-FUNCTIONS
import {filterByZone} from '../filterByZone'
import {filterByScarcity} from '../filterByScarcity'
import {getBest5} from '../getBest5'
import {addCaptain} from '../addCaptain'
import {addExpectedScore} from '../addExpectedScore'






export function bestTeamDivision1 (cardsListArray, leagueSelected) {

    const cardsEligible = filterByZone(cardsListArray, leagueSelected)

    if (cardsEligible.length !== 0) {
        const cardsWithES = addExpectedScore(cardsEligible)

        const best5 = getBest5(cardsWithES)
        const best5WithCaptain = addCaptain(best5)
    
        return best5WithCaptain
    } else {
        return ;
    }





}