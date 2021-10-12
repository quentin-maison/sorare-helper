import React from 'react';
import './Card.css'

export function Card(props) {
    return(
        <div className={props.scarcity}>
            <div>Name: {props.name}</div>
            <div>Scarcity: {props.scarcity}</div>
            <div>Position: {props.position}</div>
            <div>Score: {props.score}</div>
        </div>
    )
}