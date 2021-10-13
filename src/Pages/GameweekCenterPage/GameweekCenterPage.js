import React, {useState} from 'react';

import {DivisionSelector} from '../../Components/DivisionSelector/DivisionSelector';
import {LeagueSelector} from '../../Components/LeagueSelector/LeagueSelector';
import {BestLineUp} from '../../Components/BestLineUp/BestLineUp';
import './GameweekCenterPage.css';

export function GameweekCenterPage() {

    const [division, setDivision] = useState('d5')
    const [league, setLeague] = useState('global-all-star')

    const handleDivisionChange = (newDivision) => {
        setDivision(newDivision)
    }

    const handleLeagueChange = (newLeague) => {
        setLeague(newLeague)
    }




    return (
        <div className="gameweek-center-page">

            <div className="gameweek-center-page-header">
                <h2>GAMEWEEK CENTER</h2>
                <p>Next gameweek infos</p>
            </div>

            <div className="division-league-selectors">
                <DivisionSelector handleDivisionChange={handleDivisionChange}/>
                <LeagueSelector handleLeagueChange={handleLeagueChange}/>
            </div>

            <div className="best-line-up">
                <h3>BEST LINE-UP</h3>
                <BestLineUp divisionSelected={division} leagueSelected={league}/>
            </div>

            
            
        </div>
    );    
}