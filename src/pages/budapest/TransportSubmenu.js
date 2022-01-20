import React from 'react'
import './Transportation.css'
import publictransport from '../../img/publictransport.jpg'
import taxi from '../../img/taxi.jpg'
import carshare from '../../img/carshare.jpg'
import bubi from '../../img/bubi.jpg'
// import '../index.css'
import { useState } from 'react'

const TransportSubmenu = ({image, title, className, content}) => {
    const [isTPopupOpen, setIsTPopupOpen] = useState(false);

    const stopBodyScroll = function(){
        document.body.style.overflow = "hidden";
    }
    const unstopBodyScroll = function(){
        document.body.style.overflow = "auto";
    }
    
    let isOpen = isTPopupOpen ? true : null;
    return (
        <div>
            <div className={`transport-box ${className}`} onClick={() => setIsTPopupOpen(true) + stopBodyScroll()}>
                    <img src={image} alt=""/>
                    <h4>{title}</h4>
                </div>
                {isOpen? 
                    <div className='transport-popup'>
                        <ion-icon onClick={() => setIsTPopupOpen(false) + unstopBodyScroll()} name="close-circle-outline"></ion-icon>
                        <h3>{title}</h3>
                        {content}
                    </div> 
                : null}
                {isOpen?<div className='popup-shader' onClick={() => setIsTPopupOpen(false) + unstopBodyScroll()}></div>: null }
        </div>
    )
}

export default TransportSubmenu
