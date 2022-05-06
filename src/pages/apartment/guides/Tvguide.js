import React from 'react'
import HeaderTitle from '../../../HeaderTitle'

import tverror from '../../../img/tv_error.png'
import './Tvguide.css'

import { useTranslation } from "react-i18next";

function Tvguide() {
    const { t } = useTranslation();
    return (
        <div>
            <HeaderTitle title={t("tv_guide")} />
            <div className='no-connection'>
                <div className='no-connection-text'>
                <div>
                    <h4>{t("no_connection")}</h4>
                    <p>{t("no_connection_desc")}</p>
                </div>
                <img src={tverror} alt='' />
                </div>
                <p><i>{t("no_connection_desc_2")}</i></p>
            </div>
            
        </div>
    )
}

export default Tvguide;