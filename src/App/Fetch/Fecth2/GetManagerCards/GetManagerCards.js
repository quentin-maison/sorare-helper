import React, {useEffect, useState} from 'react'

//SUPPORT FUNCTION
import { urlPOST } from '../../urlsToFetch'
import { queryManagerCards } from './queryManagerCards'
import { addCardsInfos } from '../addCardsInfos/addCardsInfos'

export function GetManagerCards (props) {

    const [managerCards, setManagerCards] = useState([])
    const [lastCursor, setLastCursor] = useState('')

    //1ER FETCH
    useEffect(
        () => {

            setManagerCards('')
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




    function getManagerCards(managerSlug, lastCursor) {
        
        if (props.managerInfos.cardCounts.total === managerCards.length) {return}
        
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
                        for (let card of responseJSON.data.user.paginatedCards.nodes) {
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


    }

    return (
        <div></div>
    );
}