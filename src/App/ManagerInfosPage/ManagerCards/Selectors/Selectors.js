import React, {useEffect, useState} from 'react'

//SELECTORS
import {ManagerCardSelectors} from './ManagerCardSelectors/ManagerCardSelectors'

//ACCORDION
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//CSS
import './Selectors.css'

export function Selectors (props) {


    return (
    <div style={{backgroundColor: 'rgb(39, 39, 39, 0.05)', color: 'rgb(80, 132, 211)', position: 'sticky', top:'65px', zIndex: '1'}}>
    <Accordion style={{backgroundColor: 'rgb(237, 244, 251)', color: 'rgb(80, 132, 211)'}}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography style={{fontSize: '12px', marginLeft: '6%'}} component={'div'}>
                Select cards infos
              
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography component={'div'}>
                    <ManagerCardSelectors 
                        handleZoneSelection={props.handleZoneSelection}
                        handleCommonSelection={props.handleCommonSelection}
                        handleLimitedSelection={props.handleLimitedSelection}
                        handleRareSelection={props.handleRareSelection}
                        handleSuperRareSelection={props.handleSuperRareSelection}
                        handleUniqueSelection={props.handleUniqueSelection}
                        handleGOASelection={props.handleGOASelection}
                        handleDEFSelection={props.handleDEFSelection}
                        handleMIDSelection={props.handleMIDSelection}
                        handleFORSelection={props.handleFORSelection}/>
                 
            </Typography>
        </AccordionDetails>
    </Accordion>
    </div>
    );
}