import React, { useState } from 'react'
import './Stoveguide.css'
import Header from '../../../Header'
import HeaderTitle from '../../../HeaderTitle'

import stoveImg from '../../../img/stove_display.png'

import { useTranslation } from "react-i18next";

const Stoveguide = () => {
  const { t } = useTranslation();
  return (
    <div>
        <Header />
        <HeaderTitle title={t("stove_guide")} />
        <div className='text-content'>
          <p>You can use any pans you find in the kitchen. It is working also with the sizzling coffee maker.</p>
          <p><b>It will not work unless you put a pan on it.</b></p>
          <p><b>Steps to use:</b></p>
          <ul>
            <li>1. Press ’Power’ button until you hear a beeping sound.</li>
            <li>2. Put a pan on any stove place.</li>
            <li>3. Chose stove by pressing ’Lower’ or ’Upper’ button.</li>
            <li>4. Than press ’Plus’ button to chose heat level.</li>
          </ul>
          <p><b>Buttons</b></p>
          <center><img src={stoveImg} alt="" /></center>
          <center><p><i>Control panel map</i></p></center>
        </div>
    </div>
  )
}

export default Stoveguide