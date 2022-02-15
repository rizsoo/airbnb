import React from 'react'
import './AirconditionGuide.css'
import Header from '../../../Header'
import HeaderTitle from '../../../HeaderTitle'

import air_1 from '../../../img/aircondition/air_rule_1.png'
import air_2 from '../../../img/aircondition/air_rule_2.png'
import air_3 from '../../../img/aircondition/air_rule_3.png'
import air_remote from '../../../img/aircondition/air_remote.png'
import air_remote_display from '../../../img/aircondition/air_remote_display.png'


import { useTranslation } from "react-i18next";

const AirconditionGuide = () => {
  const { t } = useTranslation();
  return (
    <div>
        <Header />
        <HeaderTitle title={t("air_guide")} />
        <div className='text-content'>
          <p>There are two air conditioning units in this apartment. Both can be set with both of the controllers.</p>
          <p><b>Both have the ability to cool down or warm up the flat.</b></p>
          <p>Rules:</p>
          <div style={{display: "flex", gap: "15px", margin: "15px 0"}}>
            <center><img src={air_1} alt="" style={{width: "180px"}}/></center>
            <center><img src={air_2} alt="" style={{width: "180px"}}/></center>
            <center><img src={air_3} alt="" style={{width: "180px"}}/></center>
          </div>
          <center><img src={air_remote} alt="" /></center>
          <center><img src={air_remote_display} alt="" /></center>
          <p><i>Control panel map</i></p>
        </div>
    </div>
  )
}

export default AirconditionGuide