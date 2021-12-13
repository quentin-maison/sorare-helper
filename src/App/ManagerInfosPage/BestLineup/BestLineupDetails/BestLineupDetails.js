import React, {useEffect, useState} from 'react'

//MATERIAL UI - TABLE + PAPER
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

//SUPPORT FUNCTION
import {unavailablePlayer} from '../support-functions/getBestSo5'



export function BestLineupDetails (props) {

    const [GOA, setGOA] = useState(unavailablePlayer(-10))
    const [DEF, setDEF] = useState(unavailablePlayer(-11))
    const [MID, setMID] = useState(unavailablePlayer(-12))
    const [FOR, setFOR] = useState(unavailablePlayer(-13))
    const [EXT, setEXT] = useState(unavailablePlayer(-14))
    useEffect(
        () => {

        if (Array.isArray(props.teamToDisplay) && props.teamToDisplay.length === 5) {
            setGOA(props.teamToDisplay[0])
            setDEF(props.teamToDisplay[1])
            setMID(props.teamToDisplay[2])
            setFOR(props.teamToDisplay[3])
            setEXT(props.teamToDisplay[4])
        }

        }, [props.teamToDisplay]
    )

    function bonusRarity (card) {
        if (card.rarity === 'common') {return '0%'}
        if (card.rarity === 'limited') {return '0%'}
        if (card.rarity === 'rare') {return '0%'}
        if (card.rarity === 'super_rare') {return '20%'}
        if (card.rarity === 'unique') {return '40%'}
        else {return '0%'}
    }

    function bonusXP (card) {
        if (card.rarity === 'common') {return `${((card.power - 1) * 100 - 0).toFixed(1)}%`}
        if (card.rarity === 'limited') {return `${((card.power - 1) * 100 - 0).toFixed(1)}%`}
        if (card.rarity === 'rare') {return `${((card.power - 1) * 100 - 0).toFixed(1)}%`}
        if (card.rarity === 'super_rare') {return `${((card.power - 1) * 100 - 20).toFixed(1)}%`}
        if (card.rarity === 'unique') {return `${((card.power - 1) * 100 - 40).toFixed(1)}%`}
        else {return '0%'}
    }

    function bonusCaptain (card) {
        if (card.isCaptain) {return '20%'} else {return '0%'}
    }

    function expectedSO5Score (card) {
        if (card.isCaptain) {return `${(card.expectedScore * 1.2).toFixed(0)}`} else {return `${(card.expectedScore).toFixed(0)}`}
    }

    function createData(name, GOAInfos, DEFInfos, MIDInfos, FORInfos, EXTInfos) {
        return { name, GOAInfos, DEFInfos, MIDInfos, FORInfos, EXTInfos };
      }
      
      const rows = [
        createData('Name', GOA.displayName, DEF.displayName, MID.displayName, FOR.displayName, EXT.displayName),
        createData('Next Opponent', GOA.nextOpponent.name, DEF.nextOpponent.name, MID.nextOpponent.name, FOR.nextOpponent.name, EXT.nextOpponent.name),
        createData('Expected Score', GOA.averageScore.toFixed(0), DEF.averageScore.toFixed(0), MID.averageScore.toFixed(0), FOR.averageScore.toFixed(0), EXT.averageScore.toFixed(0)),
        createData('Bonus Rarity', bonusRarity(GOA), bonusRarity(DEF), bonusRarity(MID), bonusRarity(FOR), bonusRarity(EXT)),
        createData('Bonus XP', bonusXP(GOA), bonusXP(DEF), bonusXP(MID), bonusXP(FOR), bonusXP(EXT)),
        createData('Bonus Captain', bonusCaptain(GOA), bonusCaptain(DEF), bonusCaptain(MID), bonusCaptain(FOR), bonusCaptain(EXT)),
        createData('Exp. SO5 Score', expectedSO5Score(GOA), expectedSO5Score(DEF), expectedSO5Score(MID), expectedSO5Score(FOR), expectedSO5Score(EXT)),
      ];



    
    return (
        <div id='best-lineup-table' style={{marginTop: '24px', marginLeft: '6%',marginRight: '6%'}}>
            <Paper elevation={4} style={{borderTopLeftRadius: '16px', borderTopRightRadius:'16px', borderBottomLeftRadius: '16px', borderBottomRightRadius:'16px'}}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell><ExpandLessIcon onClick={props.handleDisplayLineupDetails}/></TableCell>
            <TableCell align="right" style={{textAlign: 'center'}}>GOA</TableCell>
            <TableCell align="right" style={{textAlign: 'center'}}>DEF</TableCell>
            <TableCell align="right" style={{textAlign: 'center'}}>MID</TableCell>
            <TableCell align="right" style={{textAlign: 'center'}}>FOR</TableCell>
            <TableCell align="right" style={{textAlign: 'center'}}>EXT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{textAlign: 'center', fontSize: '8px', '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >{row.name}</TableCell>
              <TableCell align="right" style={{textAlign: 'center'}}>{row.GOAInfos}</TableCell>
              <TableCell align="right" style={{textAlign: 'center'}}>{row.DEFInfos}</TableCell>
              <TableCell align="right" style={{textAlign: 'center'}}>{row.MIDInfos}</TableCell>
              <TableCell align="right" style={{textAlign: 'center'}}>{row.FORInfos}</TableCell>
              <TableCell align="right" style={{textAlign: 'center'}}>{row.EXTInfos}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Paper>
        </div>
    );
}