import React from 'react'
import './Cafeguide.css'
import Header from '../../../Header'
import Cafecomponent from '../../../components/cafe_component'

import step1 from '../../../img/cafe/cafe_step_1_2.png'
import step2 from '../../../img/cafe/cafe_step_2.png'
import step3 from '../../../img/cafe/cafe_step_3.png'
import step4 from '../../../img/cafe/cafe_step_4.png'
import step5 from '../../../img/cafe/cafe_step_5.png'

function Cafeguide() {
    return (
        <div>
            <Header />
            <h3 className="page-title">Cafe machine guide</h3>
            <Cafecomponent 
            title="Step 1."
            desc="Fill up the water container with purified water, than put it back correctly."
            image={step1}
            />
            <Cafecomponent 
            title="Step 2."
            desc="Press any of the buttons on the top and wait until the buttons stop to blink."
            image={step2}
            />
            <Cafecomponent 
            title="Step 3."
            desc="When the machine is ready you can put the capsule in, than close the lever."
            image={step3}
            />
            <Cafecomponent 
            title="Step 4."
            desc="Place a cup under it."
            image={step4}
            />
            <Cafecomponent 
            title="Step 5."
            desc="Choose your style and press one of the buttons."
            image={step5}
            />
        </div>
    )
}

export default Cafeguide
