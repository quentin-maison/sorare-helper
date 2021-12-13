import React, {useEffect, useState} from 'react'

//PAGES
import {HomePage} from './HomePage/HomePage'
import {ManagerInfosPage} from './ManagerInfosPage/ManagerInfosPage'

//COMPONENTS
import {Navbar} from './Navbar/Navbar'
import {Fetch} from './Fetch/Fetch'
import {ServerStatus} from './ServerStatus/ServerStatus'

//SUPPORT FUNCTIONS
import {getEnvironement} from './Fetch/getEnvironment/getEnvironment'
import {urlPOST} from './Fetch/urlsToFetch'



function App() {

  //ENVIRONMENT
  const environment = getEnvironement()


  //SERVER STATUS
  const [serverStatus, setServerStatus] = useState()
  useEffect(
    () => {

      const urlToFetch = urlPOST(environment)

      //GET GW SLUG
      const GWSlug = '10-14-dec'

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const query = `{so5Fixture (slug:"${GWSlug}") {gameWeek, startDate, endDate}}`
      const body = {"variables": {}, "query": query}
      const request = {method: 'POST', headers: myHeaders, body: JSON.stringify(body)}

      fetch(urlToFetch, request)
      .then((response) => {
        setServerStatus('responding')
        return response.json()
      })
      .catch((error) => {
        setServerStatus('not-responding')
      })

    }, []
  )

  const [displayAlertServer, setDisplayAlertServer] = useState({display: 'none'})
  useEffect(
    () => {
      if (serverStatus === 'responding') {
        setDisplayAlertServer({display: 'none'})
      }
      if (serverStatus === 'not-responding') {
        setDisplayAlertServer({display: 'block'})
      }


    }, [serverStatus]
  )

  //UPDATE NEXT GW INFOS
  const [nextGWInfos, setNextGWInfos] = useState({})
  function updateGWInfos (newGWInfos) {
    setNextGWInfos(newGWInfos)
  }


  //HANDLE MANAGER SEARCH
  const [managerSearched, setManagerSearched] = useState('')
  function handleManagerSearch(managerName) {
    setManagerSearched(managerName)
    window.scrollTo(0, 0);
  }

  const [managerName, setManagerName] = useState('')
  function updateManagerName (managerName) {
    setManagerName(managerName)
  }

  const [managerCards, setManagerCards] = useState([])
  function updateManagerCards (managerCards) {
    setManagerCards(managerCards)
  }

  const [managerInfos, setManagerInfos] = useState({})
  function updateManagerInfos (managerInfos) {
    setManagerInfos(managerInfos)
  }

  const [searchStatus, setSearchStatus] = useState('no-search')
  function updateSearchStatus (newSearchStatus) {
    setSearchStatus(newSearchStatus)
  }

  function goToHomePage () {
    window.scrollTo(0, 0);
    setSearchStatus('no-search')
  }


  //PAGE TO DISPLAY
  const [displayHomePage, setDisplayHomePage] = useState({display: 'block'})
  const [displayManagerInfos, setDisplayManagerInfos] = useState({display: 'none'})
  useEffect(
    () => {

      //HOMEPAGE
      if (searchStatus === 'no-search') {setDisplayHomePage({display: 'block'})}
      if (searchStatus === 'searching') {setDisplayHomePage({display: 'block'})}
      if (searchStatus === 'search-not-found') {setDisplayHomePage({display: 'block'})}
      if (searchStatus === 'search-found') {setDisplayHomePage({display: 'none'})}

      //MANAGER INFOS PAGE
      if (searchStatus === 'no-search') {setDisplayManagerInfos({display: 'none'})}
      if (searchStatus === 'searching') {setDisplayManagerInfos({display: 'none'})}
      if (searchStatus === 'search-not-found') {setDisplayManagerInfos({display: 'none'})}
      if (searchStatus === 'search-found') {setDisplayManagerInfos({display: 'block'})}

    }, [searchStatus]
  )


  return (
    <div>
      <Navbar 
        handleManagerSearch={handleManagerSearch}
        goToHomePage={goToHomePage}/>
      <Fetch
        environment={environment}
        updateGWInfos={updateGWInfos}
        managerSearched={managerSearched} 
        updateSearchStatus={updateSearchStatus} 
        updateManagerCards={updateManagerCards}
        updateManagerInfos={updateManagerInfos}
        updateManagerName={updateManagerName}/>

      <main style={{paddingTop: '62px'}}>

      <div style={displayAlertServer}>
        <ServerStatus/>
      </div>

      <div style={displayHomePage}>
        <HomePage 
            searchStatus={searchStatus} 
            managerSearched={managerSearched} 
            managerName={managerName} 
            managerInfos={managerInfos}
            handleManagerSearch={handleManagerSearch}
            />
      </div>

      <div style={displayManagerInfos}>
        <ManagerInfosPage 
            searchStatus={searchStatus}
            managerSearched={managerSearched} 
            managerName={managerName} 
            managerInfos={managerInfos} 
            managerCards={managerCards} 
            nextGWInfos={nextGWInfos}/>
      </div>


        
      </main>
    </div>
  );
}

export default App;
