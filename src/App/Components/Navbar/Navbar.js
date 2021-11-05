import React from 'react'
import {NavLink} from 'react-router-dom';

//LOGO
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'


export function Navbar () {
    
    return (
        <nav>
            <div className='navbar-left'>
                <FontAwesomeIcon icon={faFutbol} className='logo'/> 
                <h1>SORARE HELPER</h1>
            </div>
            <div className='navbar-right'>
                <NavLink to="/best-cards">BEST CARDS</NavLink>
                <NavLink to="/best-lineup">BEST LINE-UP</NavLink>
            </div>

        </nav>


    );
}