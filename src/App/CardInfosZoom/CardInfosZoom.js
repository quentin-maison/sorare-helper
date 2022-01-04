import React, {useEffect, useState} from 'react'

import CloseIcon from '@mui/icons-material/Close';

//CSS
import './CardInfosZoom.css'
import './CardInfosZoom_0-600.css'
import './LatestScores.css'
import './LatestScores_0-600.css'

export function CardInfosZoom (props) {

    const size = useWindowSize();

    //STYLE
    const windowWidth = size.width
    const windowHeight = size.height

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{height: `${windowHeight*0.1}px`}}></div>
            <div id='card-infos-zoom' style={{width: `${windowWidth*0.9}px`, height: `${windowHeight*0.88}px`}}>
                <div className='close-icon'><CloseIcon sx={{fontSize: 35}} onClick={props.closePopup}/></div>

                <div className='card-details'>
                    <div className='card-image-container'><img className='card-image' alt={props.card.name} src={props.card.pictureUrl}/></div>
                    <div className='card-infos-detailed'>
                        
                        <div className='name-position-container'>
                            <div className='player-name'>{props.card.player.displayName}</div>
                            <div className='player-position'>{props.card.position}</div>
                        </div>

                        <div className='team-name-image-container'>
                            <div><img className='team-image' alt={props.card.currentTeam.name} src={props.card.currentTeam.pictureUrl}/></div>
                            <div className='team-name'>{props.card.currentTeam.name}</div>
                        </div>

                        <div className='latest-so5-scores-container'>
                            <div className='latest-so5-scores'>Latest SO5 scores:</div>
                            <LatestScores card={props.card} length={5}/>
                        </div>

                    </div>
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
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <Score score={cardsToDisplay[0]} key={0}/>
            <Score score={cardsToDisplay[1]} key={1}/>
            <Score score={cardsToDisplay[2]} key={2}/>
            <Score score={cardsToDisplay[3]} key={3}/>
            <Score score={cardsToDisplay[4]} key={4}/> 
        </div>

    );
}


function Score (props) {


    let classNameScore = '';
    
    if (props.score === 0 || props.score === 'DNP') {classNameScore = 'score-dnp'}
    if (props.score > 0 && props.score <= 15) {classNameScore = 'score-very-low'}
    if (props.score > 15 && props.score <= 30) {classNameScore = 'score-low'}
    if (props.score > 30 && props.score <= 45) {classNameScore = 'score-medium'}
    if (props.score > 45 && props.score <= 60) {classNameScore = 'score-high'}
    if (props.score > 60 && props.score <= 80) {classNameScore = 'score-very-high'}
    if (props.score > 80) {classNameScore = 'score-perfect'}


    
    return(
        <div className={classNameScore}>{props.score}</div>
    );
}