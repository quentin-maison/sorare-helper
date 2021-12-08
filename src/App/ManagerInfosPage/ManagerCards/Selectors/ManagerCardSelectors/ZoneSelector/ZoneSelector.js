import React, {useEffect, useState} from 'react'


//BUTTON V2
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export function ZoneSelector(props) {


    //HANDLE SELECTION
    const [allSelected, setAllSelected] = useState(true)
    const [championEuropeSelected, setChampionEuropeSelected] = useState(false)
    const [challengerEuropeSelected, setChallengerEuropeSelected] = useState(false)
    const [championAmericaSelected, setChampionAmericaSelected] = useState(false)
    const [championAsiaSelected, setChampionAsiaSelected] = useState(false)

    function handleAllClick () {
        if (!allSelected) {
            props.handleZoneSelection('all')
            setAllSelected(true)
            setChampionEuropeSelected(false)
            setChallengerEuropeSelected(false)
            setChampionAmericaSelected(false)
            setChampionAsiaSelected(false)
        }
    }

    function handleChampionEuropeClick () {
        if (!championEuropeSelected) {
            props.handleZoneSelection('champion-europe')
            setAllSelected(false)
            setChampionEuropeSelected(true)
            setChallengerEuropeSelected(false)
            setChampionAmericaSelected(false)
            setChampionAsiaSelected(false)
        }
    }

    function handleChallengerEuropeClick () {
        if (!challengerEuropeSelected) {
            props.handleZoneSelection('challenger-europe')
            setAllSelected(false)
            setChampionEuropeSelected(false)
            setChallengerEuropeSelected(true)
            setChampionAmericaSelected(false)
            setChampionAsiaSelected(false)
        }
    }

    function handleChampionAmericaClick () {
        if (!championAmericaSelected) {
            props.handleZoneSelection('champion-america')
            setAllSelected(false)
            setChampionEuropeSelected(false)
            setChallengerEuropeSelected(false)
            setChampionAmericaSelected(true)
            setChampionAsiaSelected(false)
        }
    }

    function handleChampionAsiaClick () {
        if (!championAsiaSelected) {
            props.handleZoneSelection('champion-asia')
            setAllSelected(false)
            setChampionEuropeSelected(false)
            setChallengerEuropeSelected(false)
            setChampionAmericaSelected(false)
            setChampionAsiaSelected(true)
        }
    }
    
    //STYLE BUTTONS
    const [styleAllButton, setStyleAllButton] = useState('contained')
    const [styleChampionEuropeButton, setStyleChampionEuropeButton] = useState('outlined')
    const [styleChallengerEuropeButton, setStyleChallengerEuropeButton] = useState('outlined')
    const [styleChampionAmericaButton, setStyleChampionAmericaButton] = useState('outlined')
    const [styleChampionAsiaButton, setStyleChampionAsiaButton] = useState('outlined')
    

    useEffect(
        () => {

            if (allSelected) {
                setStyleAllButton('contained')
                setStyleChampionEuropeButton('outlined')
                setStyleChallengerEuropeButton('outlined')
                setStyleChampionAmericaButton('outlined')
                setStyleChampionAsiaButton('outlined')
            }
            if (championEuropeSelected) {
                setStyleAllButton('outlined')
                setStyleChampionEuropeButton('contained')
                setStyleChallengerEuropeButton('outlined')
                setStyleChampionAmericaButton('outlined')
                setStyleChampionAsiaButton('outlined')
            }

            if (challengerEuropeSelected) {
                setStyleAllButton('outlined')
                setStyleChampionEuropeButton('outlined')
                setStyleChallengerEuropeButton('contained')
                setStyleChampionAmericaButton('outlined')
                setStyleChampionAsiaButton('outlined')
            }
            if (championAmericaSelected) {
                setStyleAllButton('outlined')
                setStyleChampionEuropeButton('outlined')
                setStyleChallengerEuropeButton('outlined')
                setStyleChampionAmericaButton('contained')
                setStyleChampionAsiaButton('outlined')
            }
            if (championAsiaSelected) {
                setStyleAllButton('outlined')
                setStyleChampionEuropeButton('outlined')
                setStyleChallengerEuropeButton('outlined')
                setStyleChampionAmericaButton('outlined')
                setStyleChampionAsiaButton('contained')
            }

        }, [allSelected, championEuropeSelected, challengerEuropeSelected, championAmericaSelected, championAsiaSelected]
    )
   

    return (
        <div className='zone-selector' style={{color: 'rgb(39, 39, 39, 0.8)', width: '300px'}}>
            <div className='selector-title'>SELECT ZONE</div>

            <Stack spacing={2} direction="row" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>

                <Button variant={styleAllButton} onClick={handleAllClick} style={{width: '200px', marginTop: '10px', marginLeft: '0px'}}>GLOBAL ALL STAR</Button>
                <Button variant={styleChampionEuropeButton} onClick={handleChampionEuropeClick} style={{width: '200px', marginTop: '10px', marginLeft: '0px'}}>CHAMPION EUROPE</Button>
                <Button variant={styleChallengerEuropeButton} onClick={handleChallengerEuropeClick} style={{width: '200px', marginTop: '10px', marginLeft: '0px'}}>CHALLENGER EUROPE</Button>
                <Button variant={styleChampionAmericaButton} onClick={handleChampionAmericaClick} style={{width: '200px', marginTop: '10px', marginLeft: '0px'}}>CHAMPION AMERICA</Button>
                <Button variant={styleChampionAsiaButton} onClick={handleChampionAsiaClick} style={{width: '200px', marginTop: '10px', marginLeft: '0px'}}>CHAMPION ASIA</Button>
            </Stack>
        </div>
        
    );
}
