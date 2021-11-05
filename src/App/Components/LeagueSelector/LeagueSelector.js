import React from 'react'

//CSS
import './LeagueSelector.css'

export function LeagueSelector (props) {

    const handleLeagueChange = (e) => {
        props.handleLeagueChange(e.target.value)
    }


    return (
        <div className='league-selector'>
                <select onChange={handleLeagueChange}>
                    <option value="global-all-star" defaultValue>Global All Star</option>
                    <option value="champion-europe">Champion Europe</option>
                    <option value="challenger-europe">Challenger Europe</option>
                    <option value="champion-america">Champion America</option>
                    <option value="champion-asia">Champion Asia</option>
                </select>
        </div>
    );
}