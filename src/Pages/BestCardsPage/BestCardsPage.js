import React, {useState} from 'react';

import {ScarcitySelector} from '../../Components/ScarcitySelector/ScarcitySelector'
import {GoalList} from '../../Components/Lists/GoalList'
import {DefenderList} from '../../Components/Lists/DefenderList'
import {MidfielderList} from '../../Components/Lists/MidfielderList'
import {ForwardList} from '../../Components/Lists/ForwardList'
import './BestCardsPage.css'



export function BestCardsPage(props) {
    const [limited, setLimited] = useState(true);
    const [rare, setRare] = useState(true);
    const [superRare, setSuperRare] = useState(true);
    const [unique, setUnique] = useState(true);

    const handleLimitedChange = () => {
        setLimited(!limited)
    }

    const handleRareChange = () => {
        setRare(!rare)
    }

    const handleSuperRareChange = () => {
        setSuperRare(!superRare)
    }

    const handleUniqueChange = () => {
        setUnique(!unique)
    }

    return (
        <div className="best-cards-page">

            <div className="best-cards-page-header">
                <h2>TOP CARDS PER POSITION</h2>
            </div>
            
            <div className="scarcity-selection">
                <ScarcitySelector
                                handleLimitedChange={handleLimitedChange}
                                handleRareChange={handleRareChange}
                                handleSuperRareChange={handleSuperRareChange}
                                handleUniqueChange={handleUniqueChange}/>
            </div>
            
            <div className="best-cards-container">
                <GoalList cardsList={props.cardsList} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
                <DefenderList cardsList={props.cardsList} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
                <MidfielderList cardsList={props.cardsList} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
                <ForwardList cardsList={props.cardsList} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
            </div>
            
        </div>
    );    
}