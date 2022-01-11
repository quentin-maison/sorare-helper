//INTERFACE
import { Card } from '../../../../Interfaces'


export function addDisplayName (card: Card): void {
    
    if (!Object.keys(card).includes('player')) {return }
    if (card.player === null) {return }
    if (!Object.keys(card.player).includes('displayName')) {return }
    
    card.displayName = card.player.displayName
    
    return 
}