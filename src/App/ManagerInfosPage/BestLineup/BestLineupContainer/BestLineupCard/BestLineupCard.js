import React, {useEffect, useState} from 'react'

//ICONE
import StarIcon from '@mui/icons-material/Star';
import HelpIcon from '@mui/icons-material/Help';

import {CardInfosZoom} from '../../../../CardInfosZoom/CardInfosZoom'
import Popup from 'reactjs-popup';

export function BestLineupCard (props) {



    const [open, setOpen] = useState(false)
    function openPopup () {
        setOpen(true)
    }

    function closePopup () {
        setOpen(false)
    }
    

    if (props.card === undefined || props.card === null) {return (<div></div>);}

    
    let cardImg ;
    let altCardImg ;
    if (Object.keys(props.card).includes('pictureUrl')) {
        altCardImg = `Card: ${props.card.name}`
        cardImg = (
            <div>
            <Popup open={open} closeOnDocumentClick onClose={closePopup}>
                <CardInfosZoom card={props.card} closePopup={closePopup}/>
            </Popup>
            <img className='clickable-element clickable-card' src={props.card.pictureUrl} alt={altCardImg} title={props.card.name} style={{width: '100%'}} onClick={openPopup}/>
            </div>
        );
    } else {
        cardImg = (
                <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <HelpIcon />
                    <div style={{textAlign: 'center', marginTop: '20px'}}>No Player Available</div>
                </div>
        )       
    }

    let expectedScore ;
    if (Object.keys(props.card).includes('expectedScore')) {
        expectedScore = props.card.expectedScore 
        if (props.card.isCaptain) {expectedScore = expectedScore*1.2}
    } else {
        expectedScore = 0;
    }

    let clubImg ;
    let opponentImg ;
    let altClubImg ;
    let altOpponentImg ;
    if (Object.keys(props.card).includes('currentTeam')) {
        if (Object.keys(props.card.currentTeam).includes('pictureUrl')) {
            if (props.card.currentTeam.pictureUrl.length > 10) {
                altClubImg = `Club logo: ${props.card.currentTeam.name}`
                clubImg = <img src={props.card.currentTeam.pictureUrl} alt={altClubImg} title={props.card.currentTeam.name} style={{width: '25px'}}/>
            } else {clubImg = <HelpIcon style={{width: '25px'}}/>}
        } else {clubImg = <HelpIcon style={{width: '25px'}}/>}
    } else {clubImg = <HelpIcon style={{width: '25px'}}/>}

    if (Object.keys(props.card).includes('nextOpponent')) {
        if (Object.keys(props.card.nextOpponent).includes('pictureUrl')) {
            if (props.card.nextOpponent.pictureUrl.length > 10) {
                altOpponentImg = `Club logo: ${props.card.nextOpponent.name}`
                opponentImg = <img src={props.card.nextOpponent.pictureUrl} alt={altOpponentImg} title={props.card.nextOpponent.name} style={{width: '25px'}}/>
            } else {opponentImg = <HelpIcon style={{width: '25px'}}/>}
        } else {opponentImg = <HelpIcon style={{width: '25px'}}/>}
    } else {opponentImg = <HelpIcon style={{width: '25px'}}/>}

    
    
    
    
    return (

        <div style={{width: '15%', minWidth: '150px', marginLeft: '2%', marginRight: '2%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            
            <div style={{padding: '8px', fontWeight: 600, fontSize: '26px', color: 'rgb(38, 38, 38)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {props.card.isCaptain ? <StarIcon style={{marginRight: '10px'}}/> : ''}{props.position}
            </div>  
            
            <div style={{width: '90%', minHeight: '66%'}}>
                {cardImg}
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                <span style={{marginRight: '5px'}}>{clubImg}</span> - <span style={{marginLeft: '5px'}}>{opponentImg}</span>
            </div>
            <div style={{height: '30px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '12px'}}>
                <span style={{fontSize: '24px', fontWeight: 600, backgroundColor: 'rgb(38, 38, 38)', color: 'white', padding: '5px', paddingBottom: '8px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '8px'}}>{expectedScore.toFixed(0)}</span>
            </div>
        </div>

        
        
    );
}