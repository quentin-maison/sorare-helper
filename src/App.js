import React, {useState} from 'react';
import {CardGenerator} from './Components/CardGenerator/CardGenerator';
import {DisplayCardList} from './Components/DisplayCardList/DisplayCardList'
import {Fetch} from './Fetch/Fetch'


function App() {
  
  const [cardsList, setCardsList] = useState([])

  const addCard = (name, scarcity, position, score, id) => {

    const newCard = {
      name,
      scarcity,
      position,
      score,
      id
    }

      setCardsList((prev) => [...prev, newCard])

  }
  
  return (
    <div>
      <Fetch />
      <CardGenerator addCard={addCard} />
      <DisplayCardList cardsList={cardsList}/>
    </div>
  );
}

export default App;
