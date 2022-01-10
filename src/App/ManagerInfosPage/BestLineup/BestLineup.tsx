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

//INTERFACES
import {Card} from '../../Interfaces'

// eslint-disable-next-line
export function BestLineup (props: any) {

    
    
    //HANDLE BEST LINEUP SELECTION

    //RARITY SELECTOR
    const [so5RaritySelected, setSo5RaritySelected] = useState('common');
    function handleSo5RarityChange (rarity: string) {
        setSo5RaritySelected(rarity)
    }
    
    //LEAGUE SELECTOR
    const [so5LeagueSelected, setSo5LeagueSelected] = useState('global-all-star')
    function handleSo5LeagueChange (league: string) {
        setSo5LeagueSelected(league)
    }
    
    
    
    
    //FILTER ELIGIBLE CARDS
    const [eligibleCards, setEligibleCards] = useState<Card[]>([])
    useEffect(
        () => {

            if (props.managerCards.length === 0) {return}

            //FILTER BY RARITY
            const rarityFilteredCards = props.managerCards.filter(
                (card: Card) => card.rarity === so5RaritySelected
            )

            //FILTER BY LEAGUE
            const leagueFilteredCards = rarityFilteredCards.filter(
                (card: Card) => {
                    if (so5LeagueSelected === 'global-all-star') {return true}
                    if (so5LeagueSelected === 'champion-europe' && card.championEurope) {return true}
                    if (so5LeagueSelected === 'challenger-europe' && card.challengerEurope) {return true}
                    if (so5LeagueSelected === 'champion-asia' && card.championAsia) {return true}
                    if (so5LeagueSelected === 'champion-america' && card.championAmerica) {return true}
                    if (so5LeagueSelected === 'u23' && card.u23Eligible) {return true}
                    return false
                }
            )

            //FILTER IF NO GAME
            const noGameFilteredCards = leagueFilteredCards.filter(
                (card: Card) => {
                    if (isEligibleNextGW(card, props.nextGWInfos)) {return true} else {return false}
                }
            )

            //FILTER IF DNP
            const filteringDNP = noGameFilteredCards.filter(
                (card: Card) => {
                    let DNPCount = 0;
                    if (card.lastScores !== null) {
                        for (const scores of card.lastScores) {
                            if (card.lastScores.indexOf(scores) <= 4) {
                                if (scores.score === null) {DNPCount++}
                                if (scores.score === undefined) {DNPCount++}
                                if (scores.score === 0) {DNPCount++}
                            }
                        }
    
                    }
                    if (DNPCount > 2) {return false} else {return true}
                }
            )

            //FILTER PLAYER DOUBLONS
            filteringDNP.sort((cardA: Card, cardB: Card) => cardB.expectedScore - cardA.expectedScore)
            const playerNameArray: string[] = [];
            const noDoublonsEligibleCards = filteringDNP.filter(
                (card: Card) => {
                    if (card.player === null) {return false}
                    if (card.player.displayName === null) {return false}
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
    const [eligibleCardsWithES, setEligibleCardsWithES] = useState<Card[]>([])
    useEffect(
        () => {
            setEligibleCardsWithES(addExpectedScore(eligibleCards))
        }, [eligibleCards]
    )

    //GET BEST 5
    const [best5, setBest5] = useState<Card[]>([])
    useEffect(
        () => {

            setBest5(getBestSo5(eligibleCardsWithES))

        }, [eligibleCardsWithES]
    )

    //ADD TEAM CAPTAIN
    const [best5WithCaptain, setBest5WithCaptain] = useState<Card[]>([])
    useEffect(
        () => {
            setBest5WithCaptain(addTeamCaptain(best5))
        }, [best5]
    )


    //DISPLAY TEAM
    const [teamToDisplay, setTeamToDisplay] = useState<Card[]>([])
    useEffect(
        () => {
            setTeamToDisplay(best5WithCaptain)
        }, [best5WithCaptain]
    )

    //DISPLAY TEAM ?
    const [displayTeam, setDisplayTeam] = useState(false)
    useEffect(
        () => {
            let numberAvailablePlayer = 0 ;
            for (const card of teamToDisplay) {
                if (card.name !== 'No Player Available' && card.name !== '' && card.name !== null) {numberAvailablePlayer++}
            }
    
    
            if (numberAvailablePlayer >= 3) {
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
                    window.scrollTo(0, 10000);
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