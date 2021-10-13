import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import {CardGenerator} from './Components/CardGenerator/CardGenerator';
import {Fetch} from './Fetch/Fetch'
import {BestCardsPage} from './Pages/BestCardsPage/BestCardsPage'
import {GameweekCenterPage} from './Pages/GameweekCenterPage/GameweekCenterPage'

import './App.css';


function App() {
  
  const [cardsList, setCardsList] = useState([])

  const addCard = (name, scarcity, position, score, id, xp, zone, u23) => {


    const newCard = {
      name,
      scarcity,
      position,
      score,
      id,
      xp,
      zone,
      u23
    }

      setCardsList((prev) => [...prev, newCard])

  }
  



  return (
    <div>

      <nav>
        <NavLink to="/best-cards">BEST CARDS</NavLink>
        <NavLink to="/gameweek-center">GAMEWEEK CENTER</NavLink>


      </nav>


      <main className="margin-header">

        <Fetch />
        <CardGenerator addCard={addCard} />

        <Switch>

          {/*BEST-CARDS PAGE*/}

          <Route path="/best-cards">
            <BestCardsPage cardsList={cardsList}/>
          </Route>

          {/*GAMEWEEK-CENTER PAGE*/}

          <Route path="/gameweek-center">
            <GameweekCenterPage />
          </Route>

          {/*FALLBACK PAGE*/}

          <Route path="/">
            <BestCardsPage cardsList={cardsList}/>
          </Route>



        </Switch>


  
      </main>

      
       
   
    </div>
  );
}

export default App;
