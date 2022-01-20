import Header from "../../Header";
import "../Pages.css"

import { useState } from "react";
import i18next from "i18next";

import data from './data/data_checkout.js';
import hu_data from './data/data_hu_checkout';
import fr_data from './data/data_fr_checkout';
import it_data from './data/data_it_checkout';
import sp_data from './data/data_sp_checkout';
import de_data from './data/data_de_checkout';
import ru_data from './data/data_ru_checkout.js';

function Checkout () {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    function isCurrentLang() {
        if(i18next.language === "en") {
            return data
        } else if(i18next.language === "hu") {
            return hu_data
        } else if(i18next.language === "fr") {
            return fr_data
        } else if(i18next.language === "it") {
            return it_data
        } else if(i18next.language === "sp") {
            return sp_data
        } else if(i18next.language === "de") {
            return de_data
        } else if(i18next.language === "ru") {
            return ru_data
        }
    };

    const lang = isCurrentLang() ? isCurrentLang() : data;

    return (
        <div className="checkout">
            <Header />
            <div className="content">
            {lang.map((slide, index) => {
            return (
                <div className={index === current ? "checkout-background active" : "checkout-background"} key={index}>
                    {index === current && (<img src={slide.gif} alt="" />)}
                    {index === current && (<div className="checkout-steps">
                        <h5>{slide.count}. {slide.title}</h5>
                    </div>)}
                    
                </div>
                   )
                })}
                {current > 0 ? <div onClick={prevSlide} className="arrows prev-arrow"><ion-icon name="arrow-back-circle-outline"></ion-icon></div> : null}
                {current < data.length - 1 ? <div onClick={nextSlide} className="arrows next-arrow"><ion-icon name="arrow-forward-circle-outline"></ion-icon></div> : null}
            </div>
        </div>
     
    )
}
export default Checkout;