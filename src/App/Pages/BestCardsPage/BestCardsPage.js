import React, {useState, useEffect} from 'react'

//COMPONENTS
import {ScarcitySelector} from '../../Components/ScarcitySelector/ScarcitySelector'
import {PlayerList} from '../../Components/PlayerList/PlayerList'

//CSS
import './BestCardsPage.css'


export function BestCardsPage (props) {

    /*DISPLAY GALLERY EFFET*/
    const [displayGallery, setDisplayGallery] = useState({display: 'none'})
    useEffect(
        () => {

            if (props.managerFound) {
                setDisplayGallery({display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '8%', marginRight: '8%'})
            } else {
                setDisplayGallery({display: 'none'})
            }

        }, [props.managerFound]
    )


    /*SORT CARDS PER POSITION*/
    const [goalCards, setGoalCards] = useState([])
    const [defCards, setDefCards] = useState([])
    const [midCards, setMidCards] = useState([])
    const [forCards, setForCards] = useState([])

    useEffect(
        () => {

            if (props.cardsList) {
                setGoalCards(props.cardsList.filter((card) => card.position === 'GOA'))
                setDefCards(props.cardsList.filter((card) => card.position === 'DEF'))
                setMidCards(props.cardsList.filter((card) => card.position === 'MID'))
                setForCards(props.cardsList.filter((card) => card.position === 'FOR'))


            }
        }, [props.cardsList]
    )


    /*HANDLE SCARCITY SELECTION*/
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
    
    return (
        <div clasName='best-cards-page' style={displayGallery}>

            <div className='best-cards-page-item'>
                <h2>PLAYER GALLERY</h2>
            </div>

            <div className='best-cards-page-item'>
                <ScarcitySelector 
                    handleLimitedChange={handleLimitedChange}
                    handleRareChange={handleRareChange}
                    handleSuperRareChange={handleSuperRareChange}
                    handleUniqueChange={handleUniqueChange}/>
            </div>

            <div className='best-cards-page-item best-cards-page-item-player-gallery'>
                <PlayerList cards={goalCards} position={'GOALS'} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
                <PlayerList cards={defCards} position={'DEFENDERS'} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
                <PlayerList cards={midCards} position={'MIDFIELDERS'} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
                <PlayerList cards={forCards} position={'FORWARDS'} limited={limited} rare={rare} superRare={superRare} unique={unique}/>
            </div>

        </div>

    );
}