import React, {useEffect, useState} from 'react'

//COMPONENTS
import {BestLineupCard} from './BestLineupCard/BestLineupCard'

//SUPPORT-FUNCTIONS
import { getTeamExpectedScore } from './support-functions/getTeamExpectedScore';

//MATERIAL UI
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';

//ICONE
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//CSS
import './BestLineupContainer.css'

// eslint-disable-next-line
export function BestLineupContainer (props: any) {
    
    //TEAM EXPECTED SCORE
    const [teamExpectedScore, setTeamExpectedScore] = useState(0)
    useEffect(
        () => {

            setTeamExpectedScore(getTeamExpectedScore(props.teamToDisplay))
        }, [props.teamToDisplay]
    )

    useEffect(
        () => {
            if (!props.displayTeam) {setTeamExpectedScore(0)}
        }, [props.displayTeam]
    )

    //ALERT
    const altertCard = <Alert severity="info" className='alert-blu-not-enough-cards'>Not enough eligible cards to align team</Alert> ;
    
    return (
        <div id='best-lineup-container'>

            <Paper elevation={4} style={{marginLeft: '6%',marginRight: '6%', borderTopLeftRadius: '16px', borderTopRightRadius:'16px', borderBottomLeftRadius: '16px', borderBottomRightRadius:'16px'}}>
                <div style={{backgroundColor: 'rgb(39, 39, 39)', color: 'white', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '12px', paddingBottom: '12px', borderTopLeftRadius: '16px', borderTopRightRadius:'16px'}}>
                    <span className='team-es-title'>TEAM EXPECTED SCORE:</span> 
                    <span className='team-es-number'>{props.displayTeam ? teamExpectedScore.toFixed(0) : '0'}</span>
                    <span style={{marginLeft: '10px', alignSelf: 'flex-end'}}>{props.displayTeam ? <span style={{color: 'white'}}><ExpandMoreIcon onClick={props.handleDisplayLineupDetails} /></span> : ''}</span>
                </div>
                <div style={{backgroundColor: 'white', paddingTop: '28px', paddingBottom: '28px', borderBottomLeftRadius: '16px', borderBottomRightRadius:'16px'}}>
                    

                {
                    !props.displayTeam ? altertCard : 
                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginLeft: '5%', marginRight: '5%'}}>
                        <BestLineupCard card={props.teamToDisplay[0]} nextGWInfos={props.nextGWInfos} key={0} position={'GOA'}/>
                        <BestLineupCard card={props.teamToDisplay[1]} nextGWInfos={props.nextGWInfos} key={1} position={'DEF'}/>
                        <BestLineupCard card={props.teamToDisplay[2]} nextGWInfos={props.nextGWInfos} key={2} position={'MID'}/>
                        <BestLineupCard card={props.teamToDisplay[3]} nextGWInfos={props.nextGWInfos} key={3} position={'FOR'}/>
                        <BestLineupCard card={props.teamToDisplay[4]} nextGWInfos={props.nextGWInfos} key={4} position={'EXT'}/>
                    </div>
                    
                }
                    
                    

                </div>

            </Paper>

        </div>
    );
}