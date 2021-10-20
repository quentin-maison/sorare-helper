import React from 'react'


export function DivisionSelector (props) {

    const handleDivisionChange = (e) => {
        props.handleDivisionChange(e.target.value)
    }

    return (
        <div className="division-selector">
            <label for="division-choice">
                Division:
                <select onChange={handleDivisionChange} id="division-choice">
                    <option value="d5" selected>D5</option>
                    <option value="d4">D4</option>
                    <option value="d3">D3</option>
                    <option value="d2">D2</option>
                    <option value="d1">D1</option>
                </select>
            </label>
        </div>

    );
}
