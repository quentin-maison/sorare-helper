import React from 'react'

export function GalleryCard (props) {

    const altCardImg = `Card: ${props.cardInfos.name} `
    
    return (

        <div className='gallery-card' style={{minWidth: '100px', maxWidth: '200px', width: '150px', margin: 'auto'}}>
            <img src={props.cardInfos.pictureUrl} alt={altCardImg} title={props.cardInfos.name} style={{width: '100%'}}/>
        </div>
    );
}