const proxyUrl = `http://localhost:3001`;
const serverUrl = `https://06g20q7exg.execute-api.eu-west-3.amazonaws.com/test/helloworld`;


export function urlGET (environment: string, managerName: string): string {

    if (environment === 'development') {
        return `${proxyUrl}/search/${managerName}`
    }

    if (environment === 'production') {
        return `${serverUrl}?key=${managerName}`
    }

    return `${proxyUrl}/search/${managerName}`
}

export function urlPOST (environment: string): string {
    
    if (environment === 'development') {
        return `${proxyUrl}/graphql`
    }

    if (environment === 'production') {
        return `${serverUrl}`
    }

    return `${proxyUrl}/graphql`
}