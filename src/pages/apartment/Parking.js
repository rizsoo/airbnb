import React from 'react'
import './Parking.css'
import parkingMap from '../../img/parking/parking_3_b.png'
import parkingGarage1 from '../../img/parking/parking_4.JPG'
import parkingGarage2 from '../../img/parking/parking_5.JPG'
import HeaderTitle from '../../HeaderTitle'

import News from '../../components/news_component';
import parking_data from '../../data_parking';

import { useTranslation } from "react-i18next";

const Parking = () => {
    const { t } = useTranslation();
    return (
       <div>
           <HeaderTitle title={t("parking")} />
           <div className='text-content'>
            <div className='parking'>
                <h4>{t("parking_desc_1")}</h4>
                <p>{t("parking_desc_2")}</p>
                <p>{t("parking_desc_3")}</p>
                <p>{t("parking_desc_4")}</p>
                <h4>{t("parking_desc_5")}</h4>
                <p>{t("parking_desc_6")}</p>
                <img src={parkingMap} alt="" />
                <p>{t("parking_desc_7")}</p>
                <p className='verhalom'><em>{t("parking_desc_8")} <a href="https://www.google.com/maps/dir//V%C3%A9rhalom+t%C3%A9r,+Budapest,+1025/@47.5213478,18.989399,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x4741deada1786713:0x97b012a9d95b9575!2m2!1d19.0244182!2d47.5213531!3e3" target="_blank" rel="noreferrer noopener">Vérhalom tér, Budapest, 1025</a></em></p>
                <h4>{t("parking_desc_9")}</h4>
                <p>{t("parking_desc_10")}</p>
                    {parking_data.map((data) => (
                        <News 
                            title={data.title}
                            image={data.image}
                            link={data.link}
                            desc={data.desc}
                        />
                    ))}
                </div>
           </div>
       </div> 
    )
}

export default Parking
