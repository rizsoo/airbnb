import Header from "../../Header";
import "../Pages.css"
import data from './data_checkout.js';
import { useState } from "react";

function Checkout () {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current);

    return (
        
        <div className="checkout">
            <Header />
            <div className="content">
            {data.map((slide, index) => {
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