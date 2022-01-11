//INTERFACE
import { Card } from '../../../../Interfaces'


export function addCardCompetition (card: Card): void {

    card.domesticCompetition = 'no competition'


    if (!Object.keys(card).includes('player') || card.player === undefined || card.player === null) {
        card.domesticCompetition = 'no competition'
        return
    }

    if (!Object.keys(card.player).includes('activeClub') || card.player.activeClub === undefined || card.player.activeClub === null) {
        card.domesticCompetition = 'no competition'
        return
    }

    if (!Object.keys(card.player.activeClub).includes('domesticLeague') || card.player.activeClub.domesticLeague === undefined || card.player.activeClub.domesticLeague === null) {
        card.domesticCompetition = 'no competition'
        return
    }

    if (!Object.keys(card.player.activeClub.domesticLeague).includes('slug') || card.player.activeClub.domesticLeague.slug === undefined || card.player.activeClub.domesticLeague.slug === null) {
        card.domesticCompetition = 'no competition'
        return
    }

    card.domesticCompetition = card.player.activeClub.domesticLeague.slug
    return
}