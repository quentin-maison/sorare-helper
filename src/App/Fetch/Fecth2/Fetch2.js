import React, {useState} from 'react'

//COMPONENTS
import { GetNextGWInfos } from './GetNextGWInfos/GetNextGWInfos';
import { GetManagerInfos } from './GetManagerInfos/GetManagerInfos';
import { GetManagerCards } from './GetManagerCards/GetManagerCards'
import { GetManagerSlug } from './GetManagerSlug/GetManagerSlug';


export function Fetch2 (props) {

    const [managerSlug, setManagerSlug] = useState('')
    function updateManagerSlug (newSlug) {
        setManagerSlug(newSlug)
    }

    const [managerInfos, setManagerInfos] = useState([])
    function updateManagerInfos (newManagerInfos) {
        setManagerInfos(newManagerInfos)
        props.updateManagerInfos(newManagerInfos)
    }

    return (
        <div>
            <GetNextGWInfos 
                environment={props.environment}
                updateGWInfos={props.updateGWInfos}
                managerSearched={props.managerSearched}/>
            <GetManagerSlug
                environment={props.environment}
                managerSearched={props.managerSearched}
                updateSearchStatus={props.updateSearchStatus}
                updateManagerName={props.updateManagerName}
                updateManagerSlug={updateManagerSlug}/>
            <GetManagerInfos 
                environment={props.environment}
                updateManagerInfos={updateManagerInfos}
                managerSearched={props.managerSearched}
                updateSearchStatus={props.updateSearchStatus} 
                updateManagerName={props.updateManagerName}
                managerSlug={managerSlug}/>
            <GetManagerCards 
                environment={props.environment}
                updateManagerCards={props.updateManagerCards}
                managerSlug={managerSlug}
                updateSearchStatus={props.updateSearchStatus} 
                managerInfos={managerInfos}
                updateManagerCardsLength={props.updateManagerCardsLength}
                updateManagerCardsRetrieved={props.updateManagerCardsRetrieved}

            />
            


        </div>
    );
}