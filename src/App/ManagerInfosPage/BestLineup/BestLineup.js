import React, {useEffect, useState} from 'react'

//SUPPORT FUNCTIONS
import {isEligibleNextGW} from './support-functions/isEligibleNextGW'
import {getBestSo5} from './support-functions/getBestSo5'
import {addExpectedScore} from './support-functions/addExpectedScore'
import {addTeamCaptain}from './support-functions/addTeamCaptain'

//COMPONENTS
import {BestLineupSelector} from './BestLineupSelector/BestLineupSelector'
import {BestLineupContainer} from './BestLineupContainer/BestLineupContainer'
import {BestLineupDetails} from './BestLineupDetails/BestLineupDetails'


export function BestLineup (props) {

    
    
    //HANDLE BEST LINEUP SELECTION

    //RARITY SELECTOR
    const [so5RaritySelected, setSo5RaritySelected] = useState('common');
    function handleSo5RarityChange (rarity) {
        setSo5RaritySelected(rarity)
    };
    
    //LEAGUE SELECTOR
    const [so5LeagueSelected, setSo5LeagueSelected] = useState('global-all-star')
    function handleSo5LeagueChange (league) {
        setSo5LeagueSelected(league)
    }
    
    
    
    
    //FILTER ELIGIBLE CARDS
    const [eligibleCards, setEligibleCards] = useState([])
    useEffect(
        () => {

            if (props.managerCards.length === 0) {return}

            //FILTER BY RARITY
            const rarityFilteredCards = props.managerCards.filter(
                (card) => card.rarity === so5RaritySelected
            )

            //FILTER BY LEAGUE
            const leagueFilteredCards = rarityFilteredCards.filter(
                (card) => {
                    if (so5LeagueSelected === 'global-all-star') {return true}
                    if (so5LeagueSelected === 'champion-europe' && card.championEurope) {return true}
                    if (so5LeagueSelected === 'challenger-europe' && card.challengerEurope) {return true}
                    if (so5LeagueSelected === 'champion-asia' && card.championAsia) {return true}
                    if (so5LeagueSelected === 'champion-america' && card.championAmerica) {return true}
                    if (so5LeagueSelected === 'u23' && card.u23Eligible) {return true}
                }
            )

            //FILTER IF NO GAME
            const noGameFilteredCards = leagueFilteredCards.filter(
                (card) => {
                    if (isEligibleNextGW(card, props.nextGWInfos)) {return true} else {return false}
                }
            )

            //FILTER IF DNP
            const filteringDNP = noGameFilteredCards.filter(
                (card) => {
                    let DNPCount = 0;
                    for (let scores of card.lastScores) {
                        if (card.lastScores.indexOf(scores) > 4) {} else {
                            if (scores.score === null) {DNPCount++}
                            if (scores.score === undefined) {DNPCount++}
                            if (scores.score === 0) {DNPCount++}
                        }
                    }
                    if (DNPCount > 2) {return false} else {return true}
                }
            )

            //FILTER PLAYER DOUBLONS
            filteringDNP.sort((cardA, cardB) => cardB.expectedScore - cardA.expectedScore)
            let playerNameArray = [];
            const noDoublonsEligibleCards = filteringDNP.filter(
                (card) => {
                    if (playerNameArray.includes(card.player.displayName)) {
                        return false
                    } else {
                        playerNameArray.push(card.player.displayName)
                        return true
                    }
                }
            )
            setEligibleCards(noDoublonsEligibleCards)

        }, [props.managerCards, so5RaritySelected, so5LeagueSelected]
    )


    //ADD INDIVIDUAL EXPECTED SCORE
    const [eligibleCardsWithES, setEligibleCardsWithES] = useState([])
    useEffect(
        () => {
            setEligibleCardsWithES(addExpectedScore(eligibleCards))
        }, [eligibleCards]
    )

    //GET BEST 5
    const [best5, setBest5] = useState([])
    useEffect(
        () => {

            setBest5(getBestSo5(eligibleCardsWithES))

        }, [eligibleCardsWithES]
    )

    //ADD TEAM CAPTAIN
    const [best5WithCaptain, setBest5WithCaptain] = useState([])
    useEffect(
        () => {
            setBest5WithCaptain(addTeamCaptain(best5))
        }, [best5]
    )


    //DISPLAY TEAM
    const [teamToDisplay, setTeamToDisplay] = useState([])
    useEffect(
        () => {
            setTeamToDisplay(best5WithCaptain)
        }, [best5WithCaptain]
    )

    //DISPLAY TEAM ?
    const [displayTeam, setDisplayTeam] = useState(false)
    useEffect(
        () => {
            let numberUnavailablePlayer = 0 ;
            for (let card of teamToDisplay) {
                if (card.name === 'No Player Available') {numberUnavailablePlayer++}
            }
    
    
            if (numberUnavailablePlayer < 2) {
                setDisplayTeam(true)
            } else {
                setDisplayTeam(false)
            }
    
        }, [teamToDisplay]
    )
    


    //DISPLAY LINEUP DETAILS
    const [displayLineupDetails, setDisplayLineUpDetails] = useState(false)
    function handleDisplayLineupDetails () {

        setDisplayLineUpDetails(!displayLineupDetails)
        if (!displayLineupDetails) {
            setTimeout(
                () => {
                    window.scrollTo(0, 2000);
                }, 0
            )
        }
    }


    return (

        <div style={{backgroundColor: 'rgb(39, 39, 39, 0.05)', paddingTop: '30px', paddingBottom: '30px'}}>
            <BestLineupSelector 
                nextGWInfos={props.nextGWInfos}
                handleSo5RarityChange={handleSo5RarityChange}
                handleSo5LeagueChange={handleSo5LeagueChange}/>

            <BestLineupContainer 
                teamToDisplay={teamToDisplay}
                handleDisplayLineupDetails={handleDisplayLineupDetails}
                displayTeam={displayTeam}/>

            {
                !displayLineupDetails ? '' :
                <BestLineupDetails 
                teamToDisplay={teamToDisplay}
                handleDisplayLineupDetails={handleDisplayLineupDetails}/>
            }
        </div>

    );
}