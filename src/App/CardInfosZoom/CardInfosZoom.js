import React, {useEffect, useState} from 'react'

import CloseIcon from '@mui/icons-material/Close';

export function CardInfosZoom (props) {

    const size = useWindowSize();

    //STYLE

    const widthPopup = size.width
    const heightPopup = size.height

    const stylePopup = {width: `${widthPopup*0.9}px`, height: `${heightPopup*0.9}px`, marginTop: '8%', backgroundColor: 'rgb(52, 52, 52, 0.98)', borderRadius: '20px', boxShadow: '10px 5px 5px rgb(0, 0, 0, 0.5'};

    return (
        <div style={stylePopup}>
            <div className='clickable-element' style={{float: 'right', marginRight: '10px', marginTop: '10px', color: 'white'}}><CloseIcon onClick={props.closePopup}/></div>

            <div style={{height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
                
                <div style={{width: '45%', minWidth: '300px', height: '90%', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img alt={props.card.name} src={props.card.pictureUrl} style={{width: `${widthPopup*0.25}px`, minWidth: '240px'}}/>
                </div>
                <div style={{width: '45%', minWidth: '300px', height: '80%', marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
                    <div>
                        <div style={{fontSize: '34px', fontWeight: 600, color: 'rgb(230, 230, 230)'}}>{props.card.player.displayName}</div>
                        <div style={{fontSize: '24px', color: 'rgb(190, 190, 190)', padding: '8px'}}>{props.card.position}</div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '60px'}}>
                        <div><img alt={props.card.team.name} src={props.card.team.pictureUrl} style={{width: '40px'}}/></div>
                        <div style={{fontSize: '24px', color: 'rgb(230, 230, 230)', marginLeft: '20px'}}>{props.card.team.name}</div>
                    </div>

                    <div style={{marginTop: '60px'}}>
                        <div style={{fontSize: '20px', color: 'rgb(230, 230, 230)'}}>Latest SO5 scores:</div>
                    </div>

                    <LatestScores card={props.card} length={5}/>

                </div>
            </div>
        </div>
    );
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }


function LatestScores (props) {

    const [cardsToDisplay, setCardsToDisplay] = useState([])
    const [scoreArray, setScoreArray] = useState([])
    useEffect(
        () => {

            if (scoreArray.length > 5) {return}

            if (props.card.lastScores === null) {return }
            if (props.card.lastScores === undefined) {return }

            for (let scores of props.card.lastScores) {

                if (props.card.lastScores.indexOf(scores) > props.length-1) {return }
                if (scores.score === null) {
                    setScoreArray((prev) => [...prev, 'DNP']) 
                }
                if (scores.score === undefined) {
                    setScoreArray((prev) => [...prev, 'DNP']) 
                }
                if (scores.score === 0) {
                    setScoreArray((prev) => [...prev, 'DNP']) 
                }

                if (scores.score > 0) {
                    setScoreArray((prev) => [...prev, scores.score.toFixed(0)]) 
                }
            }
            setCardsToDisplay(scoreArray)
        }, [props.card]
    )

    useEffect(
        () => {
            setCardsToDisplay(scoreArray)
        }, [scoreArray]
    )

    return (
        <div style={{display: 'flex'}}>
            <Score score={cardsToDisplay[0]} key={0}/>
            <Score score={cardsToDisplay[1]} key={1}/>
            <Score score={cardsToDisplay[2]} key={2}/>
            <Score score={cardsToDisplay[3]} key={3}/>
            <Score score={cardsToDisplay[4]} key={4}/> 
        </div>

    );
}


function Score (props) {

    let styleScore= {};
    const styleDNPScore = {height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', color: 'black', fontWeight: 600, fontSize: '22px', backgroundColor: 'rgb(250, 250, 250)', mrginRight: '15px', marginLeft: '15px', marginTop: '20px'}
    const styleVeryLowScore = {height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', color: 'white', fontWeight: 600, fontSize: '22px', backgroundColor: 'rgb(215, 26, 15)', mrginRight: '15px', marginLeft: '15px', marginTop: '20px'}
    const styleLowScore = {height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', color: 'white', fontWeight: 600, fontSize: '22px', backgroundColor: 'rgb(241, 155, 26)', mrginRight: '15px', marginLeft: '15px', marginTop: '20px'}
    const styleMediumcore = {height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', color: 'white', fontWeight: 600, fontSize: '22px', backgroundColor: 'rgb(239, 206, 29)', mrginRight: '15px', marginLeft: '15px', marginTop: '20px'}
    const styleHighScore = {height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', color: 'white', fontWeight: 600, fontSize: '22px', backgroundColor: 'rgb(178, 201, 39)', mrginRight: '15px', marginLeft: '15px', marginTop: '20px'}
    const styleVeryHighScore = {height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', color: 'white', fontWeight: 600, fontSize: '22px', backgroundColor: 'rgb(38, 200, 143)', mrginRight: '15px', marginLeft: '15px', marginTop: '20px'}
    const stylePerfectScore = {height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', color: 'white', fontWeight: 600, fontSize: '22px', backgroundColor: 'rgb(1, 162, 77)', mrginRight: '15px', marginLeft: '15px', marginTop: '20px'}

    if (props.score === 0 || props.score === 'DNP') {styleScore = styleDNPScore}
    if (props.score > 0 && props.score <= 15) {styleScore = styleVeryLowScore}
    if (props.score > 15 && props.score <= 30) {styleScore = styleLowScore}
    if (props.score > 30 && props.score <= 45) {styleScore = styleMediumcore}
    if (props.score > 45 && props.score <= 60) {styleScore = styleHighScore}
    if (props.score > 60 && props.score <= 80) {styleScore = styleVeryHighScore}
    if (props.score > 80) {styleScore = stylePerfectScore}
    
    return(
        <div style={styleScore}>{props.score}</div>
    );
}