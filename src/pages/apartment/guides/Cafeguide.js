import React from 'react'
import './Cafeguide.css'
import Cafecomponent from '../../../components/cafe_component'

import piggyBank from '../../../img/cafe/money.png'
import step1 from '../../../img/cafe/cafe_step_1_2.png'
import step2 from '../../../img/cafe/cafe_step_2.png'
import step3 from '../../../img/cafe/cafe_step_3.png'
import step4 from '../../../img/cafe/cafe_step_4.png'
import step5 from '../../../img/cafe/cafe_step_5.png'
import HeaderTitle from '../../../HeaderTitle'

import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'

function Cafeguide() {
    const { t } = useTranslation();
    return (
        <div className='cafe-guide'>
            <HeaderTitle title={t("cafe_guide")} />
            <a href={"revolut.me/kritfo3qr"} target="_blank" >
            <div className='piggybank'>
                <div>
                    <h3><b>{t("honesty_box")}</b></h3>
                    <p>{t("honesty_box_desc")}<br></br><b>{t("click_here")}</b></p>
                </div>
                <img src={piggyBank} alt=''/>
            </div>
            </a>
                <Cafecomponent 
                    title={t("step_1")}
                    desc={t("cafe_step_1")}
                    image={step1}
                />
                <Cafecomponent 
                    title={t("step_2")}
                    desc={t("cafe_step_2")}
                    image={step2}
                />
                <Cafecomponent 
                    title={t("step_3")}
                    desc={t("cafe_step_3")}
                    image={step3}
                />
                <Cafecomponent 
                    title={t("step_4")}
                    desc={t("cafe_step_4")}
                    image={step4}
                />
                <Cafecomponent 
                    title={t("step_5")}
                    desc={t("cafe_step_5")}
                    image={step5}
                />
                <div className='text-content'>
                    <a href='https://youtu.be/wTiYxDsQck8' target="_blank">YouTube video on usage <ion-icon name="open-outline"></ion-icon></a>
                </div>
        </div>
    )
}

export default Cafeguide
