

export function getTeamExpectedScore (cardsList) {

    if (cardsList.length === 5) {
        let sum = 0;
        for (let card of cardsList) {
            sum = sum + card.expectedScore
        } return Math.floor(sum) ;
    } else {
        return 'Error in team expected score calculation'
    }

}