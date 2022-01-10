import React, {useState} from 'react'

//COMPONENTS
import { GetNextGWInfos } from './Components/GetNextGWInfos/GetNextGWInfos';
import { GetManagerInfos } from './Components/GetManagerInfos/GetManagerInfos';
import { GetManagerCards } from './Components/GetManagerCards/GetManagerCards'
import { GetManagerSlug } from './Components/GetManagerSlug/GetManagerSlug';

//INTERFACES
import {ManagerInfos} from '../Interfaces'

// eslint-disable-next-line
export function Fetch (props: any) {

    const [managerSlug, setManagerSlug] = useState<string>('')
    function updateManagerSlug (newSlug: string) {
        setManagerSlug(newSlug)
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
            clubShield: null
        }
    })
    function updateManagerInfos (newManagerInfos: ManagerInfos) {
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