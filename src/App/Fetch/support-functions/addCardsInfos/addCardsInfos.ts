//ZONE ELIGIBILITY
import {championEuropeEligibility} from './zoneEligibility/championEuropeEligibility'
import {challengerEuropeEligibility} from './zoneEligibility/challengerEuropeEligibility'
import {championAsiaEligibility} from './zoneEligibility/championAsiaEligibility'
import {championAmericaEligibility} from './zoneEligibility/championAmericaEligibility'

//INTERFACE
import { Card, GameStat } from '../../../Interfaces'

export function addCardsInfos (cardsArray: Card[]): Card[] {

    const cardArrayWithCompetition = addCardCompetition(cardsArray)
    const cardsArrayWithZoneEligibility = addCardZone(cardArrayWithCompetition)
    const cardsArrayWithLastScores = addLastScores(cardsArrayWithZoneEligibility)

    for (const card of cardsArrayWithLastScores) {
        addDisplayName(card)
        addTeamName(card)
        retrieveNextMatchUp(card)
    }


    return cardsArrayWithLastScores
}

function addCardCompetition(cardsArray: Card[]) {

    for (const card of cardsArray) {

        card.domesticCompetition = 'no competition'

        if (card !== undefined && card !== null) {
            if (Object.keys(card).includes('player') && card.player !== undefined && card.player !== null) {
                if (Object.keys(card.player).includes('activeClub') && card.player.activeClub !== undefined && card.player.activeClub !== null) {
                    if (Object.keys(card.player.activeClub).includes('domesticLeague') && card.player.activeClub.domesticLeague !== undefined && card.player.activeClub.domesticLeague !== null) {
                        if (Object.keys(card.player.activeClub.domesticLeague).includes('slug') && card.player.activeClub.domesticLeague.slug !== undefined && card.player.activeClub.domesticLeague.slug !== null) {
                            card.domesticCompetition = card.player.activeClub.domesticLeague.slug
                        }  
                    }
                }
            }
        }
                
    }

    return cardsArray
}

function addCardZone(cardsArray: Card[]) {

    for (const card of cardsArray) {

        if (!Object.keys(card).includes('domesticCompetition')) {
            console.log('Mission domesticCompetition key')
        } else {
            championEuropeEligibility(card)
            challengerEuropeEligibility(card)
            championAsiaEligibility(card)
            championAmericaEligibility(card)
        }
    }

    return cardsArray
}

function addLastScores(cardsArray: Card[]): Card[] {

    for (const card of cardsArray) {

        if (checkGameStatsPresence(card)) {
            card.lastScores = []
            if (card.player !== null) {

            
            for (const gameStats of card.player.gameStats) {
                if (checkGameStatsFormat(gameStats)) {
                    //ON PUSH LE BON CODE
                    if (gameStats.so5Score !== null && gameStats.game !== null && gameStats.game.so5Fixture !== null) {
                        card.lastScores.push({score: gameStats.so5Score.score, gameWeek: gameStats.game.so5Fixture.gameWeek})
                    }
    
                } else {
                    //ON PUSH RIEN
                    card.lastScores.push({score: null, gameWeek: null})
                }
            }
        }
    
        }

        addAverageScore(card)
    }
    return cardsArray
}

function checkGameStatsPresence (card: Card) {
    if (!Object.keys(card).includes('player')) {return false}
    if (card.player === null) {return false}
    if (!Object.keys(card.player).includes('gameStats')) {return false}
    if (card.player.gameStats === null) {return false}
    if (!Object.keys(Array.isArray(card.player.gameStats))) {return false}

    return true
}


function checkGameStatsFormat (gameStats: GameStat) {

    //CHECK SCORE
    if (!Object.keys(gameStats).includes('so5Score')) {return false}
    if (gameStats.so5Score === null || gameStats.so5Score === undefined) {return false}
    if (!Object.keys(gameStats.so5Score).includes('score')) {return false}


    //CHECK GAMEWEEK NUMBER
    if (!Object.keys(gameStats).includes('game')) {return false}
    if (gameStats.game === null) {return false}
    if (!Object.keys(gameStats.game).includes('so5Fixture')) {return false}
    if (gameStats.game.so5Fixture === null || gameStats.game.so5Fixture === undefined) {return false}
    if (!Object.keys(gameStats.game.so5Fixture).includes('gameWeek')) {return false}
    if (gameStats.game.so5Fixture.gameWeek === null || gameStats.game.so5Fixture.gameWeek === undefined) {return false}

    return true
}

function addAverageScore (card: Card) {

    if (!Object.keys(card).includes('lastScores')) {return card}

    let gameScoreTotal = 0;
    let gameCount = 0;


    if (card.lastScores !== null) {
        for (const score of card.lastScores) {

            if (score.score !== 0 && score.score !== null) {
                gameScoreTotal = gameScoreTotal + score.score
                gameCount++ 
            }
        }
    }

    if (gameCount === 0) {
        card.averageScore = 0
    } else {
        card.averageScore = gameScoreTotal/gameCount
    }

    return card

}


function retrieveNextMatchUp (card: Card) {

    if (card.player === null) {return card}
    if (!Object.keys(card.player).includes('activeClub')) {return card}
    if (card.player.activeClub === null || card.player.activeClub === undefined) {return card}

    if (!Object.keys(card.player.activeClub).includes('upcomingGames')) {return card}
    if (card.player.activeClub.upcomingGames === null || card.player.activeClub.upcomingGames === undefined) {return card}
    if (card.player.activeClub.upcomingGames.length === 0) {return card}

    if (!Object.keys(card.player.activeClub.upcomingGames[0]).includes('homeTeam')) {return card}
    if (card.player.activeClub.upcomingGames[0].homeTeam === null) {return card}
    if (!Object.keys(card.player.activeClub.upcomingGames[0]).includes('awayTeam')) {return card}
    if (card.player.activeClub.upcomingGames[0].awayTeam === null) {return card}

    if (card.currentTeam === null) {return card}
    if (!Object.keys(card.currentTeam).includes('name')) {return card}
    if (card.currentTeam.name === null) {return card}

    
    if (card.player.activeClub.upcomingGames[0].homeTeam.name === card.currentTeam.name) {
        card.nextOpponent = {
            name: card.player.activeClub.upcomingGames[0].awayTeam.name,
            date: card.player.activeClub.upcomingGames[0].date,
            pictureUrl: card.player.activeClub.upcomingGames[0].awayTeam.pictureUrl
        }
    }

    
    
    if (card.player.activeClub.upcomingGames[0].awayTeam.name === card.currentTeam.name) {
            card.nextOpponent = {
                name: card.player.activeClub.upcomingGames[0].homeTeam.name,
                date: card.player.activeClub.upcomingGames[0].date,
                pictureUrl: card.player.activeClub.upcomingGames[0].homeTeam.pictureUrl
            }
    }
    
    return card
}

function addDisplayName (card: Card) {
    if (!Object.keys(card).includes('player')) {return card}
    if (card.player === null) {return card}
    if (!Object.keys(card.player).includes('displayName')) {return card}
    card.displayName = card.player.displayName
    return card
}

function addTeamName (card: Card) {
    if (!Object.keys(card).includes('player')) {return card}
    if (card.player === null) {return card}
    if (!Object.keys(card.player).includes('activeClub')) {return card}
    if (card.player.activeClub === null || card.player.activeClub === undefined) {return card}
    card.currentTeam = {
        name: card.player.activeClub.name,
        slug: card.player.activeClub.slug,
        pictureUrl: card.player.activeClub.pictureUrl
    }
    
    return card
}

