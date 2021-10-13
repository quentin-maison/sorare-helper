import React from 'react';
import './Card.css'

export function Card(props) {
    
    const className = `${props.scarcity} card`
    
    return(

        <div className={className}>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{props.name}</td>
                        <th>Scarcity</th>
                        <td>{props.scarcity}</td>
                    </tr>
                    <tr>
                        <th>Position</th>
                        <td>{props.position}</td>
                        <th>Score</th>
                        <td>{props.score}</td>
                    </tr>
                    <tr>
                        <th>XP</th>
                        <td>{props.xp}</td>
                        <th>Zone</th>
                        <td>{props.zone}</td>
                    </tr>
                    <tr>
                        <th>U23</th>
                        <td>{ props.u23 ? "Yes" : "No"}</td>
                        <th>ID</th>
                        <td>{props.id}</td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}