export function getNextGWSlug () {

    let currentDate = new Date(Date.now())
    let currentDay = currentDate.getDay()
    let currentHour = currentDate.getHours()

    if (currentHour >= 12) {
        currentDay = currentDay + 0.5
    }

    let nextGWStart ;
    let nextGWEnd ;

    if (currentDay < 2.5) {
        //NEXT GW START = next Tuesday
        //NEXT GW END = next Friday
        nextGWStart = new Date(currentDate.setDate(2 + currentDate.getDate() - currentDate.getDay()));
        nextGWEnd = new Date(currentDate.setDate(5 + currentDate.getDate() - currentDate.getDay()));
    }

    if (currentDay >= 2.5 && currentDay < 5.5) {
        //NEWT GW START = next Friday
        //NEXT GW END = Tuesday next week
        nextGWStart = new Date(currentDate.setDate(5 + currentDate.getDate() - currentDate.getDay()));
        nextGWEnd = new Date(currentDate.setDate(9 + currentDate.getDate() - currentDate.getDay()));

    }

    if (currentDay >= 5.5) {
        //NEWT GW START = Tuesday next week
        //NEXT GW END = Friday next week
        nextGWStart = new Date(currentDate.setDate(9 + currentDate.getDate() - currentDate.getDay()));
        nextGWEnd = new Date(currentDate.setDate(12 + currentDate.getDate() - currentDate.getDay()));
    }

    let dateNextGWStart = nextGWStart.getDate()
    let monthNextGWStart = monthNames[nextGWStart.getMonth()]
    let dateNextGWEnd = nextGWEnd.getDate()
    let monthNextGWEnd = monthNames[nextGWEnd.getMonth()]

    let nextGWSlug ;

    if (monthNextGWStart === monthNextGWEnd) {
        nextGWSlug = `${dateNextGWStart}-${dateNextGWEnd}-${monthNextGWStart}`
    } else {
        nextGWSlug = `${dateNextGWStart}-${monthNextGWStart}-${dateNextGWEnd}-${monthNextGWEnd}`
    }

    return nextGWSlug
}


const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep' ,'oct', 'nov', 'dec']