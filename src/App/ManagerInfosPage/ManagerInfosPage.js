import React, {useEffect, useState} from 'react'

//COMPONENTS
import {Managertab} from './Managertab/Managertab'
import { ManagerCards } from './ManagerCards/ManagerCards';
import { BestLineup } from './BestLineup/BestLineup';

export function ManagerInfosPage (props) {
    
    //TAB SELECTION
    const [selectedTab, setSelectedTab] = useState('manager-cards')
    function updateSelectedTab (newValue) {
        setSelectedTab(newValue)
    }

    //PAGE TO DISPLAY
    const [displayManagerCardsPage, setDisplayManagerCardsPage] = useState({display: 'block'})
    const [displayLineupPage, setDisplayLineupPage] = useState({display: 'none'})
    useEffect(
        () => {

            if (selectedTab === 'manager-cards') {
                setDisplayManagerCardsPage({display: 'block'})
                setDisplayLineupPage({display: 'none'})
            }

            if (selectedTab === 'best-lineup') {
                setDisplayLineupPage({display: 'block'})
                setDisplayManagerCardsPage({display: 'none'})
            }

        }, [selectedTab]
    )

    //MANAGER INFOS
    const [managerInfosClubPictureUrl, setManagerInfosClubPictureUrl] = useState()
    const [managerInfosCreationDate, setManagerInfosCreationDate] = useState()
    useEffect(
        () => {
            if (Object.keys(props.managerInfos) === undefined || Object.keys(props.managerInfos) === null) {
                return 
            }
            if (!Object.keys(props.managerInfos).includes('profile')) {
                return
            }
            else {
                setManagerInfosClubPictureUrl(props.managerInfos.profile.clubShield.pictureUrl)

                const creationDate = new Date(props.managerInfos.createdAt)
                const creationDay = creationDate.getDate()
                const creationMonth = monthNames[creationDate.getMonth()];
                const creationYear = creationDate.getFullYear();

                setManagerInfosCreationDate(`Created on ${creationDay} ${creationMonth} ${creationYear}`)
            }

        }, [props.managerInfos]
    )

    const altLogoManager = `Logo for manager ${props.managerInfos.nickname}`

    return (
        <div>


            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgb(39, 39, 39, 0.05)', paddingTop: '25px'}}>
                
                <div style={{marginLeft: '6%', marginTop: '15px', marginBottom: '25px'}}>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '80px'}}>
                            <img style={{width: '100%'}} src={managerInfosClubPictureUrl} alt={altLogoManager} title={props.managerInfos.nickname}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '15px'}}>
                            <div style={{marginBottom: '10px'}}>{props.managerInfos.nickname}</div>
                            <div style={{fontSize: '12px'}}>{managerInfosCreationDate}</div>
                        </div>
                    </div>
                </div>
            </div>
            

            <Managertab 
                updateSelectedTab={updateSelectedTab}/>
            <div style={displayManagerCardsPage}>
                <ManagerCards 
                    managerCards={props.managerCards} />
            </div>
            <div style={displayLineupPage}>
                <BestLineup 
                    managerCards={props.managerCards}
                    nextGWInfos={props.nextGWInfos}/>
            </div>
        </div>
    );
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
