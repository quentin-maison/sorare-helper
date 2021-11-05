import {Switch, Route} from 'react-router-dom';
import React, {useState} from 'react'


//PAGES
import {BestCardsPage} from './Pages/BestCardsPage/BestCardsPage'
import {BestLineUpPage} from './Pages/BestLineUpPage/BestLineUpPage'

//COMPONENTS
import {Menu} from './Components/Menu/Menu'
import {SearchStatus} from './Components/SearchStatus/SearchStatus'

//FECTH
import {inputValidation} from './Fetch/inputValidation'
import {getCardsList} from './Fetch/getCardsList'
import {getGWInfos} from './Fetch/getGWInfos'

//CSS
import './App.css'

function App() {


  const [manager, setManager] = useState('');
  const [managerFound, setManagerFound] = useState(false)
  const [cardsList, setCardsList] = useState([]);
  const [nextGWInfos, setNextGWInfos] = useState('No GW')


  const handleManagerSearch = (managerName) => {

    if (inputValidation(managerName)) {
      const newCardsList = getCardsList(managerName)
      const newGWInfos = getGWInfos()

      setManager(managerName)
      setManagerFound(true)
      setCardsList(newCardsList)
      setNextGWInfos(newGWInfos)

    } else {

      setManager(managerName)
      setManagerFound(false)
      setCardsList([])
      setNextGWInfos('Not found')
    }

  }


  return (
    <div>
  
      <Menu handleManagerSearch={handleManagerSearch}/>

      <main>
          <SearchStatus managerFound={managerFound} manager={manager}/>

        <Switch>
          
          <Route path="/best-cards">
            <BestCardsPage cardsList={cardsList} managerFound={managerFound}/>
          </Route>

          <Route path="/best-lineup">
            <BestLineUpPage cardsList={cardsList} managerFound={managerFound} nextGWInfos={nextGWInfos}/>              
          </Route>

          <Route path="/">
            <BestCardsPage cardsList={cardsList} managerFound={managerFound}/>
          </Route>

        </Switch>

      </main>

    </div>
  );
}

export default App;
