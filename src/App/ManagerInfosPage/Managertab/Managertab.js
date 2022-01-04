import React, {useState} from 'react'

//TOGGLE BUTTON
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



export function Managertab (props) {

    const [selectedTab, setSelectedTab] = useState('manager-cards')
    function handleChange (e) {
        props.updateSelectedTab(e.target.value)
        setSelectedTab(e.target.value)
    }

    return (
        <div id='manager-tab' style={{backgroundColor: 'rgb(39, 39, 39, 0.05)'}}>
            <ToggleButtonGroup
                size='large'
                style={{width: '100%', backgroundColor: 'white', height: '60px'}}
                color="primary"
                value={selectedTab}
                exclusive
                onChange={handleChange}>
                <ToggleButton disabled value='' style={{width: '6%', backgroundColor: 'rgb(39, 39, 39, 0.05)'}}></ToggleButton>
                <ToggleButton value="manager-cards" style={{minWidth: '150px'}}>CARDS</ToggleButton>
                <ToggleButton value="best-lineup" style={{minWidth: '150px'}}>BEST LINE-UP</ToggleButton>
                <ToggleButton disabled value='' style={{width: '100%', backgroundColor: 'rgb(39, 39, 39, 0.05)'}}></ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}