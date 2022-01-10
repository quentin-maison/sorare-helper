import React from 'react'

//SELECTORS
import {RaritySelector} from './RaritySelector/RaritySelector'
import {PositionSelector} from './PositionSelector/PositionSelector'
import {ZoneSelector} from './ZoneSelector/ZoneSelector'

// eslint-disable-next-line
export function ManagerCardSelectors (props: any) {

    return (

    <div style={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', marginLeft: '6%'}}> 

        <ZoneSelector 
            handleZoneSelection={props.handleZoneSelection}/>

        <RaritySelector 
            handleCommonSelection={props.handleCommonSelection}
            handleLimitedSelection={props.handleLimitedSelection}
            handleRareSelection={props.handleRareSelection}
            handleSuperRareSelection={props.handleSuperRareSelection}
            handleUniqueSelection={props.handleUniqueSelection}/>

        <PositionSelector 
            handleGOASelection={props.handleGOASelection}
            handleDEFSelection={props.handleDEFSelection}
            handleMIDSelection={props.handleMIDSelection}
            handleFORSelection={props.handleFORSelection}/>
        
        
    </div>

    );
}