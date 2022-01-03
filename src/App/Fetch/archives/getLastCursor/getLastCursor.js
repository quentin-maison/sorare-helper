export function getLastCursor(array) {


    if (!Object.keys(array).includes('paginatedCards')) {return 'missing paginatedCards property'}
    if (!Object.keys(array.paginatedCards).includes('edges')) {return 'missing edges property'}
    if (!Array.isArray(array.paginatedCards.edges)) {return 'edges are not in array format'}
    const lastCursor = array.paginatedCards.edges[array.paginatedCards.edges.length-1].cursor

    return lastCursor
}