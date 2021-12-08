import React, {useEffect, useState} from 'react'

//ICONE
import StarIcon from '@mui/icons-material/Star';
import HelpIcon from '@mui/icons-material/Help';

export function BestLineupCard (props) {

    if (props.card === undefined || props.card === null) {return (<div></div>);}
    
    let cardImg ;
    if (Object.keys(props.card).includes('pictureUrl')) {
        cardImg = <img src={props.card.pictureUrl} alt={props.card.name} style={{width: '100%'}}/>
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
    if (Object.keys(props.card).includes('currentTeam')) {
        if (Object.keys(props.card.currentTeam).includes('pictureUrl')) {
            if (props.card.currentTeam.pictureUrl.length > 10) {
                clubImg = <img src={props.card.currentTeam.pictureUrl} alt={props.card.currentTeam} style={{width: '15px'}}/>
            } else {clubImg = <HelpIcon style={{width: '20px'}}/>}
        } else {clubImg = <HelpIcon style={{width: '20px'}}/>}
    } else {clubImg = <HelpIcon style={{width: '20px'}}/>}

    if (Object.keys(props.card).includes('nextOpponent')) {
        if (Object.keys(props.card.nextOpponent).includes('pictureUrl')) {
            if (props.card.nextOpponent.pictureUrl.length > 10) {
                opponentImg = <img src={props.card.nextOpponent.pictureUrl} alt={props.card.nextOpponent.name} style={{width: '15px'}}/>
            } else {opponentImg = <HelpIcon style={{width: '20px'}}/>}
        } else {opponentImg = <HelpIcon style={{width: '20px'}}/>}
    } else {opponentImg = <HelpIcon style={{width: '20px'}}/>}

        
    return (

        <div style={{width: '110px', height: '270px', marginLeft: '10px', marginRight: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{height: '30px', fontWeight: 600, fontSize: '18px', color: 'rgb(38, 38, 38)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {props.card.isCaptain ? <StarIcon style={{marginRight: '10px'}}/> : ''}{props.position}
            </div>  
            <div style={{width: '100px', height: '180px'}}>
                {cardImg}
            </div>
            <div style={{height: '20px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <span style={{marginRight: '5px'}}>{clubImg}</span> - <span style={{marginLeft: '5px'}}>{opponentImg}</span>
            </div>
            <div style={{height: '30px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3px'}}>
                <span style={{backgroundColor: 'rgb(38, 38, 38)', color: 'white', paddingRight: '8px', paddingLeft: '8px', paddingTop: '3px', paddingBottom: '5px', borderRadius: '8px'}}>{expectedScore.toFixed(0)}</span>
            </div>
        </div>

        
        
    );
}