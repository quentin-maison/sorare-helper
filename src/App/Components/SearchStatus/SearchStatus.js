import React from 'react'

//CSS
import './SearchStatus.css'


//ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export function SearchStatus (props) {

    if (props.managerFound) {
        return <div className='search-status search-status-found'><FontAwesomeIcon icon={faCheck}/> Results for '{props.manager}'</div>
    }

    if (!props.managerFound && props.manager !== '') {
        return <div className='search-status search-status-not-found'><FontAwesomeIcon icon={faExclamationTriangle}/> No results found for '{props.manager}'. Please handle a new request</div>
    }

    else {
        return <div className='search-status search-status-no-search'><FontAwesomeIcon icon={faSearch}/> Enter manager name to access his data</div>
    }

}