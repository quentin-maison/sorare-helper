import React, {useState} from 'react'

//BUTTON
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

//SWITCHS
import {CommonSwitch, LimitedSwitch, RareSwitch, SuperRareSwitch, UniqueSwitch} from './Switchs'

export function RaritySelector(props) {

    const labelCommon = { inputProps: { 'aria-label': 'Common switch' } };
    const labelLimited = { inputProps: { 'aria-label': 'Limited switch' } };
    const labelRare = { inputProps: { 'aria-label': 'Rare switch' } };
    const labelSuperRare = { inputProps: { 'aria-label': 'SuperRare switch' } };
    const labelUnique = { inputProps: { 'aria-label': 'Unique switch' } };

    //COMMON
    const [commonSelected, setCommonSelected] = useState(true)
    function handleCommonChange() {
        if (commonSelected) {
            setCommonSelected(false)
            props.handleCommonSelection(false)
        }

        if (!commonSelected) {
            setCommonSelected(true)
            props.handleCommonSelection(true)
        }
    }

    //LIMITED
    const [limitedSelected, setLimitedSelected] = useState(true)
    function handleLimitedChange() {
        if (limitedSelected) {
            setLimitedSelected(false)
            props.handleLimitedSelection(false)
        }

        if (!limitedSelected) {
            setLimitedSelected(true)
            props.handleLimitedSelection(true)
        }
    }

    //RARE
    const [rareSelected, setRareSelected] = useState(true)
    function handleRareChange() {
        if (rareSelected) {
            setRareSelected(false)
            props.handleRareSelection(false)
        }

        if (!rareSelected) {
            setRareSelected(true)
            props.handleRareSelection(true)
        }
    }

    //SUPER-RARE
    const [superRareSelected, setSuperRareSelected] = useState(true)
    function handleSuperRareChange() {
        if (superRareSelected) {
            setSuperRareSelected(false)
            props.handleSuperRareSelection(false)
        }

        if (!superRareSelected) {
            setSuperRareSelected(true)
            props.handleSuperRareSelection(true)
        }
    }

    //UNIQUE
    const [uniqueSelected, setUniqueSelected] = useState(true)
    function handleUniqueChange() {
        if (uniqueSelected) {
            setUniqueSelected(false)
            props.handleUniqueSelection(false)
        }

        if (!uniqueSelected) {
            setUniqueSelected(true)
            props.handleUniqueSelection(true)
        }
    }

    return (
        <div style={{color: 'rgb(39, 39, 39, 0.8)', width: '250px'}}>
            <div className='selector-title'>SELECT RARITY</div>
            <FormGroup row={true} className='rarity-selector' style={{display: 'flex', flexDirection: 'column', marginTop: '15px'}}>
                <FormControlLabel className='rarity-button' control={<CommonSwitch {...labelCommon} onClick={handleCommonChange} size="small" defaultChecked />} label="Common" />
                <FormControlLabel className='rarity-button' control={<LimitedSwitch {...labelLimited} onClick={handleLimitedChange} size="small" defaultChecked />} label="Limited" />
                <FormControlLabel className='rarity-button' control={<RareSwitch {...labelRare} onClick={handleRareChange} size="small" defaultChecked />} label="Rare" />
                <FormControlLabel className='rarity-button' control={<SuperRareSwitch {...labelSuperRare} onClick={handleSuperRareChange} size="small" defaultChecked />} label="Super Rare" />
                <FormControlLabel className='rarity-button' control={<UniqueSwitch {...labelUnique} onClick={handleUniqueChange} size="small" defaultChecked />} label="Unique" />
            </FormGroup>

        </div>

    );
}