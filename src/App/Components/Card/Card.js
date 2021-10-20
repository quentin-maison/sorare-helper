import React, {useState, useEffect} from 'react';
import './Card.css'


/*IMPORT TEMPLATE CARDS IMAGE*/
import templateLimited from '../../../resources/images/template-cards/template-limited.png'
import templateRare from '../../../resources/images/template-cards/template-rare.png'
import templateSuperRare from '../../../resources/images/template-cards/template-super-rare.png'
import templateUnique from '../../../resources/images/template-cards/template-unique.png'

/*IMPORT TEMPLATE NATIONALITY*/
import templateFRA from '../../../resources/images/nationality/FRA.png'
import templateITA from '../../../resources/images/nationality/ITA.png'
import templateESP from '../../../resources/images/nationality/ESP.png'
import templateENG from '../../../resources/images/nationality/ENG.png'


export function Card (props) {
    
    const className = `${props.scarcity} card`
    const altText = `template ${props.scarcity} card`

    let cardImg ;
    if (props.scarcity === 'limited') {cardImg = templateLimited}
    if (props.scarcity === 'rare') {cardImg = templateRare}
    if (props.scarcity === 'super-rare') {cardImg = templateSuperRare}
    if (props.scarcity === 'unique') {cardImg = templateUnique}

    let nationalityImg ;
    if (props.nationality === 'FRA') {nationalityImg = templateFRA}
    if (props.nationality === 'ITA') {nationalityImg = templateITA}
    if (props.nationality === 'ESP') {nationalityImg = templateESP}
    if (props.nationality === 'ENG') {nationalityImg = templateENG}

    let classNameScore ;
    if (props.score > 0 && props.score < 30) {classNameScore = 'player-score player-score-low'}
    if (props.score >= 30 && props.score < 60) {classNameScore = 'player-score player-score-medium'}
    if (props.score >= 60 && props.score < 75) {classNameScore = 'player-score player-score-high'}
    if (props.score >= 75 && props.score < 1000) {classNameScore = 'player-score player-score-very-high'}
   
    
    
    
    
    return(

        <div className={className}>
            <div className="card-image">
                <img src={cardImg} alt={altText}/>
            </div>

            <div className="card-infos">
                <div><b>{props.name}</b></div>
                <div>Club Actuel</div>
                <div>
                    <img src={nationalityImg} alt="alt text"/>
                    {props.u23 ? "u23" : ""}
                </div>
            </div>

            <div className="card-score">
                <div className={classNameScore}>{props.score}</div>
            </div>
        </div>
    )
}