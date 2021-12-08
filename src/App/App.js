import React, {useEffect, useState} from 'react'

//PAGES
import {ManagerInfosPage} from './ManagerInfosPage/ManagerInfosPage'

//COMPONENTS
import {Navbar} from './Navbar/Navbar'
import {Fetch} from './Fetch/Fetch'
import {ServerStatus} from './ServerStatus/ServerStatus'
import {SearchStatus} from './SearchStatus/SearchStatus'

//SUPPORT FUNCTIONS
import {getEnvironement} from './Fetch/getEnvironment/getEnvironment'
import {proxyUrl, serverUrl} from './Fetch/urlsToFetch'



function App() {

  //ENVIRONMENT
  const [environment, setEnvironment] = useState(getEnvironement())


  //SERVER STATUS
  const [serverStatus, setServerStatus] = useState()
  useEffect(
    () => {

      let urlToFetch ;
      if (environment === 'development') {
          urlToFetch = `${proxyUrl}/graphql`
      }

      if (environment === 'production') {
          urlToFetch = `${serverUrl}`
      }

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

  //DISPLAY SEARCH STATUS & MANAGER INFOS
  const [displaySearchStatus, setDisplaySearchStatus] = useState({display: 'none'})
  const [displayManagerInfos, setDisplayManagerInfos] = useState({display: 'none'})
  useEffect(
    () => {

      if (searchStatus === 'search-found') {
        setDisplaySearchStatus({display: 'none'})
        setDisplayManagerInfos({display: 'block'})
      } else {
        setDisplaySearchStatus({display: 'block'})
        setDisplayManagerInfos({display: 'none'})

      }

    }, [searchStatus]
  )


  return (
    <div>
      <Navbar 
        handleManagerSearch={handleManagerSearch}/>
      <Fetch
        environment={environment}
        updateGWInfos={updateGWInfos}
        managerSearched={managerSearched} 
        updateSearchStatus={updateSearchStatus} 
        updateManagerCards={updateManagerCards}
        updateManagerInfos={updateManagerInfos}
        updateManagerName={updateManagerName}/>

      <main>

        <div style={displayAlertServer}>
          <ServerStatus />
        </div>
        <div style={displaySearchStatus}>
          <SearchStatus 
            searchStatus={searchStatus} 
            managerSearched={managerSearched} 
            managerName={managerName} 
            managerInfos={managerInfos}/>
        </div>
        <div style={displayManagerInfos}>
          <ManagerInfosPage 
            managerInfos={managerInfos} 
            managerCards={managerCards} 
            nextGWInfos={nextGWInfos}/>
        </div>
        
      </main>
    </div>
  );
}

export default App;
