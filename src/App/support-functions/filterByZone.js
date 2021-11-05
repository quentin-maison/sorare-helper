
export function filterByZone (cardsList, zone) {

    if (zone === 'global-all-star') {
        return cardsList
    }

    if (zone === 'champion-europe') {
        return cardsList.filter(
            (card) => card.zone === 'champion-europe'
        );
    }

    if (zone === 'challenger-europe') {
        return cardsList.filter(
            (card) => card.zone === 'challenger-europe'
        );
    }

    if (zone === 'champion-america') {
        return cardsList.filter(
            (card) => card.zone === 'champion-america'
        );
    }

    if (zone === 'champion-asia') {
        return cardsList.filter(
            (card) => card.zone === 'champion-asia'
        );
    }

}