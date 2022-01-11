import React, {useEffect} from 'react'

//SUPPORT FUNCTION
import { urlPOST } from '../../support-functions/urlsToFetch'
import { queryManagerInfos } from './queryManagerInfos'

// eslint-disable-next-line
export function GetManagerInfos (props: any) {

        //GET MANAGER INFOS
        function getManagerInfos (managerSlug: string): void {

            if (managerSlug === '') {return}

            // eslint-disable-next-line
            const urlToFetch = urlPOST(props.environment)
    
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const query = queryManagerInfos(managerSlug)
            const body = {"variables": {}, "query": query}
            const request = {method: 'POST', headers: myHeaders, body: JSON.stringify(body)}
    
            fetch(urlToFetch, request)
            .then((response) => response.json())
            .then((responseJSON) => {

                if (responseJSON === null || responseJSON === undefined) {
                    props.updateSearchStatus('search-not-found')
                    return
                }

                if (!Object.keys(responseJSON).includes('data') && responseJSON.data !== null) {
                    props.updateSearchStatus('search-not-found')
                    return
                }
                
                if (!Object.keys(responseJSON.data).includes('user') && responseJSON.data.user !== null) {
                    props.updateSearchStatus('search-not-found')
                    return
                }

                props.updateManagerInfos(responseJSON.data.user)

            })
            .catch(() => {
                props.updateSearchStatus('search-not-found')
                return
            })

            return
        }
    



    useEffect(
        () => {
            getManagerInfos(props.managerSlug)
        }, [props.managerSlug]
    )

    return (
        <div></div>
    );
}