import React, {useState, useEffect} from 'react'

//COMPONENTS
import {So5RaritySelector} from './So5RaritySelector/So5RaritySelector'
import {So5LeagueSelector} from './So5LeagueSelector/So5LeagueSelector'

//MATERIAL UI
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


export function BestLineupSelector (props) {
    
    //NEXT GW INFOS
    const [nextGWNumber, setNextGWNumber] = useState('')
    const [nextGWStartDate, setNextGWStartDate] = useState('')
    const [nextGWEndDate, setNextGWEndDate] = useState('')
    
    useEffect(
        () => {

            if (typeof props.nextGWInfos.startDate === 'undefined') {
                return 
            }

            if (typeof props.nextGWInfos.startDate === 'null') {
                return
            }

            setNextGWNumber(props.nextGWInfos.gameWeek)

            let dateNextGWStart = new Date(props.nextGWInfos.startDate)
            let dateNextGWEnd = new Date(props.nextGWInfos.endDate)

            setNextGWStartDate(`${dateNextGWStart.getDate()} ${monthNames[dateNextGWStart.getMonth()]}`)
            setNextGWEndDate(`${dateNextGWEnd.getDate()} ${monthNames[dateNextGWEnd.getMonth()]}`)

        }, [props.nextGWInfos]
    )


    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap', marginLeft: '6%', marginRight: '6%', marginBottom: '45px'}}>

            <Item style={{fontSize: '22px', padding: '12px', backgroundColor: 'rgb(25, 118, 210)', color: 'white', marginRight: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Gameweek #{nextGWNumber}</Item>
            <Item style={{fontSize: '22px', padding: '12px', marginRight: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{nextGWStartDate} - {nextGWEndDate}</Item>
            <So5RaritySelector handleSo5RarityChange={props.handleSo5RarityChange}/>
            <So5LeagueSelector handleSo5LeagueChange={props.handleSo5LeagueChange}/>

        </div>
    );
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

  const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep' ,'oct', 'nov', 'dec']