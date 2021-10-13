import React, {useState} from 'react';
import './CardGenerator.css'

export function CardGenerator(props) {
    const [name, setName] = useState();
    const [scarcity, setScarcity] = useState();
    const [position, setPosition] = useState();
    const [score, setScore] = useState();
    const [id, setId] = useState();
    const [xp, setXp] = useState();
    const [zone, setZone] = useState();
    const [u23, setU23] = useState();
    


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

    const getRandomXp = () => {
        const randomXp = Math.floor(Math.random() * 20) / 2;
        setXp(randomXp)
    }

    const getRandomZone = () => {
        const zoneArray = ['champion-europe', 'challenger-europe', 'champion-america', 'champion-asia']
        const randomZone = zoneArray[Math.floor(Math.random() * zoneArray.length)]
        setZone(randomZone)
    }

    const getRandomU23 = () => {
        if (Math.random() < 0.5) {
            setU23(true)
        } else {
            setU23(false)
        }
    }

    const addRandomCard = () => {

        getRandomName();
        getRandomScarcity();
        getRandomPosition();
        getRandomScore();
        getRandomId();
        getRandomXp();
        getRandomZone();
        getRandomU23();

        props.addCard(name, scarcity, position, score, id, xp, zone, u23)
     }






    return(

        <div className="card-generator">
            <button onClick={addRandomCard}>GENERATE RANDOM CARD</button>
            
        </div>
        



    );
}