import React, {useEffect, useState} from 'react'

//ICONE
import CloseIcon from '@mui/icons-material/Close';
import HelpIcon from '@mui/icons-material/Help';


//CSS
import './CardInfosZoom.css'
import './CardInfosZoom_0-600.css'
import './LatestScores.css'
import './LatestScores_0-600.css'

// eslint-disable-next-line
export function CardInfosZoom (props: any) {
    
    const size = useWindowSize();
    let windowWidth = 0;
    let windowHeight = 0;

    if (size.width !== undefined) {windowWidth = size.width}
    if (size.height !== undefined) {windowHeight = size.height}

    let teamName = 'No Team'
    if (props.card.currentTeam !== null && props.card.currentTeam !== undefined) {
        if (props.card.currentTeam.name !== null && props.card.currentTeam.name !== undefined) {
            teamName = props.card.currentTeam.name
        }
    }
    
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{height: `${windowHeight*0.1}px`}}></div>
            <div id='card-infos-zoom' style={{width: `${windowWidth*0.9}px`, height: `${windowHeight*0.88}px`}}>
                <div className='close-icon'><CloseIcon sx={{fontSize: 35}} onClick={props.closePopup}/></div>

                <div className='card-details'>
                    <div className='card-image-container'>           
                        <img className='card-image' alt={props.card.name} src={props.card.pictureUrl}/></div>
                    <div className='card-infos-detailed'>
                        
                        <div className='name-position-container'>
                            <div className='player-name'>{props.card.player.displayName}</div>
                            <div className='player-position'>{props.card.position}</div>
                        </div>

                        <div className='team-name-image-container'>
                            <div>
                                {
                                    props.card.currentTeam === undefined ?
                                    <HelpIcon style={{width: '25px', color: 'white'}}/> :
                                    <img className='team-image' alt={teamName} src={props.card.currentTeam.pictureUrl}/>
                                }
                            </div>
                            <div className='team-name'>{teamName}</div>
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
      width: 0,
      height: 0,
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

// eslint-disable-next-line
function LatestScores (props: any) {

    const [scoresToDisplay, setScoresToDisplay] = useState<(string|number)[]>([])
    const [scoreArray, setScoreArray] = useState<(string|number)[]>([])
    useEffect(
        () => {

            if (scoreArray.length > 5) {return}

            if (props.card.lastScores === null) {return }
            if (props.card.lastScores === undefined) {return }

            for (const scores of props.card.lastScores) {

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
            setScoresToDisplay(scoreArray)
        }, [props.card]
    )

    useEffect(
        () => {
            setScoresToDisplay(scoreArray)
        }, [scoreArray]
    )

    return (
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <Score score={scoresToDisplay[0]} key={0}/>
            <Score score={scoresToDisplay[1]} key={1}/>
            <Score score={scoresToDisplay[2]} key={2}/>
            <Score score={scoresToDisplay[3]} key={3}/>
            <Score score={scoresToDisplay[4]} key={4}/> 
        </div>

    );
}

// eslint-disable-next-line
function Score (props: any) {


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