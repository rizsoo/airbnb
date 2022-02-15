import React from 'react'
import Header from '../../../Header'
import HeaderTitle from '../../../HeaderTitle'

import tverror from '../../../img/tv_error.png'
import './Tvguide.css'

import { useTranslation } from "react-i18next";

function Tvguide() {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <HeaderTitle title={t("tv_guide")} />
            <div className='no-connection'>
                <div className='no-connection-text'>
                <div>
                    <h4>No connection?</h4>
                    <p>Sometimes the tv loose its connection to the internet. This case just re-set the internet in the settings of the TV or plug out and in the Television’s power outlet.</p>
                </div>
                <img src={tverror} alt='' />
                </div>
                <p><i>*There are internet applications, but no cable tv on this device</i></p>
            </div>
            
        </div>
    )
}

export default Tvguide;