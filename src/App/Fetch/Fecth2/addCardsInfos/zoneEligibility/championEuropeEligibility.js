// CHAMPION EUROPE
const championEuropeDomesticCompetition = [
    'bundesliga-de',
    'ligue-1-fr',
    'serie-a-it',
    'primera-division-es',
    'premier-league-gb-eng'
]

export function championEuropeEligibility(card) {

    card.championEurope = false

    if (Object.keys(card).includes('domesticCompetition')) {
        if (championEuropeDomesticCompetition.some( (competition) => competition === card.domesticCompetition)) {
            card.championEurope = true
        }
    }
}
