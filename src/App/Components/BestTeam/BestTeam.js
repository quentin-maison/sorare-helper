import React, {useState, useEffect} from 'react'

//COMPONENTS
import {BestTeamCard} from './BestTeamCard'

//SUPPORT-FUNCTIONS
import {getTeamExpectedScore} from '../../support-functions/getTeamExpectedScore'
import {bestTeamDivision5} from '../../support-functions/bestTeamPerDivision/bestTeamDivision5'
import {bestTeamDivision4} from '../../support-functions/bestTeamPerDivision/bestTeamDivision4'
import {bestTeamDivision3} from '../../support-functions/bestTeamPerDivision/bestTeamDivision3'
import {bestTeamDivision2} from '../../support-functions/bestTeamPerDivision/bestTeamDivision2'
import {bestTeamDivision1} from '../../support-functions/bestTeamPerDivision/bestTeamDivision1'

import {unavailablePlayerArray} from '../../support-functions/unavailablePlayer'

//CSS
import './BestTeam.css'




export function BestTeam (props) {

    const [goalToDisplay, setGoalToDisplay] = useState([unavailablePlayerArray[0]])
    const [defToDisplay, setDefToDisplay] = useState([unavailablePlayerArray[1]])
    const [midToDisplay, setMidToDisplay] = useState([unavailablePlayerArray[2]])
    const [forToDisplay, setForToDisplay] = useState([unavailablePlayerArray[3]])
    const [extToDisplay, setExtToDisplay] = useState([unavailablePlayerArray[4]])



    useEffect(
        () => {

            if (props.cardsList.length === 0) {
                return ;
            } else {

                let cardsListArray = props.cardsList;

                if (props.divisionSelected === 'd5') {
                    let cardsToDisplay = bestTeamDivision5(cardsListArray, props.leagueSelected)

                    if (cardsToDisplay !== undefined) {
                        setGoalToDisplay(cardsToDisplay[0])
                        setDefToDisplay(cardsToDisplay[1])
                        setMidToDisplay(cardsToDisplay[2])
                        setForToDisplay(cardsToDisplay[3])
                        setExtToDisplay(cardsToDisplay[4])
                    } else {
                        setGoalToDisplay(unavailablePlayerArray[0])
                        setDefToDisplay(unavailablePlayerArray[1])
                        setMidToDisplay(unavailablePlayerArray[2])
                        setForToDisplay(unavailablePlayerArray[3])
                        setExtToDisplay(unavailablePlayerArray[4])
                    }
                }

                if (props.divisionSelected === 'd4') {
                    let cardsToDisplay = bestTeamDivision4(cardsListArray, props.leagueSelected)

                    if (cardsToDisplay !== undefined) {
                        setGoalToDisplay(cardsToDisplay[0])
                        setDefToDisplay(cardsToDisplay[1])
                        setMidToDisplay(cardsToDisplay[2])
                        setForToDisplay(cardsToDisplay[3])
                        setExtToDisplay(cardsToDisplay[4])
                    } else {
                        setGoalToDisplay(unavailablePlayerArray[0])
                        setDefToDisplay(unavailablePlayerArray[1])
                        setMidToDisplay(unavailablePlayerArray[2])
                        setForToDisplay(unavailablePlayerArray[3])
                        setExtToDisplay(unavailablePlayerArray[4])
                    }
                }

                if (props.divisionSelected === 'd3') {
                    let cardsToDisplay = bestTeamDivision3(cardsListArray, props.leagueSelected)

                    if (cardsToDisplay !== undefined) {
                        setGoalToDisplay(cardsToDisplay[0])
                        setDefToDisplay(cardsToDisplay[1])
                        setMidToDisplay(cardsToDisplay[2])
                        setForToDisplay(cardsToDisplay[3])
                        setExtToDisplay(cardsToDisplay[4])
                    } else {
                        setGoalToDisplay(unavailablePlayerArray[0])
                        setDefToDisplay(unavailablePlayerArray[1])
                        setMidToDisplay(unavailablePlayerArray[2])
                        setForToDisplay(unavailablePlayerArray[3])
                        setExtToDisplay(unavailablePlayerArray[4])
                    }
                }

                if (props.divisionSelected === 'd2') {
                    let cardsToDisplay = bestTeamDivision2(cardsListArray, props.leagueSelected)

                    if (cardsToDisplay !== undefined) {
                        setGoalToDisplay(cardsToDisplay[0])
                        setDefToDisplay(cardsToDisplay[1])
                        setMidToDisplay(cardsToDisplay[2])
                        setForToDisplay(cardsToDisplay[3])
                        setExtToDisplay(cardsToDisplay[4])
                    } else {
                        setGoalToDisplay(unavailablePlayerArray[0])
                        setDefToDisplay(unavailablePlayerArray[1])
                        setMidToDisplay(unavailablePlayerArray[2])
                        setForToDisplay(unavailablePlayerArray[3])
                        setExtToDisplay(unavailablePlayerArray[4])
                    }
                }

                if (props.divisionSelected === 'd1') {
                    let cardsToDisplay = bestTeamDivision1(cardsListArray, props.leagueSelected)

                    if (cardsToDisplay !== undefined) {
                        setGoalToDisplay(cardsToDisplay[0])
                        setDefToDisplay(cardsToDisplay[1])
                        setMidToDisplay(cardsToDisplay[2])
                        setForToDisplay(cardsToDisplay[3])
                        setExtToDisplay(cardsToDisplay[4])
                    } else {
                        setGoalToDisplay(unavailablePlayerArray[0])
                        setDefToDisplay(unavailablePlayerArray[1])
                        setMidToDisplay(unavailablePlayerArray[2])
                        setForToDisplay(unavailablePlayerArray[3])
                        setExtToDisplay(unavailablePlayerArray[4])
                    }
                }
            }
        }, [props.cardsList, props.divisionSelected, props.leagueSelected]
    )


    const [teamExpectedScore, setTeamExpectedScore] = useState(0)
    useEffect(
        () => {

            const teamToDisplay = [goalToDisplay, defToDisplay, midToDisplay, forToDisplay, extToDisplay]
            setTeamExpectedScore(getTeamExpectedScore(teamToDisplay))

        }, [goalToDisplay, defToDisplay, midToDisplay, forToDisplay, extToDisplay]
    )





    return (

    <div>

        <div className='best-team-es-container'>
            TEAM EXPECTED SCORE: {teamExpectedScore}
        </div>



        <div className='best-team-container'>
            <BestTeamCard card={goalToDisplay} position={'GOAL'}/>
            <BestTeamCard card={defToDisplay} position={'DEFENDER'}/>
            <BestTeamCard card={midToDisplay} position={'MIDFIELDER'}/>
            <BestTeamCard card={forToDisplay} position={'FORWARD'}/>
            <BestTeamCard card={extToDisplay} position={'EXTRA'}/>
        </div>
    </div>

    );
}