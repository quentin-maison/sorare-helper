
import {leagueRules, divisionRules} from '../support-functions/gameRules/gameRules'






const filterByLeague = (cardsList, leagueSelected) => {

    if (leagueSelected === 'global-all-star') {
        return cardsList.filter(
            (card) => card.zone == leagueRules.championEurope.authorizedZones
        )
    }

    if (leagueSelected === 'champion-europe') {
        return cardsList.filter(
            (card) => card.zone == leagueRules.championEurope.authorizedZones
        )
    }

    if (leagueSelected === 'challenger-europe') {
        return cardsList.filter(
            (card) => card.zone == leagueRules.championEurope.authorizedZones
        )
    }

    if (leagueSelected === 'champion-america') {
        return cardsList.filter(
            (card) => leagueRules.championAmerica.authorizedZones.includes(card.zone)
        )
    }

    if (leagueSelected === 'champion-asia') {
        return cardsList.filter(
            (card) => leagueRules.championAsia.authorizedZones.some((zone) => zone == card.zone)

        )
    }

}


const filterByDivision = (cardsList, divisionSelected) => {

    if (divisionSelected === 'd5') {
        return cardsList.filter(
            (card) => divisionRules.division5.authorizedScarcity.some((scarcity) => scarcity === card.scarcity)
        )
    }

    if (divisionSelected === 'd4') {
        return cardsList.filter(
            (card) => divisionRules.division4.authorizedScarcity.some((scarcity) => scarcity === card.scarcity)
        )
    }

    if (divisionSelected === 'd3') {
        return cardsList.filter(
            (card) => divisionRules.division3.authorizedScarcity.some((scarcity) => scarcity === card.scarcity)
        )
    }

    if (divisionSelected === 'd2') {
        return cardsList.filter(
            (card) => divisionRules.division2.authorizedScarcity.some((scarcity) => scarcity === card.scarcity)
        )
    }

    if (divisionSelected === 'd1') {
        return cardsList.filter(
            (card) => divisionRules.division1.authorizedScarcity.some((scarcity) => scarcity === card.scarcity)
        )
    }
}



export function filterCardsEligible (cardsList, divisionSelected, leagueSelected) {

    const arrayDivision = filterByDivision(cardsList, divisionSelected);
    const arrayLeague = filterByLeague(cardsList, leagueSelected);

    const output = arrayDivision.filter( (card) => arrayLeague.includes(card));

    return output ;
}