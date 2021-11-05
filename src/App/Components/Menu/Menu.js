import React from 'react'

//COMPONENTS
import {Navbar} from '../Navbar/Navbar'
import {Searchbar} from '../Searchbar/Searchbar'

//CSS
import './Menu.css'

export function Menu (props) {
    
    
    return (
        <div className='menu'>
            <Navbar />
            <Searchbar handleManagerSearch={props.handleManagerSearch}/>
        </div>

    );
}