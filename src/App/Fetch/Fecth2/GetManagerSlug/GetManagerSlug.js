import React, {useEffect} from 'react'

//SUPPORT FUNCTION
import { urlGET } from '../../urlsToFetch'

export function GetManagerSlug (props) {

        //GET MANAGER SLUG
        function getManagerSlug (managerName) {

            const urlToFetch = urlGET(props.environment, managerName.toLowerCase())
    
            const request = {method: 'GET'}
        
            fetch(urlToFetch, request)
            .then((response) => {
                return response.json()
            })
            .then((responseJSON) => {
                if (props.environment === 'development') {return JSON.parse(responseJSON)}
                if (props.environment === 'production') {return responseJSON}
            })
            .then((responseJSON) => {
                if (responseJSON !== undefined && responseJSON !== null) {
                    if (Object.keys(responseJSON).includes('manager')) {
                        if (Object.keys(responseJSON.manager).includes('Slug')) {

                            props.updateManagerSlug(responseJSON.manager.Slug)
                            props.updateManagerName(responseJSON.manager.Nickname)
                        } else {
                            props.updateSearchStatus('search-not-found')
                        }
                    } else {
                        props.updateSearchStatus('search-not-found')
                    }
                } else {
                    props.updateSearchStatus('search-not-found')
                }
            })
            .catch((error) => {
                props.updateSearchStatus('search-not-found')
            })
        }
    
    
    useEffect(
        () => {

            if (typeof props.managerSearched === 'string') {
                if (props.managerSearched.length > 0) {
                    getManagerSlug(props.managerSearched)
                    props.updateSearchStatus('searching')
                }
            }
        }, [props.managerSearched]
    )

    return (
        <div></div>
    );
}