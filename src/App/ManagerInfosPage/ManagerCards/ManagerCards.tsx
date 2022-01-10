import React, {useEffect, useState} from 'react'

//COMPONENTS
import {Selectors} from './Selectors/Selectors'
import { CardRarityGallery } from './CardRarityGallery/CardRarityGallery';

//INTERFACES
import {Card} from '../../Interfaces'

// eslint-disable-next-line
export function ManagerCards (props: any) {

    //HANDLE SELECTORS
    
    //SCARCITY SELECTION
    const [commonSelected, setCommonSelected] = useState(true)
    function handleCommonSelection(value: boolean) {setCommonSelected(value)}

    const [limitedSelected, setLimitedSelected] = useState(true)
    function handleLimitedSelection(value: boolean) {setLimitedSelected(value)}

    const [rareSelected, setRareSelected] = useState(true)
    function handleRareSelection(value: boolean) {setRareSelected(value)}

    const [superRareSelected, setSuperRareSelected] = useState(true)
    function handleSuperRareSelection(value: boolean) {setSuperRareSelected(value)}

    const [uniqueSelected, setUniqueSelected] = useState(true)
    function handleUniqueSelection(value: boolean) {setUniqueSelected(value)}

    
    //POSITION SELECTION
    const [GOASelected, setGOASelected] = useState(true)
    function handleGOASelection (value: boolean) {setGOASelected(value)}

    const [DEFSelected, setDEFSelected] = useState(true)
    function handleDEFSelection (value: boolean) {setDEFSelected(value)}

    const [MIDSelected, setMIDSelected] = useState(true)
    function handleMIDSelection (value: boolean) {setMIDSelected(value)}

    const [FORSelected, setFORSelected] = useState(true)
    function handleFORSelection (value: boolean) {setFORSelected(value)}

    //ZONE SELECTION
    const [zoneSelected, setZoneSelected] = useState('all')
    function handleZoneSelection(zone: string) {setZoneSelected(zone)}

    
    
    
    
    //COMMON CARDS
    const [commonCardsToDisplay, setCommonCardsToDisplay] = useState([])
    useEffect(
        () => {

            //FILTER BY RARITY
            const commonCards = props.managerCards.filter(
                (card: Card) => {
                    if (card.rarity === 'common' && commonSelected) {return true} else {return false}
                        }
                    )

            //FILTER BY POSITION
            const commonCardsFilteredPosition = commonCards.filter(
                (card: Card) => {
                    if (card.position === 'Goalkeeper' && GOASelected) {return true}
                    if (card.position === 'Defender' && DEFSelected) {return true}
                    if (card.position === 'Midfielder' && MIDSelected) {return true}
                    if (card.position === 'Forward' && FORSelected) {return true}
                    return false
                    }
            )

            //FILTER BY ZONE
            const commonCardsFilteredByZone = commonCardsFilteredPosition.filter(
                (card: Card) => {
                    if (zoneSelected === 'all') {return true} else {
                        if (card.championEurope && zoneSelected === 'champion-europe') {return true}
                        if (card.challengerEurope && zoneSelected === 'challenger-europe') {return true}
                        if (card.championAsia && zoneSelected === 'champion-asia') {return true}
                        if (card.championAmerica && zoneSelected === 'champion-america') {return true}
                        return false
                    }
                }
            )

            //FILTER CARDS
            setCommonCardsToDisplay(commonCardsFilteredByZone)

        }, [
            props.managerCards, 
            commonSelected, limitedSelected, rareSelected, superRareSelected, uniqueSelected, 
            GOASelected, DEFSelected, MIDSelected, FORSelected,
            zoneSelected
        ]
    )

    //LIMITED CARDS
    const [limitedCardsToDisplay, setLimitedCardsToDisplay] = useState([])
    useEffect(
        () => {

            //FILTER BY RARITY
            const limitedCards = props.managerCards.filter(
                (card: Card) => {
                    if (card.rarity === 'limited' && limitedSelected) {return true}
                    return false
                    }
                    )

            //FILTER BY POSITION
            const limitedCardsFilteredPosition = limitedCards.filter(
                (card: Card) => {
                    if (card.position === 'Goalkeeper' && GOASelected) {return true}
                    if (card.position === 'Defender' && DEFSelected) {return true}
                    if (card.position === 'Midfielder' && MIDSelected) {return true}
                    if (card.position === 'Forward' && FORSelected) {return true}
                    return false
                }
            )

            //FILTER BY ZONE
            const limitedCardsFilteredByZone = limitedCardsFilteredPosition.filter(
                (card: Card) => {

                    if (zoneSelected === 'all') {return true} else {
                        if (card.championEurope && zoneSelected === 'champion-europe') {return true}
                        if (card.challengerEurope && zoneSelected === 'challenger-europe') {return true}
                        if (card.championAsia && zoneSelected === 'champion-asia') {return true}
                        if (card.championAmerica && zoneSelected === 'champion-america') {return true}
                        return false
                    }
                }
            )

            //FILTER CARDS
            setLimitedCardsToDisplay(limitedCardsFilteredByZone)

        }, [
            props.managerCards, 
            commonSelected, limitedSelected, rareSelected, superRareSelected, uniqueSelected, 
            GOASelected, DEFSelected, MIDSelected, FORSelected,
            zoneSelected
        ]
    )



    //RARE CARDS
    const [rareCardsToDisplay, setRareCardsToDisplay] = useState([])
    useEffect(
        () => {

            //FILTER BY RARITY
            const rareCards = props.managerCards.filter(
                (card: Card) => {
                    if (card.rarity === 'rare' && rareSelected) {return true}
                    return false
                    }
                )
    
            //FILTER BY POSITION
            const rareCardsFilteredPosition = rareCards.filter(
                (card: Card) => {
                    if (card.position === 'Goalkeeper' && GOASelected) {return true}
                    if (card.position === 'Defender' && DEFSelected) {return true}
                    if (card.position === 'Midfielder' && MIDSelected) {return true}
                    if (card.position === 'Forward' && FORSelected) {return true}
                    return false
                }
            )
    
            //FILTER BY ZONE
            const rareCardsFilteredByZone = rareCardsFilteredPosition.filter(
                (card: Card) => {
    
                    if (zoneSelected === 'all') {return true} else {
                        if (card.championEurope && zoneSelected === 'champion-europe') {return true}
                        if (card.challengerEurope && zoneSelected === 'challenger-europe') {return true}
                        if (card.championAsia && zoneSelected === 'champion-asia') {return true}
                        if (card.championAmerica && zoneSelected === 'champion-america') {return true}
                        return false
                    }
                }
            )
    
            //FILTER CARDS
            setRareCardsToDisplay(rareCardsFilteredByZone)
    
        }, [
            props.managerCards, 
            commonSelected, limitedSelected, rareSelected, superRareSelected, uniqueSelected, 
            GOASelected, DEFSelected, MIDSelected, FORSelected,
            zoneSelected
        ]
    )

    //SUPER-RARE CARDS
    const [superRareCardsToDisplay, setSuperRareCardsToDisplay] = useState([])
    useEffect(
        () => {

            //FILTER BY RARITY
            const superRareCards = props.managerCards.filter(
                (card: Card) => {
                    if (card.rarity === 'super_rare' && superRareSelected) {return true}
                    return false
                    }
                )

            //FILTER BY POSITION
            const superRareCardsFilteredPosition = superRareCards.filter(
                (card: Card) => {
                    if (card.position === 'Goalkeeper' && GOASelected) {return true}
                    if (card.position === 'Defender' && DEFSelected) {return true}
                    if (card.position === 'Midfielder' && MIDSelected) {return true}
                    if (card.position === 'Forward' && FORSelected) {return true}
                    return false
                }
            )

            //FILTER BY ZONE
            const superRareCardsFilteredByZone = superRareCardsFilteredPosition.filter(
                (card: Card) => {

                    if (zoneSelected === 'all') {return true} else {
                        if (card.championEurope && zoneSelected === 'champion-europe') {return true}
                        if (card.challengerEurope && zoneSelected === 'challenger-europe') {return true}
                        if (card.championAsia && zoneSelected === 'champion-asia') {return true}
                        if (card.championAmerica && zoneSelected === 'champion-america') {return true}
                        return false
                    }
                }
            )

            //FILTER CARDS
            setSuperRareCardsToDisplay(superRareCardsFilteredByZone)

        }, [
            props.managerCards, 
            commonSelected, limitedSelected, rareSelected, superRareSelected, uniqueSelected, 
            GOASelected, DEFSelected, MIDSelected, FORSelected,
            zoneSelected
        ]
    )

    //UNIQUE CARDS
    const [uniqueCardsToDisplay, setUniqueCardsToDisplay] = useState([])
    useEffect(
        () => {

            //FILTER BY RARITY
            const uniqueCards = props.managerCards.filter(
                (card: Card) => {
                    if (card.rarity === 'unique' && uniqueSelected) {return true}
                    return false
                    }
                )

            //FILTER BY POSITION
            const uniqueCardsFilteredPosition = uniqueCards.filter(
                (card: Card) => {
                    if (card.position === 'Goalkeeper' && GOASelected) {return true}
                    if (card.position === 'Defender' && DEFSelected) {return true}
                    if (card.position === 'Midfielder' && MIDSelected) {return true}
                    if (card.position === 'Forward' && FORSelected) {return true}
                    return false
                }
            )

            //FILTER BY ZONE
            const uniqueCardsFilteredByZone = uniqueCardsFilteredPosition.filter(
                (card: Card) => {
                    if (zoneSelected === 'all') {return true} else {
                        if (card.championEurope && zoneSelected === 'champion-europe') {return true}
                        if (card.challengerEurope && zoneSelected === 'challenger-europe') {return true}
                        if (card.championAsia && zoneSelected === 'champion-asia') {return true}
                        if (card.championAmerica && zoneSelected === 'champion-america') {return true}
                        return false
                    }
                }
            )

            //FILTER CARDS
            setUniqueCardsToDisplay(uniqueCardsFilteredByZone)

        }, [
            props.managerCards, 
            commonSelected, limitedSelected, rareSelected, superRareSelected, uniqueSelected, 
            GOASelected, DEFSelected, MIDSelected, FORSelected,
            zoneSelected
        ]
    )
    
    return (

        <div>
            <Selectors
                handleZoneSelection={handleZoneSelection}
                handleCommonSelection={handleCommonSelection}
                handleLimitedSelection={handleLimitedSelection}
                handleRareSelection={handleRareSelection}
                handleSuperRareSelection={handleSuperRareSelection}
                handleUniqueSelection={handleUniqueSelection}
                handleGOASelection={handleGOASelection}
                handleDEFSelection={handleDEFSelection}
                handleMIDSelection={handleMIDSelection}
                handleFORSelection={handleFORSelection}/>
            {!commonSelected ? '' :
                <CardRarityGallery cardsToDisplay={commonCardsToDisplay} rarity='common'/>}
            {!limitedSelected ? '' :
                <CardRarityGallery cardsToDisplay={limitedCardsToDisplay} rarity='limited'/>}
            {!rareSelected ? '' :
                <CardRarityGallery cardsToDisplay={rareCardsToDisplay} rarity='rare'/>}
            {!superRareSelected ? '' :
                <CardRarityGallery cardsToDisplay={superRareCardsToDisplay} rarity='super rare'/>}
            {!uniqueSelected ? '' :
                <CardRarityGallery cardsToDisplay={uniqueCardsToDisplay} rarity='unique'/>}
        </div>


    );
}