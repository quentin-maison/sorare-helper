export function isEligibleNextGW (card, nextGWInfos) {

    const nextGWStartDate = new Date(nextGWInfos.startDate)
    const nextGWEndDate = new Date(nextGWInfos.endDate)



    if (!Object.keys(card).includes('player')) {return false}
    if (!Object.keys(card.player).includes('activeClub')) {return false}


    if (card.player.activeClub === null || card.player.activeClub === undefined) {return false}
    if (!Object.keys(card.player.activeClub).includes('upcomingGames')) {return false}


    if (card.player.activeClub.upcomingGames === null) {return false}
    if (card.player.activeClub.upcomingGames === undefined) {return false}
    if (!Array.isArray(card.player.activeClub.upcomingGames)) {return false}

    const nextCardMatchArray = card.player.activeClub.upcomingGames
    for (let match of nextCardMatchArray) {
        match.date = new Date(match.date)
    }

    nextCardMatchArray.filter(
        (match) => {
            if (match.date >= nextGWStartDate && match.date <= nextGWEndDate) {return true} else {return false}
        }
    )

    if (nextCardMatchArray.length > 0) {return true} else {return false}

}