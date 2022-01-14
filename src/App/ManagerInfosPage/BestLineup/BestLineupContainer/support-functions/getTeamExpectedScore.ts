//INTERFACES
import { Card } from '../../../../Interfaces'


export function getTeamExpectedScore (cardsArray: Card[]): number {

    let teamES = 0;
    for (const card of cardsArray) {

        if (card.isCaptain) {
            teamES = teamES + card.expectedScore * 1.2
        } else {
            teamES = teamES + card.expectedScore
        }
    }
    
    return teamES
}