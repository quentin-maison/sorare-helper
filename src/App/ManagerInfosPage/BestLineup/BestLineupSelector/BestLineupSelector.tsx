import React, {useState, useEffect} from 'react'

//COMPONENTS
import {So5RaritySelector} from './So5RaritySelector/So5RaritySelector'
import {So5LeagueSelector} from './So5LeagueSelector/So5LeagueSelector'

//MATERIAL UI
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// eslint-disable-next-line
export function BestLineupSelector (props: any) {
    
    //NEXT GW INFOS
    const [nextGWNumber, setNextGWNumber] = useState('')
    const [nextGWStartDate, setNextGWStartDate] = useState('')
    const [nextGWEndDate, setNextGWEndDate] = useState('')
    
    useEffect(
        () => {

            if (typeof props.nextGWInfos.startDate === 'undefined') {
                return 
            }


            setNextGWNumber(props.nextGWInfos.gameWeek)

            const dateNextGWStart = new Date(props.nextGWInfos.startDate)
            const dateNextGWEnd = new Date(props.nextGWInfos.endDate)

            setNextGWStartDate(`${dateNextGWStart.getDate()} ${monthNames[dateNextGWStart.getMonth()]}`)
            setNextGWEndDate(`${dateNextGWEnd.getDate()} ${monthNames[dateNextGWEnd.getMonth()]}`)

        }, [props.nextGWInfos]
    )


    return (
        <div style={{marginLeft: '6%', marginRight: '6%', marginBottom: '20px', display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Item style={{fontSize: '18px', padding: '12px', backgroundColor: 'rgb(25, 118, 210)', color: 'white', marginRight: '25px', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Gameweek #{nextGWNumber}</Item>
                <Item style={{fontSize: '18px', padding: '12px', marginRight: '25px', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{nextGWStartDate} - {nextGWEndDate}</Item>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginLeft: '10px'}}>
                <So5RaritySelector handleSo5RarityChange={props.handleSo5RarityChange}/>
                <So5LeagueSelector handleSo5LeagueChange={props.handleSo5LeagueChange}/>
            </div>
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