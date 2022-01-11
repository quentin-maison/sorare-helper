//INTERFACE
import { Card, GameStat } from '../../../../Interfaces'


export function addLastScores (card: Card): void {

    if (card === null) {return }
    if (card.player === null) {return }

    //ADDING LAST SCORES
    if (checkGameStatsPresence(card)) {
        card.lastScores = []
        for (const gameStats of card.player.gameStats) {
            if (checkGameStatsFormat(gameStats)) {
                if (gameStats.so5Score !== null && 
                    gameStats.game !== null && 
                    gameStats.game.so5Fixture !== null) {
                    card.lastScores.push(
                        {score: gameStats.so5Score.score, gameWeek: gameStats.game.so5Fixture.gameWeek})
                }

            } else {
                card.lastScores.push({score: null, gameWeek: null})
            }
        }
    }

    //ADDING AVERAGE SCORE
    addAverageScore(card)

    return
}

function checkGameStatsPresence (card: Card) {
    if (card === null) {return false}
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

function addAverageScore (card: Card): void {

    if (!Object.keys(card).includes('lastScores')) {return }

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

    return

}
