import React from 'react'
import Header from '../../Header'
import './Transportation.css'
import publictransport from '../../img/publictransport.jpg'
import taxi from '../../img/taxi.jpg'
import carshare from '../../img/carshare.jpg'
import bubi from '../../img/bubi.jpg'
import bkk from '../../img/bkk.png'
import { useTranslation } from "react-i18next";

// import '../../index.css'
import TransportSubmenu from './TransportSubmenu'
import HeaderTitle from '../../HeaderTitle'

const Transportation = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <HeaderTitle title={t("transportation")} />
                <TransportSubmenu 
                    image={publictransport}
                    title={t("public_transport")}
                    className="public-transport"
                    content={
                        <div className='public-transport-content'>
                            <p>Pro tip: Whenever you are getting around in Budapest I highly suggest you to use Google Maps.</p>
                            <p>The address of the apartment is <br /><b><a href='https://goo.gl/maps/Km6bhCybimrTLNrUA' target="_blank" rel="noreferrer">1137 Budapest, Katona József utca 10/B</a></b></p>
                            <img className='bkk-img' src={bkk} alt="" />
                        </div>
                    }
                />
                <TransportSubmenu 
                    image={taxi}
                    title={t("taxi_services")}
                />
                <TransportSubmenu 
                    image={carshare}
                    title={t("car_sharing")}
                />
                <TransportSubmenu 
                    image={bubi}
                    title={t("two_wheel_share")}
                />
        </div>
    )
}

export default Transportation
