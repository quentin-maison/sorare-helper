import React, {useEffect, useState} from 'react'

//SUPPORT FUNCTION
import { urlPOST } from '../../support-functions/urlsToFetch'
import { queryManagerCards } from './queryManagerCards'
import { addCardsInfos } from '../../support-functions/addCardsInfos/addCardsInfos'

//INTERFACE
import { Card } from '../../../Interfaces'

// eslint-disable-next-line
export function GetManagerCards (props: any) {

    const [managerCards, setManagerCards] = useState<Card[]>([])
    const [lastCursor, setLastCursor] = useState<string>('')
    const [lastFetchLength, setLastFetchLength] = useState(-1)

    //LAUNCH FETCH REQUEST
    useEffect(
        () => {

            if (props.managerSlug !== null && props.managerSlug !== undefined && props.managerSlug !== '') {
                setManagerCards([])
                setLastCursor('')
                setLastFetchLength(-1)
                getManagerCards(props.managerSlug, '')
            }

        }, [props.managerInfos]
    )

    //FOLLOWING FETCHES
    useEffect(
        () => {

            if (lastFetchLength === 50 && props.managerSlug !== null && props.managerSlug !== undefined && props.managerSlug !== '') {
                getManagerCards(props.managerSlug, lastCursor)
            }

        }, [lastCursor]
    )


    //UPDATE CARDS (determine last fetch)
    useEffect(
        () => {

            if (lastFetchLength < 50 && lastFetchLength !== -1) {
                props.updateSearchStatus('search-found')
                props.updateManagerCards(addCardsInfos(managerCards))
            }

        }, [lastFetchLength]
    )

    //UPDATE FETCH DETAILS
    useEffect(
        () => {
            props.updateManagerCardsRetrieved(managerCards.length)
        }, [managerCards]
    )

    useEffect(
        () => {
            props.updateManagerCardsLength(props.managerInfos.cardCounts.total)
        }, [props.managerInfos]
    )

    
    //FETCH FUNCTION
    function getManagerCards(managerSlug: string, lastCursor: string): void {
                
        // eslint-disable-next-line
        const urlToFetch = urlPOST(props.environment)

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const query = queryManagerCards(managerSlug, lastCursor)
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

            if (!Object.keys(responseJSON.data.user).includes('paginatedCards') && responseJSON.data.user.paginatedCards !== null) {
                props.updateSearchStatus('search-not-found')
                return
            }

            if (!Object.keys(responseJSON.data.user.paginatedCards).includes('edges') && responseJSON.data.user.paginatedCards.edges !== null) {
                props.updateSearchStatus('search-not-found')
                return
            }

            if (!Object.keys(responseJSON.data.user.paginatedCards).includes('nodes') && responseJSON.data.user.paginatedCards.nodes !== null) {
                props.updateSearchStatus('search-not-found')
                return
            }

            for (const card of responseJSON.data.user.paginatedCards.nodes) {
                setManagerCards((prev) => [...prev, card])
            }

            const fetchLength = responseJSON.data.user.paginatedCards.edges.length
            setLastFetchLength(fetchLength)
            setLastCursor(responseJSON.data.user.paginatedCards.edges[fetchLength-1].cursor)
   
            
        })    
        .catch(() => {
            props.updateSearchStatus('search-not-found')
            return
        })
    }




    return (
        <div></div>
    );
}