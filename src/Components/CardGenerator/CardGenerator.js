import React, {useState} from 'react';
import './CardGenerator.css'

export function CardGenerator(props) {
    const [name, setName] = useState();
    const [scarcity, setScarcity] = useState();
    const [position, setPosition] = useState();
    const [score, setScore] = useState();
    const [id, setId] = useState();


    const getRandomName = () => {
        const nameArray = ['A', 'B', 'C', 'D', 'E', 'G']
        const randomName = nameArray[Math.floor(Math.random() * nameArray.length)]
        setName(randomName) 
    }

    const getRandomScarcity = () => {
        const scarcityArray = ['limited', 'rare', 'super-rare', 'unique']
        const randomScarcity = scarcityArray[Math.floor(Math.random() * scarcityArray.length)]
        setScarcity(randomScarcity)
    }

    const getRandomPosition = () => {
        const positionArray = ['GOA', 'DEF', 'MID', 'FOR']
        const randomPosition = positionArray[Math.floor(Math.random() * positionArray.length)]
        setPosition(randomPosition)
    }

    const getRandomScore = () => {
        const randomScore = Math.floor(Math.random() * 100)
        setScore(randomScore)
    }

    const getRandomId = () => {
        const randomId = Math.floor(Math.random() * 100000)
        setId(randomId)
    }

    const addRandomCard = () => {
        getRandomName();
        getRandomScarcity();
        getRandomPosition();
        getRandomScore();
        getRandomId();
        props.addCard(name, scarcity, position, score, id);
    }

 

    return(

        <div className="card-generator">
            <button onClick={addRandomCard}>GENERATE RANDOM CARD</button>
  
        </div>
        



    );
}