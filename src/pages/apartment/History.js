import React from 'react'
import HeaderTitle from '../../HeaderTitle'
import './History.css'
import { useTranslation } from "react-i18next";
import img from '../../img/grandparents.JPG'
import img1 from '../../img/history/history1.JPG'
import img2 from '../../img/history/history2.JPG'
import img3 from '../../img/history/history3.JPG'
import img4 from '../../img/history/history4.jpg'
import img5 from '../../img/history/history5.JPG'
import img6 from '../../img/history/history6.JPEG'
import img7 from '../../img/history/history7.JPEG'


const History = () => {
    const { t } = useTranslation();
  return (
      <div>
        <HeaderTitle title={t("apartment-history")} />
        <div className='text-content'>
            <p>Let me tell you about the road that led to the apartment as it is today. </p>
            <p>My grandparents lived in this apartment between 1961 and 2006. They were one of the first occupants of this building. Since my father was raised here, he told me many stories about him going to school just a few blocks down and him parking cars in the underground garage for small tip, and rolling around with loud scooters, making sure, noone sleeps in the afternoon. </p>
            <img src={img} alt="" />
            <p>It was thanks to him that on my eighteen’s birthday he gave me a headstart and transcribed the proprietary of the flat on my name. In 2016, after 10 years it has been rented for long term tenants, I finally stood up and told him my idea: lets turn it into an Airbnb apartment. </p>
            <div className='history-img-column'>
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
            <p>After a huge renovation, in January of 2017 the apartment finally had its first Airbnb guests. Since than, I have paid the maximum amount of attention to every detail, so I remain one of the most highly ranked Airbnb hosts in Budapest. Well, of course there is still a lot more to go, but that is more or less the question of finantials. </p>
            <div className='history-img-column'>
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
            <img src={img7} alt="" />
        </div>
      </div>
    
  )
}

export default History