
export function generateRandomCard () {

    const output = {
        name: getRandomName(),
        scarcity: getRandomScarcity(),
        position: getRandomPosition(),
        score: getRandomScore(),
        xp: getRandomXp(),
        zone: getRandomZone(),
        u23: getRandomU23(),
        nationality: getRandomNationality(),
        id: getId()
    }

    return output;
}



const getRandomName = () => {
    const nameArray = ['Albert', 'Baptiste', 'Corentin', 'Dimitri', 'Elgar Costa', 'Gerard Moreno Nomtrèslong']
    return nameArray[Math.floor(Math.random() * nameArray.length)]
}

const getRandomScarcity = () => {
    const scarcityArray = ['limited', 'rare', 'super-rare', 'unique']
    return scarcityArray[Math.floor(Math.random() * scarcityArray.length)]
}

const getRandomPosition = () => {
    const positionArray = ['GOA', 'DEF', 'MID', 'FOR']
    return positionArray[Math.floor(Math.random() * positionArray.length)]
}

const getRandomScore = () => {
    return Math.floor(Math.random() * 100);
}

const getRandomXp = () => {
    return Math.floor(Math.random() * 20) / 2;
}

const getRandomZone = () => {
    const zoneArray = ['champion-europe', 'challenger-europe', 'champion-america', 'champion-asia']
    return zoneArray[Math.floor(Math.random() * zoneArray.length)]
}

const getRandomU23 = () => {
    if (Math.random() < 0.5) {return true} 
    else {return false}
}

const getRandomNationality = () => {
    const zoneArray = ['FRA', 'ESP', 'ENG', 'ITA']
    return zoneArray[Math.floor(Math.random() * zoneArray.length)]
}

let i=0;
const getId = () => {
    i++;
    return i;
}