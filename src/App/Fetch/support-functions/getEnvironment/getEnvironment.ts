export function getEnvironement (): string {
   
    
    const reactEnvironment = process.env.REACT_APP_ENVIRONMENT
    let reactEnvironmentString: string ;

    if (reactEnvironment !== null && reactEnvironment !== undefined) {
        reactEnvironmentString = reactEnvironment.toString();
        if (reactEnvironmentString.includes('production')) {return 'production'}
    }

    if (!process.env.NODE_ENV) {return 'development'}
    if (process.env.NODE_ENV === 'development') {return 'development'}
    if (process.env.NODE_ENV === 'production') {return 'production'}

    return 'production'
}