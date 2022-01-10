import React, {useState} from 'react'

//FORM
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// eslint-disable-next-line
export function So5LeagueSelector (props: any) {

    const [so5LeagueSelected, setSo5LeagueSelected] = useState<string>('global-all-star')
    
    // eslint-disable-next-line
    function handleLeagueChange (event: any) {
        props.handleSo5LeagueChange(event.target.value)
        setSo5LeagueSelected(event.target.value)
    }
    
    return (
        <div style={{color: 'rgb(39, 39, 39, 0.8)', marginBottom: '10px'}}>
            <FormControl style={{marginTop: '15px'}}>
                <InputLabel id="demo-simple-select-label">League</InputLabel>
                    <Select
                        value={so5LeagueSelected}
                        label="League"
                        onChange={handleLeagueChange}>
                        <MenuItem value={'global-all-star'}>Global All Star</MenuItem>
                        <MenuItem value={'champion-europe'}>Champion Europe</MenuItem>
                        <MenuItem value={'challenger-europe'}>Challenger Europe</MenuItem>
                        <MenuItem value={'champion-asia'}>Champion Asia</MenuItem>
                        <MenuItem value={'champion-america'}>Champion America</MenuItem>
                        <MenuItem value={'u23'}>Under 23</MenuItem>

                    </Select>
            </FormControl>
        </div>
    );
}

