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

    //1ER FETCH
    useEffect(
        () => {

            setManagerCards([])
            setLastCursor('')
            
            if (props.managerInfos.length === 0) {return}
            if (props.managerInfos.cardCounts.total === managerCards.length) {return}
            getManagerCards(props.managerSlug, lastCursor)
            props.updateManagerCardsLength(props.managerInfos.cardCounts.total)

        }, [props.managerInfos]
    )

    //FETCHS SUIVANTS
    useEffect(
        () => {

            if (props.managerInfos.length === 0) {return}
            if (props.managerInfos.cardCounts.total === managerCards.length) {return}

            getManagerCards(props.managerSlug, lastCursor)

        }, [lastCursor]
    )

    //UPDATE MANAGERCARDS
    useEffect(
        () => {

            props.updateManagerCardsRetrieved(managerCards.length)

            if (props.managerInfos.length === 0) {return}

            if (props.managerInfos.cardCounts.total === managerCards.length) {
                props.updateSearchStatus('search-found')
                props.updateManagerCards(addCardsInfos(managerCards))
            }

        }, [managerCards]
    )




    function getManagerCards(managerSlug: string, lastCursor: string): void {
        
        if (props.managerInfos.cardCounts.total === managerCards.length) {return}
        if (managerSlug === '') {return}
        
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
            if (responseJSON !== undefined && responseJSON !== null) {
                if (Object.keys(responseJSON).includes('data')) {
                    if (Object.keys(responseJSON.data).includes('user')) {

                        //CHECK CARDS
                        setLastCursor(responseJSON.data.user.paginatedCards.edges[responseJSON.data.user.paginatedCards.edges.length-1].cursor)
                        for (const card of responseJSON.data.user.paginatedCards.nodes) {
                            setManagerCards((prev) => [...prev, card])
                        }
                        
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
            console.log(error)
        })

        return

    }

    return (
        <div></div>
    );
}