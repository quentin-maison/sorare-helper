import React, {useEffect, useState} from 'react'

//SUPPORT FUNCTION
import { urlGET, urlPOST } from '../../urlsToFetch'
import { queryManagerInfos } from './queryManagerInfos'

export function GetManagerInfos (props) {

        //GET MANAGER INFOS
        function getManagerInfos (managerSlug) {

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
                    } else {
                    }
                } else {
                }
            })    
            .catch((error) => {
                props.updateSearchStatus('search-not-found')
            })
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