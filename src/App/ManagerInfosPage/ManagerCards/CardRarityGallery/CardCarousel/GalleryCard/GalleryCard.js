import React from 'react'

export function GalleryCard (props) {

    return (

        <div className='gallery-card' style={{width: '100px', margin: 'auto'}}>
            <img src={props.cardInfos.pictureUrl} alt={props.cardInfos.name} style={{width: '100%'}}/>
        </div>
    );
}