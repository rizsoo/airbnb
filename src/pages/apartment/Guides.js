import React from 'react'
import Header from '../../Header'
import tvguide from "../../img/guides/tv.png"
import cafe from "../../img/guides/espresso.png"
import boiler from "../../img/guides/water-boiler.png"
import washing from "../../img/guides/washing-machine.png"
import stove from "../../img/guides/electric-stove.png"
import aircondition from "../../img/guides/air-conditioner.png"
import Machines from '../../components/guides_component'

const Guides = () => {
    return (
        <div>
            <Header />
            <div className='guides-page-content'>
                <Machines 
                    title="TV guide" 
                    image={tvguide}
                    link="/tvguide"
                />
                <Machines 
                    title="Cafe machine" 
                    image={cafe}
                    link="/cafeguide"
                />
                <Machines 
                    title="Boiler guide" 
                    image={boiler}
                    link="/boilerguide"
                />
                <Machines 
                    title="Washing machine" 
                    image={washing}
                    link="/washingmachineguide"
                />
                <Machines 
                    title="Stove guide" 
                    image={stove}
                    link="/stoveguide"
                />
                <Machines 
                    title="Air condition" 
                    image={aircondition}
                    link="/aircondition"
                />
            </div>
        </div>
    )
}

export default Guides
