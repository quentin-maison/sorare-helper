import React from 'react'

//CSS
import './BestTeamCard.css'

/*IMPORT TEMPLATE CARDS IMAGE*/
import templateLimited from '../../resources/images/template-cards/template-limited.png'
import templateRare from '../../resources/images/template-cards/template-rare.png'
import templateSuperRare from '../../resources/images/template-cards/template-super-rare.png'
import templateUnique from '../../resources/images/template-cards/template-unique.png'
import templateUnavailable from '../../resources/images/template-cards/template-unavailable.png'


//ICONE CAPITAINE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export function BestTeamCard (props) {

    let cardImg ;
    if (props.card.scarcity === 'limited') {cardImg = templateLimited}
    if (props.card.scarcity === 'rare') {cardImg = templateRare}
    if (props.card.scarcity === 'super-rare') {cardImg = templateSuperRare}
    if (props.card.scarcity === 'unique') {cardImg = templateUnique}
    if (props.card.scarcity === 'No Player available') {cardImg = templateUnavailable}

    let classNameScore ;
    if (props.card.expectedScore >= 0 && props.card.expectedScore < 30) {classNameScore = 'best-team-card-attribute player-score-blupage player-score-low-blupage'}
    if (props.card.expectedScore >= 30 && props.card.expectedScore < 60) {classNameScore = 'best-team-card-attribute player-score-blupage player-score-medium-blupage'}
    if (props.card.expectedScore >= 60 && props.card.expectedScore < 75) {classNameScore = 'best-team-card-attribute player-score-blupage player-score-high-blupage'}
    if (props.card.expectedScore >= 75 && props.card.expectedScore < 1000) {classNameScore = 'best-team-card-attribute player-score-blupage player-score-very-high-blupage'}


    let bonusPerScarcity;
    if (props.card.scarcity === 'limited') {bonusPerScarcity = '0%'}
    if (props.card.scarcity === 'rare') {bonusPerScarcity = '0%'}
    if (props.card.scarcity === 'super-rare') {bonusPerScarcity = '20%'}
    if (props.card.scarcity === 'unique') {bonusPerScarcity = '50%'}
    if (props.card.scarcity === 'No Player available') {bonusPerScarcity = '0%'}



    let titleImg ;
    if (props.card.isCaptain) {titleImg = `Player Score = Score (${props.card.score}) * Bonus XP (${props.card.xp}%) * Bonus Scarcity (${bonusPerScarcity}) * Captain Bonus (20%)`}
    if (!props.card.isCaptain) {titleImg = `Player Score = Score (${props.card.score}) * Bonus XP (${props.card.xp}%) * Bonus Scarcity (${bonusPerScarcity})`}


    let className = 'best-team-card-container' ;
    if (props.card.isCaptain) {className = 'best-team-card-container best-team-card-container-isCaptain'}

    return (
        <div className={className}>

            <div className='best-team-card-attribute'><b>{props.card.isCaptain ? <FontAwesomeIcon icon={faStar}/> : ''} {props.position}</b></div>
            <div className='best-team-card-attribute best-team-card-name'>{props.card.name}</div>
            <div className='best-team-card-attribute'><img src={cardImg} alt='player picture' title={titleImg}/></div>
            <div className={classNameScore}>{Math.floor(props.card.expectedScore)}</div>

        </div>

    );
}