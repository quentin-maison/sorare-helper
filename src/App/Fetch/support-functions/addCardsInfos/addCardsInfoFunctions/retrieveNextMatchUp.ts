//INTERFACE
import { Card } from '../../../../Interfaces'


export function retrieveNextMatchUp (card: Card): void {

    if (card.player === null) {return }
    if (!Object.keys(card.player).includes('activeClub')) {return }
    if (card.player.activeClub === null || card.player.activeClub === undefined) {return }

    if (!Object.keys(card.player.activeClub).includes('upcomingGames')) {return }
    if (card.player.activeClub.upcomingGames === null || card.player.activeClub.upcomingGames === undefined) {return }
    if (card.player.activeClub.upcomingGames.length === 0) {return }

    if (!Object.keys(card.player.activeClub.upcomingGames[0]).includes('homeTeam')) {return }
    if (card.player.activeClub.upcomingGames[0].homeTeam === null) {return }
    if (!Object.keys(card.player.activeClub.upcomingGames[0]).includes('awayTeam')) {return }
    if (card.player.activeClub.upcomingGames[0].awayTeam === null) {return }

    if (card.currentTeam === null) {return }
    if (!Object.keys(card.currentTeam).includes('name')) {return }
    if (card.currentTeam.name === null) {return }

    
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
    
    return 
}