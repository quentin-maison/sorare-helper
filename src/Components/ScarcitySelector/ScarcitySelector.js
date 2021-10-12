import React from 'react';
import './ScarcitySelector.css'

export function ScarcitySelector(props) {

    function handleLimitedChange() {
        props.handleLimitedChange()
    }

    function handleRareChange() {
        props.handleRareChange()
    }

    function handleSuperRareChange() {
        props.handleSuperRareChange()
    }

    function handleUniqueChange() {
        props.handleUniqueChange()
    }
    
    return (
        <div className="scarcity-selector">
            <label>Limited 
                <input type="checkbox" name="scarcity" onChange={handleLimitedChange} defaultChecked/>
            </label>
            <label>Rare 
                <input type="checkbox" name="scarcity" onChange={handleRareChange} defaultChecked/>
            </label>
            <label>Super-rare 
                <input type="checkbox" name="scarcity" onChange={handleSuperRareChange} defaultChecked/>
            </label>
            <label>Unique 
                <input type="checkbox" name="scarcity" onChange={handleUniqueChange} defaultChecked/>
            </label>
        </div>
    );
}