import React, {useEffect, useState} from 'react'

//ADD CARDS INFOS
import { addCardsInfos } from './addCardsInfos/addCardsInfos'

//QUERY
import {queryManagerData} from './queryManagerData'

//RETRIEVE GW SLUGS
import {getNextGWSlug} from './getGWSlugs/getGWSlugs'

//URLS TO FETCH
import {urlGET, urlPOST} from './urlsToFetch'


export function Fetch (props) {
    
    //GET GAMEWEEK INFOS
    useEffect(
        () => {

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
                            
                            let fetchResponse = responseJSON.data.so5Fixture ;
                            fetchResponse.gameWeekSlug = GWSlug ;
                                                        
                            props.updateGWInfos(fetchResponse)
                        } else {
                        }
                    } else {
                    }
                } else {
                }
            })
            .catch((error) => {
                console.log(error)
            })

        }, []
    )

    //HANDLE MANAGER SEARCH
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
    
    
    //GET MANAGER SLUG
    const [managerSlug, setManagerSlug] = useState('')
    const [managerSlugFound, setManagerSlugFound] = useState(false)
    function getManagerSlug (managerName) {

        const urlToFetch = urlGET(props.environment, managerName)

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
                        setManagerSlug(responseJSON.manager.Slug)
                        props.updateManagerName(responseJSON.manager.Nickname)
                        setManagerSlugFound(true)
                    } else {
                        setManagerSlugFound(false)
                        props.updateSearchStatus('search-not-found')
                    }
                } else {
                    setManagerSlugFound(false)
                    props.updateSearchStatus('search-not-found')
                }
            } else {
                setManagerSlugFound(false)
                props.updateSearchStatus('search-not-found')
            }
        })
        .catch((error) => {
            setManagerSlugFound(false)
            props.updateSearchStatus('search-not-found')
        })
    }

    //INITIATE FETCH
    const [fetchResponse, setFetchResponse] = useState({})
    const [fetchSuccessful, setFetchSuccessful] = useState()
    useEffect(
        () => {

            if (managerSlugFound) {
                getManagerData(managerSlug)
            } else {
                if (managerSlug !== '' && fetchSuccessful === false) {
                    props.updateSearchStatus('search-not-found')
                }
            }
            
        }, [managerSlug, managerSlugFound]
    )


    function getManagerData (managerSlug) {

        const urlToFetch = urlPOST(props.environment)


        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const query = queryManagerData(managerSlug)
        const body = {"variables": {}, "query": query}
        const request = {method: 'POST', headers: myHeaders, body: JSON.stringify(body)}

        fetch(urlToFetch, request)
        .then((response) => response.json())
        .then((responseJSON) => {
            if (responseJSON !== undefined && responseJSON !== null) {
                if (Object.keys(responseJSON).includes('data')) {
                    if (Object.keys(responseJSON.data).includes('user')) {
                        setFetchResponse(responseJSON.data.user)
                        setFetchSuccessful(true)
                    } else {
                        setFetchSuccessful(false)
                        props.updateSearchStatus('search-not-found')
                    }
                } else {
                    setFetchSuccessful(false)
                    props.updateSearchStatus('search-not-found')
                }
            } else {
                setFetchSuccessful(false)
                props.updateSearchStatus('search-not-found')
            }
        })    
        .catch((error) => {
            setFetchSuccessful(false)
            props.updateSearchStatus('search-not-found')
        })
    }

    useEffect(
        () => {

            if (fetchSuccessful) {
                props.updateSearchStatus('search-found')

                if (Object.keys(fetchResponse).includes('cards')) {
                    const managerCards = fetchResponse.cards
                    props.updateManagerCards(addCardsInfos(managerCards))
                }

                if (Object.keys(fetchResponse).includes('profile') && Object.keys(fetchResponse).includes('cardCounts')) {
                    const managerInfos = {}
                    managerInfos.profile = fetchResponse.profile
                    managerInfos.cardCounts = fetchResponse.cardCounts
                    managerInfos.nickname = fetchResponse.nickname
                    managerInfos.createdAt = fetchResponse.createdAt

                    props.updateManagerInfos(managerInfos)
                }
            
            }
            
        }, [fetchResponse, fetchSuccessful]
    )
              
    return (
        <div style={{height: '20px', backgroundColor: 'rgb(39, 39, 39, 0.05)'}}></div>
    );
}