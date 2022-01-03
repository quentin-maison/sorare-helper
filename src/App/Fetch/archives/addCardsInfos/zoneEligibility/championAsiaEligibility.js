//CHAMPION ASIA
const championAsiaDomesticCompetition = [
    'j1-league-jp',
    'csl-cn',
    'k-league-1-kr'
]

export function championAsiaEligibility(card) {

    card.championAsia = false

    if (Object.keys(card).includes('domesticCompetition')) {
        if (championAsiaDomesticCompetition.some( (competition) => competition === card.domesticCompetition)) {
            card.championAsia = true
        }
    }
}
