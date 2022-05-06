import React, { useState } from 'react'
import './Stoveguide.css'
import HeaderTitle from '../../../HeaderTitle'

import stoveImg from '../../../img/stove_display.png'

import { useTranslation } from "react-i18next";

const Stoveguide = () => {
  const { t } = useTranslation();
  return (
    <div>
        <HeaderTitle title={t("stove_guide")} />
        <div className='text-content'>
          <p>{t("stove_desc_1")}</p>
          <p><b>{t("stove_desc_2")}</b></p>
          <p><b>{t("stove_desc_3")}</b></p>
          <ul>
            <li>{t("stove_step_1")}</li>
            <li>{t("stove_step_2")}</li>
            <li>{t("stove_step_3")}</li>
            <li>{t("stove_step_4")}</li>
          </ul>
          <p><b>{t("stove_desc_4")}</b></p>
          <center><img src={stoveImg} alt="" /></center>
          <center><p><i>Control panel map</i></p></center>
        </div>
    </div>
  )
}

export default Stoveguide