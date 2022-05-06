import React from 'react'
import './Boilerguide.css'
import HeaderTitle from '../../../HeaderTitle'

import boilerImg from '../../../img/boiler_display.png'

import { useTranslation } from "react-i18next";

const Boilerguide = () => {
  const { t } = useTranslation();
  return (
    <div>
        <HeaderTitle title={t("boiler_guide")} />
        <div className='text-content'>
          <p>{t("boiler_desc_1")}</p>
          <p><b>{t("boiler_desc_2")}</b></p>
          <p>{t("boiler_desc_3")}</p>
          <center><img src={boilerImg} alt="" /></center>
          <p><i>Control panel map</i></p>
        </div>
    </div>
  )
}

export default Boilerguide