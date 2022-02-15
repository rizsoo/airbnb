import React from 'react'
import './Cafeguide.css'
import Header from '../../../Header'
import Cafecomponent from '../../../components/cafe_component'

import piggyBank from '../../../img/cafe/money.png'
import step1 from '../../../img/cafe/cafe_step_1_2.png'
import step2 from '../../../img/cafe/cafe_step_2.png'
import step3 from '../../../img/cafe/cafe_step_3.png'
import step4 from '../../../img/cafe/cafe_step_4.png'
import step5 from '../../../img/cafe/cafe_step_5.png'
import HeaderTitle from '../../../HeaderTitle'

import { useTranslation } from "react-i18next";


function Cafeguide() {
    const { t } = useTranslation();
    return (
        <div className='cafe-guide'>
            <Header />
            <HeaderTitle title={t("cafe_guide")} />
            <div className='piggybank'>
                <div>
                    <h3><b>Honesty box system</b></h3>
                    <p>When using capsules from the container box, you can choose to leave money for it. There is no fix price, you can leave as much as you value your consumption.</p>
                </div>
                <img src={piggyBank} alt=''/>
            </div>
                <Cafecomponent 
                    title={t("step_1")}
                    desc="Fill up the water container with purified water, than put it back correctly."
                    image={step1}
                />
                <Cafecomponent 
                    title={t("step_2")}
                    desc="Press any of the buttons on the top and wait until the buttons stop to blink."
                    image={step2}
                />
                <Cafecomponent 
                    title={t("step_3")}
                    desc="When the machine is ready you can put the capsule in, than close the lever."
                    image={step3}
                />
                <Cafecomponent 
                    title={t("step_4")}
                    desc="Place a cup under it."
                    image={step4}
                />
                <Cafecomponent 
                    title={t("step_5")}
                    desc="Choose your style and press one of the buttons."
                    image={step5}
                />
        </div>
    )
}

export default Cafeguide
