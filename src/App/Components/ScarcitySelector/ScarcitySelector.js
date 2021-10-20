import React, {useState, useEffect} from 'react'
import './ScarcitySelector.css'

export function ScarcitySelector (props) {

    const [styleButtonLimited, setStyleButtonLimited] = useState('limited-button-on')
    const [styleButtonRare, setStyleButtonRare] = useState('rare-button-on')
    const [styleButtonSuperRare, setStyleButtonSuperRare] = useState('super-rare-button-on')
    const [styleButtonUnique, setStyleButtonUnique] = useState('unique-button-on')
    
    function handleLimitedChange() {
        props.handleLimitedChange()
        if (styleButtonLimited === 'limited-button-on') {
            setStyleButtonLimited('limited-button-off')
        } else {
            setStyleButtonLimited('limited-button-on')
        }
    }

    function handleRareChange() {
        props.handleRareChange()
        if (styleButtonRare === 'rare-button-on') {
            setStyleButtonRare('rare-button-off')
        } else {
            setStyleButtonRare('rare-button-on')
        }
    }

    function handleSuperRareChange() {
        props.handleSuperRareChange()
        if (styleButtonSuperRare === 'super-rare-button-on') {
            setStyleButtonSuperRare('super-rare-button-off')
        } else {
            setStyleButtonSuperRare('super-rare-button-on')
        }
    }

    function handleUniqueChange() {
        props.handleUniqueChange()
        if (styleButtonUnique === 'unique-button-on') {
            setStyleButtonUnique('unique-button-off')
        } else {
            setStyleButtonUnique('unique-button-on')
        }
    }


    
    return (
        <div className="scarcity-selector">
            <button class={styleButtonLimited} onClick={handleLimitedChange}>Limited</button>
            <button class={styleButtonRare} onClick={handleRareChange}>Rare</button>
            <button class={styleButtonSuperRare} onClick={handleSuperRareChange}>Super Rare</button>
            <button class={styleButtonUnique} onClick={handleUniqueChange}>Unique</button>    
        </div>
    );
}