import React, {useState, useEffect} from 'react'

//COMPONENTS
import {LeagueSelector} from '../../Components/LeagueSelector/LeagueSelector'
import {DivisionSelector} from '../../Components/DivisionSelector/DivisionSelector'
import {BestTeam} from '../../Components/BestTeam/BestTeam'

//CSS
import './BestLineUpPage.css'

export function BestLineUpPage (props) {


    /*USER REQUEST CHANGE*/
    const [divisionSelected, setDivisionSelected] = useState('d5');
    const handleDivisionChange = (newDivision) => {
        setDivisionSelected(newDivision)
    }
    
    const [leagueSelected, setLeagueSelected] = useState('global-all-star');
    const handleLeagueChange = (newLeague) => {
        setLeagueSelected(newLeague)
    }
    
    
    /*DISPLAY GALLERY EFFET*/
    const [displayBestLineUp, setDisplayBestLineUp] = useState({display: 'none'})
    useEffect(
        () => {
    
            if (props.managerFound) {
                setDisplayBestLineUp({display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '8%', marginRight: '8%'})
            } else {
                setDisplayBestLineUp({display: 'none'})
            }
    
            }, [props.managerFound]
    )
    
    return (
        <div className='best-lineup-page' style={displayBestLineUp}>

            <div className='best-lineup-page-item best-lineup-page-infos'>
                <h2>BEST LINE UP</h2>
                <p>For GW {props.nextGWInfos.number}, starting {props.nextGWInfos.startingDate}</p>
            </div>

            <div className='best-lineup-page-item lineup-selectors'>
                <DivisionSelector handleDivisionChange={handleDivisionChange}/>
                <LeagueSelector handleLeagueChange={handleLeagueChange}/>            
            </div>

            <div className='best-lineup-page-item'>
                <BestTeam cardsList={props.cardsList} divisionSelected={divisionSelected} leagueSelected={leagueSelected}/>
            </div>

        </div>

    );
}