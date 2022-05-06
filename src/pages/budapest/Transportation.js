import React from 'react'
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
            <HeaderTitle title={t("transportation")} />
                <TransportSubmenu 
                    image={publictransport}
                    title={t("public_transport")}
                    className="public-transport"
                    content={
                        <div className='public-transport-content'>
                            <p>{t("public_transport_tr_desc_1")}</p>
                            <h6>{t("public_transport_tr_desc_2")}</h6>
                            <p><u><b><a href='https://bkk.hu/en/' target="_blank" rel="noreferrer">{t("public_transport_tr_desc_3")}</a></b></u></p>
                            <p>{t("public_transport_tr_desc_4")} <br /><b><a href='https://goo.gl/maps/Km6bhCybimrTLNrUA' target="_blank" rel="noreferrer">1137 Budapest, Katona József utca 10/B</a></b></p>
                            <img className='bkk-img' src={bkk} alt="" />
                        </div>
                    }
                />
                <TransportSubmenu 
                    image={taxi}
                    title={t("taxi_services")}
                    content={
                        <div className='public-transport-content'>
                            <p>{t("public_transport_taxi_desc_1")}</p>
                            <p><u><b><a href='https://bolt.eu/hu/' target="_blank" rel="noreferrer">Click here to download the app</a></b></u></p>
                        </div>
                    }
                />
                <TransportSubmenu 
                    image={carshare}
                    title={t("car_sharing")}
                    content={
                        <div className='public-transport-content'>
                            <p>{t("public_transport_car_desc_1")}</p>
                            <h5>MOL Limo</h5>
                            <p><u><b><a href='https://www.mollimo.hu/en/' target="_blank" rel="noreferrer">Click here to download the MOL Limo app</a></b></u></p>
                            <h5>ShareNow</h5>
                            <p><u><b><a href='https://www.share-now.com/hu/en/' target="_blank" rel="noreferrer">Click here to download the ShareNow app</a></b></u></p>
                            <h5>GreenGo</h5>
                            <p><u><b><a href='https://greengo.com/hu/index-en' target="_blank" rel="noreferrer">Click here to download the GreenGo app</a></b></u></p>
                        </div>
                    }
                />
                <TransportSubmenu 
                    image={bubi}
                    title={t("two_wheel_share")}
                    content={
                        <div className='public-transport-content'>
                            <p>{t("public_transport_bike_desc_1")}</p>
                            <h5>Lime (roller)</h5>
                            <p><u><b><a href='https://www.li.me/en-us/home' target="_blank" rel="noreferrer">Click here to download the Lime app</a></b></u></p>
                            <h5>Bird (roller)</h5>
                            <p><u><b><a href='https://www.bird.co/' target="_blank" rel="noreferrer">Click here to download the Bird app</a></b></u></p>
                            <h5>Blinkee (scooter)</h5>
                            <p><u><b><a href='https://blinkee.city/en' target="_blank" rel="noreferrer">Click here to download the Blinkee app</a></b></u></p>
                            <h5>Tier (roller)</h5>
                            <p><u><b><a href='https://www.tier.app/en/' target="_blank" rel="noreferrer">Click here to download the Tier app</a></b></u></p>
                            <h5>Bubi (bike)</h5>
                            <p><u><b><a href='https://molbubi.hu/en/' target="_blank" rel="noreferrer">Click here to download the Bubi app</a></b></u></p>
                        </div>
                    }
                />
        </div>
    )
}

export default Transportation
