
export function filterByScarcity (cardsList, scarcity) {

    if (scarcity === 'limited') {
        return cardsList.filter(
            (card) => card.scarcity === 'limited'
        );
    }

    if (scarcity === 'rare') {
        return cardsList.filter(
            (card) => card.scarcity === 'rare'
        );
    }

    if (scarcity === 'super-rare') {
        return cardsList.filter(
            (card) => card.scarcity === 'super-rare'
        );
    }

    if (scarcity === 'unique') {
        return cardsList.filter(
            (card) => card.scarcity === 'unique'
        );
    }

}