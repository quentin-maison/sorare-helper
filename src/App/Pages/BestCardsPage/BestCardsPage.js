import React, {useState, useEffect} from 'react'

/*COMPONENTS*/
import  {SearchManager} from '../../Components/SearchManager/SearchManager'
import {ScarcitySelector} from '../../Components/ScarcitySelector/ScarcitySelector'

import {GoalList} from '../../Components/PlayersLists/GoalList'
import {DefList} from '../../Components/PlayersLists/DefList'
import {MidList} from '../../Components/PlayersLists/MidList'
import {ForList} from '../../Components/PlayersLists/ForList'

/*CSS*/
import './BestCardsPage.css'


export function BestCardsPage (props) {


    const [displayGallery, setDisplayGallery] = useState({display: 'none'})




    const [limited, setLimited] = useState(true);
    const handleLimitedChange = () => {
        setLimited(!limited)
    }

    const [rare, setRare] = useState(true);
    const handleRareChange = () => {
        setRare(!rare)
    }

    const [superRare, setSuperRare] = useState(true);
    const handleSuperRareChange = () => {
        setSuperRare(!superRare)
    }

    const [unique, setUnique] = useState(true);
    const handleUniqueChange = () => {
        setUnique(!unique)
    }    


    /*DISPLAY GALLERY EFFECT*/

    useEffect(
        () => {
            if (props.managerFound) {
                setDisplayGallery({display: 'flex', flexDirection: 'column', alignItems: 'center'})
            } else {
                setDisplayGallery({display: 'none'})
            }

        }, [props.managerFound]
    )

    return (
        <div className="bestCards-page">

            <SearchManager setManager={props.setManager} handleManagerChange={props.handleManagerChange} manager={props.manager} managerFound={props.managerFound}/>

            <div className="gallery" style={displayGallery}>

                <div>
                    <h2>Gallery for manager '{props.manager}'</h2>
                </div>

                <div>
                    <ScarcitySelector 
                        handleLimitedChange={handleLimitedChange}
                        handleRareChange={handleRareChange}
                        handleSuperRareChange={handleSuperRareChange}
                        handleUniqueChange={handleUniqueChange}
                    />
                </div>


                <div className="player-list-container">
                    <GoalList cardsList={props.cardsList} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
                    <DefList cardsList={props.cardsList} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
                    <MidList cardsList={props.cardsList} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
                    <ForList cardsList={props.cardsList} limited={limited} rare={rare} superRare={superRare} unique={unique}/>

                </div>
            </div>
        </div>
    );
}