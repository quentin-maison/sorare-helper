import React from 'react';
import './DivisionSelector.css'

export function DivisionSelector(props) {

    const handleDivisionChange = (e) => {
        props.handleDivisionChange(e.target.value)
    }
    
    return (
        <div className="division-selector">
            <label>
                Division:
                <select onChange={handleDivisionChange}>
                    <option value="d5">D5</option>
                    <option value="d4">D4</option>
                    <option value="d3">D3</option>
                    <option value="d2">D2</option>
                    <option value="d1">D1</option>
                </select>
            </label>
        </div>
    );
}