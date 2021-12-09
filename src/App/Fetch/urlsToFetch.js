const proxyUrl = `http://localhost:3001`;
const serverUrl = `https://06g20q7exg.execute-api.eu-west-3.amazonaws.com/test/helloworld`;

export function urlGET (environment, managerName) {

    if (environment === 'development') {
        return `${proxyUrl}/search/${managerName}`
    }

    if (environment === 'production') {
        return `${serverUrl}?key=${managerName}`
    }
}

export function urlPOST (environment) {
    
    if (environment === 'development') {
        return `${proxyUrl}/graphql`
    }

    if (environment === 'production') {
        return `${serverUrl}`
    }
}