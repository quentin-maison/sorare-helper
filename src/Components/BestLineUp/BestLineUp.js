import React from 'react';
import './BestLineUp.css'


export function BestLineUp(props) {

    
    return (
        <div className="">
            <p>{props.divisionSelected}</p>
            <p>{props.leagueSelected}</p>
        </div>
    );
}
