import React from 'react'
import './SearchManager.css'

import img from '../../../resources/images/ballon-foot.jpg'


export function SearchManager(props) {

    
    const updateManager = (e) => {
        props.setManager(e.target.value)
    }
    
    
    
    const handleManagerChange = (e) => {
        e.preventDefault();
        props.handleManagerChange(props.manager)
    }
    
    
    return (
        <div>
            <div className="search-manager">

                <div className="image-container">
                    
                    <img src={img} alt='Enter manager name'/>
                </div>

                <div className="form-container">
                <h3>Enter manager's name</h3>
                    <form onSubmit={handleManagerChange}>
                        <input type="text" onChange={updateManager} placeholder="Enter manager's name"/>
                        <input type="submit" className="submit-button"/>
                    </form>
                    <p>Results found for manager ''</p> 
                </div>

            </div>


            <div className="transition-search-bestCards-1"></div>
            <div className="transition-search-bestCards-2"></div>


        </div>
    );

}
