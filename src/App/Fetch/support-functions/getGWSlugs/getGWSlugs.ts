//SUPPORT FUNCTIONS
import { urlPOST } from "../urlsToFetch"
import { getEnvironement } from "../getEnvironment/getEnvironment"


export function getNextGWSlug (): string {


    const environment = getEnvironement()
    const urlToFetch = urlPOST(environment)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const query = `query {so5Fixtures (first: 1) {nodes {slug}}}`
    const body = {"variables": {}, "query": query}
    const request = {method: 'POST', headers: myHeaders, body: JSON.stringify(body)}

    const gwSlug = {slug: "5-8-apr-93202b11-63b0-4862-8fe9-497649b0f71c"}

    fetch(urlToFetch, request)
    .then((response) => {
        return response.json()
    })
    .then((responseJSON) => {

        if (responseJSON === null || responseJSON === undefined) {
            return
        }

        if (!Object.keys(responseJSON).includes('data') && responseJSON.data !== null) {
            return
        }

        if (!Object.keys(responseJSON.data).includes('so5Fixtures') && responseJSON.data.so5Fixtures !== null) {
            return
        }

        if (!Object.keys(responseJSON.data.so5Fixtures).includes('nodes') && responseJSON.data.so5Fixtures.nodes !== null) {
            return
        }


    })
    .catch((error) => {
        console.log(error)
    })


    return gwSlug.slug
}