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
                if (responseJSON !== undefined && responseJSON !== null) {
                    if (Object.keys(responseJSON).includes('data')) {
                        if (Object.keys(responseJSON.data).includes('user')) {
                            props.updateManagerInfos(responseJSON.data.user)
                        } else {
                            props.updateSearchStatus('search-not-found')
                        }
                    } 
                } 
            })    
            .catch(() => {
                props.updateSearchStatus('search-not-found')
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