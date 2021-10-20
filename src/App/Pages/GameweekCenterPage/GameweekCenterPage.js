import React, {useState, useEffect} from 'react'

/*COMPONENTS*/
import {SearchManager} from '../../Components/SearchManager/SearchManager';
import {DivisionSelector} from '../../Components/DivisionSelector/DivisionSelector'
import {LeagueSelector} from '../../Components/LeagueSelector/LeagueSelector'

/*SUPPORT FUNCTIONS*/
import {filterCardsEligible} from '../../support-functions/filterCardsEligible'

export function GameweekCenterPage (props) {


    /*USER REQUEST CHANGE*/

    const [divisionSelected, setDivisionSelected] = useState('d5');
    const handleDivisionChange = (newDivision) => {
        setDivisionSelected(newDivision)
    }

    const [leagueSelected, setLeagueSelected] = useState('global-all-star');
    const handleLeagueChange = (newLeague) => {
        setLeagueSelected(newLeague)
    }


    /*DISPLAY GW CENTER*/
    const [displayGWCenter, setDisplayGWCenter] = useState({display: 'none'})
    useEffect(
        () => {
            if (props.managerFound) {
                setDisplayGWCenter({display: 'flex', flexDirection: 'column', alignItems: 'center'})
            } else {
                setDisplayGWCenter({display: 'none'})
            }

        }, [props.managerFound]
    )

    /*ELIGIBLE CARDS*/
    const [eligibleCards, setEligibleCards] = useState([])
    useEffect(
        () => {

            setEligibleCards(filterCardsEligible(props.cardsList, divisionSelected, leagueSelected))

            console.log(eligibleCards)
            

        }, [props.cardsList, divisionSelected, leagueSelected]
    )
    
    /*RETURN*/
    return (
        <div className="gameweekCenter-page">

            <SearchManager setManager={props.setManager} handleManagerChange={props.handleManagerChange} manager={props.manager} managerFound={props.managerFound}/>

            <div className="gameweekCenter" style={displayGWCenter}>

                <div>
                    <h2>GW XXX for manager '{props.manager}'</h2>
                </div>

                <div>
                    <DivisionSelector handleDivisionChange={handleDivisionChange}/>
                    <LeagueSelector handleLeagueChange={handleLeagueChange}/>
                </div>


                <div className="best-line-up-container">
                    <div>CARD 1</div>
                    <div>CARD 2</div>
                    <div>CARD 3</div>
                    <div>CARD 4</div>
                    <div>CARD 5</div>
                </div>
            </div>
        </div>
    );
}