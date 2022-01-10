import {Card} from '../../../Interfaces'
 
export function getBestSo5 (cardsArray: Card[]): Card[] {

    //GOALS
    const eligibleGoals = cardsArray.filter((card) => card.position === 'Goalkeeper')
    eligibleGoals.push(unavailablePlayer(-1))
    eligibleGoals.push(unavailablePlayer(-2))
    eligibleGoals.sort((cardA, cardB) => cardB.expectedScore - cardA.expectedScore)

    //DEFENDERS
    const eligibleDefenders = cardsArray.filter((card) => card.position === 'Defender')
    eligibleDefenders.push(unavailablePlayer(-3))
    eligibleDefenders.push(unavailablePlayer(-4))
    eligibleDefenders.sort((cardA, cardB) => cardB.expectedScore - cardA.expectedScore)

    //MIDFIELDERS
    const eligibleMidfielders = cardsArray.filter((card) => card.position === 'Midfielder')
    eligibleMidfielders.push(unavailablePlayer(-5))
    eligibleMidfielders.push(unavailablePlayer(-6))
    eligibleMidfielders.sort((cardA, cardB) => cardB.expectedScore - cardA.expectedScore)

    //DEFENDERS
    const eligibleForwards = cardsArray.filter((card) => card.position === 'Forward')
    eligibleForwards.push(unavailablePlayer(-7))
    eligibleForwards.push(unavailablePlayer(-8))
    eligibleForwards.sort((cardA, cardB) => cardB.expectedScore - cardA.expectedScore)

    //EXTRA
    const extraArray = [eligibleDefenders[1], eligibleMidfielders[1], eligibleForwards[1]]
    extraArray.sort((cardA, cardB) => cardB.expectedScore - cardA.expectedScore)

    //OUTPUT
    const best5 = [eligibleGoals[0], eligibleDefenders[0], eligibleMidfielders[0], eligibleForwards[0], extraArray[0]];

    return best5
}


export function unavailablePlayer (id: number): Card {
    return {
        age: null,
        averageScore: 0,
        expectedScore: 0,
        name: 'No Player Available',
        displayName: 'No Player Available',
        domesticCompetition: null,
        pictureUrl: null,
        position: null,
        power: null,
        rarity: null,
    
        u23Eligible: false,
        challengerEurope: false,
        championAmerica: false,
        championAsia: false,
        championEurope: false,
    
        currentTeam: null,
    
        lastScores: null,

        isCaptain: null,
    
        nextOpponent: null,
        player: null,

        id: id
    }
}