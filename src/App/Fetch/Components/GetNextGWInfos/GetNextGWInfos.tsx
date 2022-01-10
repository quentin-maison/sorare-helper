import React, {useEffect} from 'react'

//SUPPORT FUNCTIONS
import { urlPOST } from '../../support-functions/urlsToFetch'
import { getNextGWSlug } from '../../support-functions/getGWSlugs/getGWSlugs'

// eslint-disable-next-line
export function GetNextGWInfos (props: any) {

    useEffect(
        () => {

            if (props.managerSearched === "") {return}

            const urlToFetch = urlPOST(props.environment)

            //GET GW SLUG
            const GWSlug = getNextGWSlug()

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const query = `{so5Fixture (slug:"${GWSlug}") {gameWeek, startDate, endDate}}`
            const body = {"variables": {}, "query": query}
            const request = {method: 'POST', headers: myHeaders, body: JSON.stringify(body)}

            fetch(urlToFetch, request)
            .then((response) => {
                return response.json()
            })
            .then((responseJSON) => {
                if (responseJSON !== undefined && responseJSON !== null) {
                    if (Object.keys(responseJSON).includes('data')) {
                        if (Object.keys(responseJSON.data).includes('so5Fixture')) {
                            
                            const fetchResponse = responseJSON.data.so5Fixture ;
                            fetchResponse.gameWeekSlug = GWSlug ;
                            props.updateGWInfos(fetchResponse)

                        } 
                    } 
                } 
            })
            .catch((error) => {
                console.log(error)
            })

        }, [props.managerSearched]
    )

    return (
        <div>
        </div>
    );
}