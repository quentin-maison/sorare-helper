let i = -1;
const getUnavailableId = () => {
    i--;
    return i;
}


const unavailablePlayer = {
    name: 'No Player available',
    scarcity: 'No Player available',
    position: 'No Player available',
    score: 0,
    xp: 0,
    zone: 'No Player available',
    u23: false,
    nationality: 'No Player available',
    expectedScore: 0,
    isCaptain: false,
    id: getUnavailableId()
}

export function addUnavailablePlayer(cardsList) {
    for (let card of cardsList) {
        if (typeof card === 'undefined') {
            cardsList.splice(cardsList.indexOf(card), 1, unavailablePlayer)
        }
    }
}

export const unavailablePlayerArray = [unavailablePlayer, unavailablePlayer, unavailablePlayer, unavailablePlayer, unavailablePlayer]