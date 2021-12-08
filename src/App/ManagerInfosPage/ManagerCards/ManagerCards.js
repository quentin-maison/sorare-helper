import React, {useEffect, useState} from 'react'

//COMPONENTS
import {Selectors} from './Selectors/Selectors'
import { CardRarityGallery } from './CardRarityGallery/CardRarityGallery';



export function ManagerCards (props) {

    //HANDLE SELECTORS
    
    //SCARCITY SELECTION
    const [commonSelected, setCommonSelected] = useState(true)
    function handleCommonSelection(value) {setCommonSelected(value)}

    const [limitedSelected, setLimitedSelected] = useState(true)
    function handleLimitedSelection(value) {setLimitedSelected(value)}

    const [rareSelected, setRareSelected] = useState(true)
    function handleRareSelection(value) {setRareSelected(value)}

    const [superRareSelected, setSuperRareSelected] = useState(true)
    function handleSuperRareSelection(value) {setSuperRareSelected(value)}

    const [uniqueSelected, setUniqueSelected] = useState(true)
    function handleUniqueSelection(value) {setUniqueSelected(value)}

    
    //POSITION SELECTION
    const [GOASelected, setGOASelected] = useState(true)
    function handleGOASelection (boolean) {setGOASelected(boolean)}

    const [DEFSelected, setDEFSelected] = useState(true)
    function handleDEFSelection (boolean) {setDEFSelected(boolean)}

    const [MIDSelected, setMIDSelected] = useState(true)
    function handleMIDSelection (boolean) {setMIDSelected(boolean)}

    const [FORSelected, setFORSelected] = useState(true)
    function handleFORSelection (boolean) {setFORSelected(boolean)}

    //ZONE SELECTION
    const [zoneSelected, setZoneSelected] = useState('all')
    function handleZoneSelection(zone) {setZoneSelected(zone)}

    
    
    
    
    //COMMON CARDS
    const [commonCardsToDisplay, setCommonCardsToDisplay] = useState([])
    useEffect(
        () => {

            //FILTER BY RARITY
            const commonCards = props.managerCards.filter(
                (card) => {
                    if (card.rarity === 'common' && commonSelected) {return true} else {return false}
                        }
                    )

            //FILTER BY POSITION
            const commonCardsFilteredPosition = commonCards.filter(
                (card) => {
                    if (card.position === 'Goalkeeper' && GOASelected) {return true}
                    if (card.position === 'Defender' && DEFSelected) {return true}
                    if (card.position === 'Midfielder' && MIDSelected) {return true}
                    if (card.position === 'Forward' && FORSelected) {return true}
                    }
            )

            //FILTER BY ZONE
            const commonCardsFilteredByZone = commonCardsFilteredPosition.filter(
                (card) => {
                    if (zoneSelected === 'all') {return true} else {
                        if (card.championEurope && zoneSelected === 'champion-europe') {return true}
                        if (card.challengerEurope && zoneSelected === 'challenger-europe') {return true}
                        if (card.championAsia && zoneSelected === 'champion-asia') {return true}
                        if (card.championAmerica && zoneSelected === 'champion-america') {return true}
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
                (card) => {
                    if (card.rarity === 'limited' && limitedSelected) {return true}
                        }
                    )

            //FILTER BY POSITION
            const limitedCardsFilteredPosition = limitedCards.filter(
                (card) => {
                    if (card.position === 'Goalkeeper' && GOASelected) {return true}
                    if (card.position === 'Defender' && DEFSelected) {return true}
                    if (card.position === 'Midfielder' && MIDSelected) {return true}
                    if (card.position === 'Forward' && FORSelected) {return true}
                }
            )

            //FILTER BY ZONE
            const limitedCardsFilteredByZone = limitedCardsFilteredPosition.filter(
                (card) => {

                    if (zoneSelected === 'all') {return true} else {
                        if (card.championEurope && zoneSelected === 'champion-europe') {return true}
                        if (card.challengerEurope && zoneSelected === 'challenger-europe') {return true}
                        if (card.championAsia && zoneSelected === 'champion-asia') {return true}
                        if (card.championAmerica && zoneSelected === 'champion-america') {return true}
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
                (card) => {
                    if (card.rarity === 'rare' && rareSelected) {return true}
                        }
                    )
    
            //FILTER BY POSITION
            const rareCardsFilteredPosition = rareCards.filter(
                (card) => {
                    if (card.position === 'Goalkeeper' && GOASelected) {return true}
                    if (card.position === 'Defender' && DEFSelected) {return true}
                    if (card.position === 'Midfielder' && MIDSelected) {return true}
                    if (card.position === 'Forward' && FORSelected) {return true}
                }
            )
    
            //FILTER BY ZONE
            const rareCardsFilteredByZone = rareCardsFilteredPosition.filter(
                (card) => {
    
                    if (zoneSelected === 'all') {return true} else {
                        if (card.championEurope && zoneSelected === 'champion-europe') {return true}
                        if (card.challengerEurope && zoneSelected === 'challenger-europe') {return true}
                        if (card.championAsia && zoneSelected === 'champion-asia') {return true}
                        if (card.championAmerica && zoneSelected === 'champion-america') {return true}
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
                (card) => {
                    if (card.rarity === 'super_rare' && superRareSelected) {return true}
                        }
                    )

            //FILTER BY POSITION
            const superRareCardsFilteredPosition = superRareCards.filter(
                (card) => {
                    if (card.position === 'Goalkeeper' && GOASelected) {return true}
                    if (card.position === 'Defender' && DEFSelected) {return true}
                    if (card.position === 'Midfielder' && MIDSelected) {return true}
                    if (card.position === 'Forward' && FORSelected) {return true}
                }
            )

            //FILTER BY ZONE
            const superRareCardsFilteredByZone = superRareCardsFilteredPosition.filter(
                (card) => {

                    if (zoneSelected === 'all') {return true} else {
                        if (card.championEurope && zoneSelected === 'champion-europe') {return true}
                        if (card.challengerEurope && zoneSelected === 'challenger-europe') {return true}
                        if (card.championAsia && zoneSelected === 'champion-asia') {return true}
                        if (card.championAmerica && zoneSelected === 'champion-america') {return true}
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
                (card) => {
                    if (card.rarity === 'unique' && uniqueSelected) {return true}
                        }
                    )

            //FILTER BY POSITION
            const uniqueCardsFilteredPosition = uniqueCards.filter(
                (card) => {
                    if (card.position === 'Goalkeeper' && GOASelected) {return true}
                    if (card.position === 'Defender' && DEFSelected) {return true}
                    if (card.position === 'Midfielder' && MIDSelected) {return true}
                    if (card.position === 'Forward' && FORSelected) {return true}
                }
            )

            //FILTER BY ZONE
            const uniqueCardsFilteredByZone = uniqueCardsFilteredPosition.filter(
                (card) => {
                    if (zoneSelected === 'all') {return true} else {
                        if (card.championEurope && zoneSelected === 'champion-europe') {return true}
                        if (card.challengerEurope && zoneSelected === 'challenger-europe') {return true}
                        if (card.championAsia && zoneSelected === 'champion-asia') {return true}
                        if (card.championAmerica && zoneSelected === 'champion-america') {return true}
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