import React from 'react';


export function LeagueSelector(props) {

    const handleLeagueChange = (e) => {
        props.handleLeagueChange(e.target.value)
    }
    
    return (
        <div className="league-selector">
            <label>
                League:
                <select onChange={handleLeagueChange}>
                    <option value="global-all-star">Global All Star</option>
                    <option value="u23">Ligue U23</option>
                    <option value="champion-europe">Ligue Champion Europe</option>
                    <option value="challenger-europe">Ligue Challenger Europe</option>
                    <option value="champion-america">Ligue Champion America</option>
                    <option value="champion-asia">Ligue Champion Asia</option>
                </select>
            </label>
        </div>
    );
}
