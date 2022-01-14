import React, {useState} from 'react'

//ICONE
import StarIcon from '@mui/icons-material/Star';
import HelpIcon from '@mui/icons-material/Help';

import {CardInfosZoom} from '../../../../CardInfosZoom/CardInfosZoom'
import Popup from 'reactjs-popup';

// eslint-disable-next-line
export function BestLineupCard (props: any) {

    const [open, setOpen] = useState(false)
    function openPopup () {
        setOpen(true)
    }

    function closePopup () {
        setOpen(false)
    }
    

    if (props.card === undefined || props.card === null) {return (<div></div>);}

    
    //DEFINING CARD ALT IMG
    let altCardImg = 'Player card' ;
    if (
        props.card !== undefined &&
        Object.keys(props.card).includes('name') && props.card.name !== null && props.card.name !== '' 
    ) {
        altCardImg = `Card: ${props.card.name}`
    }

    //DEFINING CARD IMG
    const noCardImg = (
        <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: 'solid 1px gray', borderRadius: '10px'}}>
            <HelpIcon />
            <div style={{textAlign: 'center', marginTop: '20px'}}>No player eligible for the gameweek #{props.nextGWInfos.gameWeek}</div>
        </div>
    );

    let cardImg = noCardImg;
    if (
        props.card !== undefined && props.card !== null &&
        Object.keys(props.card).includes('pictureUrl') && props.card.pictureUrl !== null && props.card.pictureUrl !== undefined && props.card.pictureUrl !== ''  
        ) {
            cardImg = (
                <div>
                <Popup open={open} closeOnDocumentClick onClose={closePopup}>
                    <CardInfosZoom card={props.card} closePopup={closePopup}/>
                </Popup>
                <img className='clickable-element clickable-card' src={props.card.pictureUrl} alt={altCardImg} title={props.card.name} style={{width: '100%'}} onClick={openPopup}/>
                </div>
            )
        }

    
    
    //DEFINING EXPECTED SCORE
    let expectedScore = 0 ;
    if (Object.keys(props.card).includes('expectedScore')) {
        expectedScore = props.card.expectedScore 
        if (props.card.isCaptain) {expectedScore = expectedScore*1.2}
    } else {
        expectedScore = 0;
    }



    //DEFINING OWN CLUB ALT IMG
    let altClubImg = 'Club logo';
    if (
        props.card !== undefined &&
        Object.keys(props.card).includes('currentTeam') && props.card.currentTeam !== null &&
        Object.keys(props.card.currentTeam).includes('name') && props.card.currentTeam.name !== null
    ) {
        altClubImg = `Club logo: ${props.card.currentTeam.name}`
    }

    //DEFINING OWN CLUB IMG
    let clubImg = <HelpIcon style={{width: '25px'}}/>;
    if (
        props.card !== undefined &&
        Object.keys(props.card).includes('currentTeam') && props.card.currentTeam !== null &&
        Object.keys(props.card.currentTeam).includes('pictureUrl') && props.card.currentTeam.pictureUrl !== null && props.card.currentTeam.pictureUrl !== ''
    ) {
        clubImg = <img src={props.card.currentTeam.pictureUrl} alt={altClubImg} title={props.card.currentTeam.name} style={{width: '25px'}}/>
    }

    //DEFINING NEXT OPPONENT CLUB ALT IMG
    let altOpponentImg = '';
    if (
        props.card !== undefined &&
        Object.keys(props.card).includes('nextOpponent') && props.card.nextOpponent !== null &&
        Object.keys(props.card.nextOpponent).includes('name') && props.card.nextOpponent.name !== null
    ) {
        altOpponentImg = `Club logo: ${props.card.nextOpponent.name}`
    }

    //DEFINING NEXT OPPONENT CLUB IMG
    let opponentImg = <HelpIcon style={{width: '25px'}}/>;
    if (
        props.card !== undefined &&
        Object.keys(props.card).includes('nextOpponent') && props.card.nextOpponent !== null &&
        Object.keys(props.card.nextOpponent).includes('pictureUrl') && props.card.nextOpponent.pictureUrl !== null && props.card.nextOpponent.pictureUrl !== ''
    ) {
        opponentImg = <img src={props.card.nextOpponent.pictureUrl} alt={altOpponentImg} title={props.card.nextOpponent.name} style={{width: '25px'}}/>
    }

    
    return (

        <div style={{width: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: '10px', marginBottom: '10px'}}>
            
            <div style={{width: '100%', fontWeight: 600, fontSize: '26px', color: 'rgb(38, 38, 38)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
            {props.card.isCaptain ? <StarIcon style={{marginRight: '10px'}}/> : ''}{props.position}
            </div>  
            
            <div style={{width: '90%', marginTop: '10px', height: '290px'}}>
                {cardImg}
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', height: '50px'}}>
                <span style={{marginRight: '5px'}}>{clubImg}</span> - <span style={{marginLeft: '5px'}}>{opponentImg}</span>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', marginBottom: '10px'}}>
                <span style={{fontSize: '24px', fontWeight: 600, backgroundColor: 'rgb(38, 38, 38)', color: 'white', padding: '5px', paddingBottom: '8px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '8px'}}>{expectedScore.toFixed(0)}</span>
            </div>
        </div>

        
        
    );
}