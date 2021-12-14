import React, {useState} from 'react'
import Popup from 'reactjs-popup';

import {CardInfosZoom} from '../../../../../CardInfosZoom/CardInfosZoom'


export function GalleryCard (props) {

    const altCardImg = `Card: ${props.cardInfos.name} `

    const [open, setOpen] = useState(false)
    function openPopup () {
        setOpen(true)
    }

    function closePopup () {
        setOpen(false)
    }



    return (

        <div className='gallery-card' style={{minWidth: '100px', maxWidth: '200px', width: '150px', margin: 'auto'}}>
            <Popup open={open} closeOnDocumentClick onClose={closePopup}>
                <CardInfosZoom card={props.cardInfos} closePopup={closePopup}/>
            </Popup>
            <img className='clickable-element clickable-card' src={props.cardInfos.pictureUrl} alt={altCardImg} title={props.cardInfos.name} style={{width: '100%'}} onClick={openPopup}/>
        </div>
    );
}