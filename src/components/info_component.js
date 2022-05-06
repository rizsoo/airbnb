import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'
import './info_component.css'
import { useState } from 'react'
import { useTranslation } from "react-i18next";


const Pieces = (props) => {
    const [isShown, setIsShown] = useState(props.shown)
    const { t } = useTranslation();
    const linkable = props.link.length > 0 ? true : false;
  
    return (
        <div className='piece-content'>
            <div className='piece-content-left'>
                <img src={props.img} alt=""/>
                <div className='piece-textarea'>
                    <h4>{props.title}</h4>
                    {isShown ? <p>{linkable ? <a href={props.link} target="_blank">{props.description}<ion-icon name="open-outline"></ion-icon></a> : props.description}</p> : ""}
                </div>
            </div>
            {isShown ? "" : <button onClick={() => setIsShown(true)}>{t("hidden-info-show")}</button>}
        </div>
    )
}

export default Pieces
