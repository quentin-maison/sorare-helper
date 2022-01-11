//INTERFACE
import { Card } from '../../../../Interfaces'


export function addTeamName (card: Card): void {

    if (!Object.keys(card).includes('player')) {return }
    if (card.player === null) {return }
    if (!Object.keys(card.player).includes('activeClub')) {return }
    if (card.player.activeClub === null || card.player.activeClub === undefined) {return }
    card.currentTeam = {
        name: card.player.activeClub.name,
        slug: card.player.activeClub.slug,
        pictureUrl: card.player.activeClub.pictureUrl
    }
        
    return 
}