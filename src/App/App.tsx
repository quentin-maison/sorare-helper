import React, {useEffect, useState} from 'react'

//PAGES
import {HomePage} from './HomePage/HomePage'
import {ManagerInfosPage} from './ManagerInfosPage/ManagerInfosPage'

//COMPONENTS
import {Navbar} from './Navbar/Navbar'
import {ServerStatus} from './ServerStatus/ServerStatus'
import {Fetch} from './Fetch/Fetch'


//SUPPORT FUNCTIONS
import {getEnvironement} from './Fetch/support-functions/getEnvironment/getEnvironment'
import {urlPOST} from './Fetch/support-functions/urlsToFetch'

//SNACKBAR
import { useSnackbar } from 'notistack';

//INTERFACES
import { ManagerInfos, Card, GWInfos } from './Interfaces'

//CSS
import './App.css'

// eslint-disable-next-line
function App() {

  //ENVIRONMENT
  const environment:string = getEnvironement()

  //CHECK SERVER STATUS
  const [serverStatus, setServerStatus] = useState<string | undefined>()
  useEffect(
    () => {

      // eslint-disable-next-line
      const urlToFetch: any = urlPOST(environment)

      //GET GW SLUG
      const GWSlug = '10-14-dec'

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const query = `{so5Fixture (slug:"${GWSlug}") {gameWeek, startDate, endDate}}`
      const body = {"variables": {}, "query": query}
      const request = {method: 'POST', headers: myHeaders, body: JSON.stringify(body)}

      fetch(urlToFetch, request)
      .then(() => {
        setServerStatus('responding')
        return
      })
      .catch(() => {
        setServerStatus('not-responding')
        return
      })

    }, [environment]
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
  function updateGWInfos (newGWInfos: GWInfos) {
    setNextGWInfos(newGWInfos)
  }


  //HANDLE MANAGER SEARCH
  const [managerSearched, setManagerSearched] = useState('')
  function handleManagerSearch(managerName: string) {
    setManagerSearched(managerName)
    window.scrollTo(0, 0);
  }

  const [managerName, setManagerName] = useState('')
  function updateManagerName (managerName: string) {
    setManagerName(managerName)
  }

  const [managerCards, setManagerCards] = useState<Card[]>([])
  function updateManagerCards (managerCards: Card[]) {
    setManagerCards(managerCards)
  }

  const [managerInfos, setManagerInfos] = useState<ManagerInfos>({
    slug: null,
    nickname: null,
    createdAt: null,
    cardCounts: {
      common: null,
      limited: null,
      rare: null,
      superRare: null,
      unique: null,
      total: null,
    },
    profile: {
      clubShield: {
        pictureUrl: null,
      }
    }
  })
  function updateManagerInfos (managerInfos: ManagerInfos) {
    setManagerInfos(managerInfos)
  }

  const [searchStatus, setSearchStatus] = useState('no-search')
  function updateSearchStatus (newSearchStatus: string) {
    if (newSearchStatus === "") {setSearchStatus('no-search')}
    setSearchStatus(newSearchStatus)
  }

  function goToHomePage () {
    window.scrollTo(0, 0);
    setSearchStatus('no-search')
  }

  //FETCH STATUS
  const [managerCardsLength, setManagerCardsLength] = useState(0)    
  function updateManagerCardsLength (newValue: number) {
    setManagerCardsLength(newValue)
  }

  const [managerCardsRetrieved, setManagerCardsRetrieved] = useState(0)
  function updateManagerCardsRetrieved (newValue: number) {
    setManagerCardsRetrieved(newValue)
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


  //SNACKBAR
  const { enqueueSnackbar } = useSnackbar();
  // eslint-disable-next-line
  const showSnackbar = (text: string, variant: any) => {
      enqueueSnackbar(text, {variant});
  };

  useEffect(
    () => {

        if (searchStatus === 'search-found') {
            showSnackbar(`Manager '${managerName}' found | ${managerInfos.cardCounts.total} cards`, 'success')
            showSnackbar(`Searched term '${managerSearched}'`, '')

        }

    }, [managerCards]
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
        updateManagerName={updateManagerName}
        updateManagerCardsLength={updateManagerCardsLength}
        updateManagerCardsRetrieved={updateManagerCardsRetrieved}
        />

      <main style={{paddingTop: '62px'}}>

      <div id='server-status' style={displayAlertServer}>
        <ServerStatus/>
      </div>

      <div style={displayHomePage}>
        <HomePage 
            searchStatus={searchStatus} 
            managerSearched={managerSearched} 
            managerName={managerName} 
            managerInfos={managerInfos}
            handleManagerSearch={handleManagerSearch}
            managerCardsLength={managerCardsLength}
            managerCardsRetrieved={managerCardsRetrieved}
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
