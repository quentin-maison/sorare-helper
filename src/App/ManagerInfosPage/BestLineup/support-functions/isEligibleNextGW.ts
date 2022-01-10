import {Card, GWInfos} from '../../../Interfaces'

export function isEligibleNextGW (card: Card, nextGWInfos: GWInfos):boolean  {


    const nextGWStartDate = new Date(nextGWInfos.startDate)
    const nextGWEndDate = new Date(nextGWInfos.endDate)


    if (!Object.keys(card).includes('player')) {return false}
    if (card.player === null) {return false}
    if (!Object.keys(card.player).includes('activeClub')) {return false}


    if (card.player.activeClub === null || card.player.activeClub === undefined) {return false}
    if (!Object.keys(card.player.activeClub).includes('upcomingGames')) {return false}


    if (card.player.activeClub.upcomingGames === null) {return false}
    if (card.player.activeClub.upcomingGames === undefined) {return false}
    if (!Array.isArray(card.player.activeClub.upcomingGames)) {return false}

    const nextCardMatchArray = card.player.activeClub.upcomingGames
    for (const match of nextCardMatchArray) {
        if (match.date !== null) {match.date = new Date(match.date)}
    }


    const eligibleNextGW = nextCardMatchArray.filter(
        (match) => {
            if (match.date === null) {return false}
            if (match.date >= nextGWStartDate && match.date <= nextGWEndDate) {return true} else {return false}
        }
    )


    if (eligibleNextGW.length > 0) {return true} else {return false}

    return false

}