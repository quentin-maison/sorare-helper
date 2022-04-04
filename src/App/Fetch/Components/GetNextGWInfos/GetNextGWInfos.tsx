import React, {useEffect, useState} from 'react'

//SUPPORT FUNCTIONS
import { urlPOST } from '../../support-functions/urlsToFetch'

// eslint-disable-next-line
export function GetNextGWInfos (props: any) {
    
    //GET NEXT GW SLUG
    const [nextGWSlug, setNextGWSlug] = useState<string>('')
    useEffect(
        () => {

            const urlToFetch = urlPOST(props.environment)

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const query = `query {so5Fixtures (first: 1) {nodes {slug}}}`
            const body = {"variables": {}, "query": query}
            const request = {method: 'POST', headers: myHeaders, body: JSON.stringify(body)}
        
        
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

                setNextGWSlug(responseJSON.data.so5Fixtures.nodes[0].slug)
        
        
            })
            .catch((error) => {
                console.log(error)
            })
    

        }, []
    )
    
    
    useEffect(
        () => {

            if (nextGWSlug === "") {return}
            if (props.managerSearched === "") {return}

            const urlToFetch = urlPOST(props.environment)

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const query = `{so5Fixture (slug:"${nextGWSlug}") {gameWeek, startDate, endDate}}`
            const body = {"variables": {}, "query": query}
            const request = {method: 'POST', headers: myHeaders, body: JSON.stringify(body)}

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

                if (!Object.keys(responseJSON.data).includes('so5Fixture') && responseJSON.data.so5Fixture !== null) {
                    return
                }

                props.updateGWInfos(responseJSON.data.so5Fixture)

            })
            .catch((error) => {
                console.log(error)
            })

        }, [props.managerSearched, nextGWSlug]
    )

    return (
        <div>
        </div>
    );
}