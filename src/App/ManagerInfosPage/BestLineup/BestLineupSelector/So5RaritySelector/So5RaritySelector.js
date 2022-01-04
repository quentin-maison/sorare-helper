import React, {useState} from 'react'

//FORM
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function So5RaritySelector (props) {

    const [so5RaritySelected, setSo5RaritySelected] = useState('common');
    function handleRarityChange (event) {
        props.handleSo5RarityChange(event.target.value);
        setSo5RaritySelected(event.target.value)
    };
    
    return (
        <div style={{color: 'rgb(39, 39, 39, 0.8)', marginRight: '25px', marginBottom: '10px'}}>
            <FormControl style={{marginTop: '15px'}}>
                <InputLabel id="demo-simple-select-label">Rarity</InputLabel>
                    <Select
                        value={so5RaritySelected}
                        label="Rarity"
                        onChange={handleRarityChange}>
                        <MenuItem value={'common'}>Common</MenuItem>
                        <MenuItem value={'limited'}>Limited</MenuItem>
                        <MenuItem value={'rare'}>Rare</MenuItem>
                        <MenuItem value={'super_rare'}>Super Rare</MenuItem>
                        <MenuItem value={'unique'}>Unique</MenuItem>

                    </Select>
            </FormControl>
        </div>
    );
}

