import React from 'react'
import './WashingmachineGuide.css'
import Header from '../../../Header'
import HeaderTitle from '../../../HeaderTitle'

import step1 from '../../../img/washing/washing_1.png'
import step2 from '../../../img/washing/washing_2.png'
import step3 from '../../../img/washing/washing_3.png'
import step4 from '../../../img/washing/washing_4.png'
import step5 from '../../../img/washing/washing_5.png'
import step6 from '../../../img/washing/washing_6.png'

import Cafecomponent from '../../../components/cafe_component'
import { useTranslation } from "react-i18next";


const WashingmachineGuide = () => {
  const { t } = useTranslation();
  return (
    <div>
        <Header />
        <div className='content'>
        <HeaderTitle title={t("washing_guide_title")} />
        <Cafecomponent 
          title={t("step_1")}
          desc={t("washing_step1_desc")}
          image={step1}
        />
        <Cafecomponent 
          title={t("step_2")}
          desc={t("washing_step2_desc")}
          image={step2}
        />
        <Cafecomponent 
          title={t("step_3")}
          desc={t("washing_step3_desc")}
          image={step3}
        />
        <Cafecomponent 
          title={t("step_4")}
          desc={t("washing_step4_desc")}
          image={step4}
        />
        <Cafecomponent 
          title={t("step_5")}
          desc={t("washing_step5_desc")}
          image={step5}
        />
        <Cafecomponent 
          title={t("step_6")}
          desc={t("washing_step6_desc")}
          image={step6}
        />
        <p>*WARNING! In case you put only a few clothes inside, the machine will not dry them, mostly if it is something heavy like one or two towels.</p>
        </div>
    </div>
  )
}

export default WashingmachineGuide