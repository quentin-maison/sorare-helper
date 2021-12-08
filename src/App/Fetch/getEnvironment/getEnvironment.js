export function getEnvironement () {
    if (!process.env.NODE_ENV) {return 'development'}
    if (process.env.NODE_ENV === 'development') {return 'development'}
    if (process.env.NODE_ENV === 'production') {return 'production'}
}