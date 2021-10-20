import React from 'react'


export function LeagueSelector (props) {

    const handleLeagueChange = (e) => {
        props.handleLeagueChange(e.target.value)
    }

    return (
        <div className="league-selector">
            <label for="league-choice">
                Division:
                <select onChange={handleLeagueChange} id="league-choice">
                    <option value="global-all-star" selected>Global All Star</option>
                    <option value="champion-europe">Champion Europe</option>
                    <option value="challenger-europe">Challenger Europe</option>
                    <option value="champion-america">Champion America</option>
                    <option value="champion-asia">Champion Asia</option>
                </select>
            </label>
        </div>

    );
}
