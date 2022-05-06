import React from 'react'
import './AirconditionGuide.css'
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
        <HeaderTitle title={t("air_guide")} />
        <div className='text-content'>
          <p>There are two air conditioning units in this apartment. Both can be set with both of the controllers.</p>
          <center><img className='panel-map' src={air_remote_display} alt="" /></center>
          <p><b>Both have the ability to cool down or warm up the flat.</b></p>
          <p>Rules:</p>
          <div>
            <div className='aircondition-rule'>
              <img src={air_1} alt="" />
              <h4>Close all windows when using airconditions!</h4>
            </div>
            <div className='aircondition-rule'>
              <img src={air_2} alt="" />
              <h4>Turn off airconditioning when checking out!</h4>
            </div>
            <div className='aircondition-rule'>
              <img src={air_3} alt="" />
              <h4>Please, avoid big temperature changes!</h4>
            </div>
          </div>
          <center><img className='remote-controll' src={air_remote} alt="" /></center>    
        </div>
    </div>
  )
}

export default AirconditionGuide