import {Switch, Route, NavLink} from "react-router-dom";
import React, {useState, useEffect} from 'react'


//PAGES
import {HomePage} from './Pages/HomePage/HomePage'
import {BestCardsPage} from './Pages/BestCardsPage/BestCardsPage'
import {GameweekCenterPage} from './Pages/GameweekCenterPage/GameweekCenterPage'

//SUPPORT-FUNCTIONS
import {getCardsList, getNextGWInfos} from './Fetch/handleNewRequest'



import './App.css';


function App() {

  const [manager, setManager] = useState('')
  const [managerFound, setManagerFound] = useState(false)
  const [cardsList, setCardsList] = useState([])
  const [nextGW, setNextGW] = useState('')

  useEffect(
    () => {



    }, [cardsList]
  )

  const handleManagerChange = (newManager) => {

    setManager(newManager)
    setCardsList(getCardsList(manager))
    setNextGW(getNextGWInfos())
    setManagerFound(true)
  }


  return (
    <div>

      <nav className="nav-bar">
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/best-cards">BEST CARDS</NavLink>
        <NavLink to="/gameweek-center">GAMEWEEK CENTER</NavLink>
      </nav>


      <main>

        <Switch>

          {/*HOME PAGE*/}
          <Route path="/home">
            <HomePage/>
          </Route>
          
          {/*BEST-CARDS PAGE*/}
          <Route path="/best-cards">
            <BestCardsPage 
              cardsList={cardsList} 
              setManager={setManager} 
              handleManagerChange={handleManagerChange} 
              manager={manager} 
              managerFound={managerFound}/>
          </Route>

          {/*GAMEWEEK-CENTER PAGE*/}
          <Route path="/gameweek-center">
            <GameweekCenterPage 
              cardsList={cardsList} 
              nextGW={nextGW} 
              setManager={setManager} 
              handleManagerChange={handleManagerChange} 
              manager={manager} 
              managerFound={managerFound}/>
          </Route>

          {/*FALLBACK PAGE*/}
          <Route path="/">
            <HomePage/>
          </Route>

        </Switch>
      </main>   
    </div>
  );
}

export default App;
