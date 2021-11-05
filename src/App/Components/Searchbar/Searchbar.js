import React, {useState} from 'react'

//ICONE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



export function Searchbar (props) {

    const [searchInput, setSearchInput] = useState('')
    const updateInput = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const handleSearch = (e) => {       
        e.preventDefault();
        props.handleManagerSearch(searchInput)
        setSearchInput('')
    } 
    
    return (
        <div className='searchbar'>
                <form onSubmit={handleSearch}>
                        <input type='text' onChange={updateInput} placeholder='Enter manager name' value={searchInput}/>
                        <button type='submit'><FontAwesomeIcon icon={faSearch}/></button>
                </form>
        </div>

    );
}