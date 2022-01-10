export function getNextGWSlug (): string {

    const currentDate = new Date(Date.now())
    let currentDay = currentDate.getDay()
    const currentHour = currentDate.getHours()

    if (currentHour >= 12) {
        currentDay = currentDay + 0.5
    }

    let nextGWStart!: Date ;
    let nextGWEnd!: Date ;

    function thisMondayDate (numberOfDayToAdd: number):number {
        const today = new Date(Date.now());

        //DIMANCHE OU LUNDI
        if (today.getDay() === 0) {return  today.setDate(today.getDate() + 1 + numberOfDayToAdd)}
        if (today.getDay() === 1) {return  today.setDate(today.getDate() + 0 + numberOfDayToAdd)}

        //A PARTIR DE MARDI
        if (today.getDay() === 2) {return  today.setDate(today.getDate() - 1 + numberOfDayToAdd)}
        if (today.getDay() === 3) {return  today.setDate(today.getDate() - 2 + numberOfDayToAdd)}
        if (today.getDay() === 4) {return  today.setDate(today.getDate() - 3 + numberOfDayToAdd)}
        if (today.getDay() === 5) {return  today.setDate(today.getDate() - 4 + numberOfDayToAdd)}
        if (today.getDay() === 6) {return  today.setDate(today.getDate() - 5 + numberOfDayToAdd)}
        return today.setDate(today.getDate() + 1 + numberOfDayToAdd)
    }


    if (currentDay < 2.5) {
        //NEXT GW START = next Tuesday
        //NEXT GW END = next Friday
        nextGWStart = new Date(thisMondayDate(1));
        nextGWEnd = new Date(thisMondayDate(4));
    }

    if (currentDay >= 2.5 && currentDay < 5.5) {
        //NEWT GW START = next Friday
        //NEXT GW END = Tuesday next week
        nextGWStart = new Date(thisMondayDate(4));
        nextGWEnd = new Date(thisMondayDate(8));

    }

    if (currentDay >= 5.5) {
        //NEWT GW START = Tuesday next week
        //NEXT GW END = Friday next week
        nextGWStart = new Date(thisMondayDate(8));
        nextGWEnd = new Date(thisMondayDate(11));

    }


    


    const dateNextGWStart = nextGWStart.getDate()
    const monthNextGWStart = monthNames[nextGWStart.getMonth()]
    const dateNextGWEnd = nextGWEnd.getDate()
    const monthNextGWEnd = monthNames[nextGWEnd.getMonth()]

    let nextGWSlug: string ;

    if (monthNextGWStart === monthNextGWEnd) {
        nextGWSlug = `${dateNextGWStart}-${dateNextGWEnd}-${monthNextGWStart}`
    } else {
        nextGWSlug = `${dateNextGWStart}-${monthNextGWStart}-${dateNextGWEnd}-${monthNextGWEnd}`
    }

    return nextGWSlug
}


const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep' ,'oct', 'nov', 'dec']