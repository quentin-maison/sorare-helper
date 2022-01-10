import React, {useState} from 'react'

//CHECKBOX
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// eslint-disable-next-line
export function PositionSelector(props: any) {
        
    //GOALS
    const [GOASelection, setGOASelection] = useState(true)
    function handleGOASelection () {
        if (GOASelection) {
            setGOASelection(false)
            props.handleGOASelection(false)
        } else {
            setGOASelection(true)
            props.handleGOASelection(true)
        }
    }

    //DEFENDERS
    const [DEFSelection, setDEFSelection] = useState(true)
    function handleDEFSelection () {
        if (DEFSelection) {
            setDEFSelection(false)
            props.handleDEFSelection(false)
        } else {
            setDEFSelection(true)
            props.handleDEFSelection(true)
        }
    }

    //MIDFIELDERS
    const [MIDSelection, setMIDSelection] = useState(true)
    function handleMIDSelection () {
        if (MIDSelection) {
            setMIDSelection(false)
            props.handleMIDSelection(false)
        } else {
            setMIDSelection(true)
            props.handleMIDSelection(true)
        }
    }

    //FORWARDS
    const [FORSelection, setFORSelection] = useState(true)
    function handleFORSelection () {
        if (FORSelection) {
            setFORSelection(false)
            props.handleFORSelection(false)
        } else {
            setFORSelection(true)
            props.handleFORSelection(true)
        }
    }


    return (
        <div style={{color: 'rgb(39, 39, 39, 0.8)', width: '250px'}}>
            <div className='selector-title'>SELECT POSITION</div>

            <FormGroup style={{marginTop: '15px'}}>
                <FormControlLabel control={<Checkbox onChange={handleGOASelection} defaultChecked/>} label="Goalkeepers" />
                <FormControlLabel control={<Checkbox onChange={handleDEFSelection} defaultChecked/>} label="Defenders" />
                <FormControlLabel control={<Checkbox onChange={handleMIDSelection} defaultChecked/>} label="Midfielders" />
                <FormControlLabel control={<Checkbox onChange={handleFORSelection} defaultChecked/>} label="Forwards" />
            </FormGroup>





        </div>

    );
}