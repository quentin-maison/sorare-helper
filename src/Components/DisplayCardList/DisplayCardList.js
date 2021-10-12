import React, {useState} from 'react';
import {ScarcitySelector} from '../ScarcitySelector/ScarcitySelector'
import {GoalList} from '../Lists/GoalList'
import {DefenderList} from '../Lists/DefenderList'
import {MidfielderList} from '../Lists/MidfielderList'
import {ForwardList} from '../Lists/ForwardList'
import './DisplayCardList.css'

export function DisplayCardList(props) {
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
        

        <div className="card-gallery">
            <ScarcitySelector
                handleLimitedChange={handleLimitedChange}
                handleRareChange={handleRareChange}
                handleSuperRareChange={handleSuperRareChange}
                handleUniqueChange={handleUniqueChange}/>

            <div className="list-container">
                <GoalList cardsList={props.cardsList} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
                <DefenderList cardsList={props.cardsList} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
                <MidfielderList cardsList={props.cardsList} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
                <ForwardList cardsList={props.cardsList} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
            </div>
            
        </div>
        
        
        
        
    );
}