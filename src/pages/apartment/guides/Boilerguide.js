import React from 'react'
import './Boilerguide.css'
import Header from '../../../Header'
import HeaderTitle from '../../../HeaderTitle'

import boilerImg from '../../../img/boiler_display.png'

import { useTranslation } from "react-i18next";

const Boilerguide = () => {
  const { t } = useTranslation();
  return (
    <div>
        <Header />
        <HeaderTitle title={t("boiler_guide")} />
        <div className='text-content'>
          <p>Water boiler can be found on the wall, in the small laundry room next to the bathroom.</p>
          <p><b>In case you run out of hot water, you need to press the ’PLUS’ button to higher the heating capacity. </b></p>
          <p>I normally leave it on ’ECO’.</p>
          <center><img src={boilerImg} alt="" /></center>
          <p><i>Control panel map</i></p>
        </div>
    </div>
  )
}

export default Boilerguide