import React, {useEffect} from 'react'

//SUPPORT FUNCTION
import { urlGET } from '../../support-functions/urlsToFetch'

// eslint-disable-next-line
export function GetManagerSlug (props: any) {

        //GET MANAGER SLUG
        function getManagerSlug (managerName: string): void {

            if (managerName === '') {return}
            
            // eslint-disable-next-line
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
                
                
                if (responseJSON === null || responseJSON === undefined) {
                    props.updateSearchStatus('search-not-found')
                    return
                }

                if (!Object.keys(responseJSON).includes('manager') && responseJSON.manager !== null) {
                    props.updateSearchStatus('search-not-found')
                    return
                }
                
                if (!Object.keys(responseJSON.manager).includes('Slug') && responseJSON.manager.Slug !== null) {
                    props.updateSearchStatus('search-not-found')
                    return
                }
                props.updateManagerSlug(responseJSON.manager.Slug)

                if (!Object.keys(responseJSON.manager).includes('Nickname') && responseJSON.manager.Nickname !== null) {
                    props.updateSearchStatus('search-not-found')
                    return
                }
                props.updateManagerName(responseJSON.manager.Nickname)
                
            })
            .catch(() => {
                props.updateSearchStatus('search-not-found')
            })

            return
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