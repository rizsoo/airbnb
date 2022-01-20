import React from 'react'
import Header from '../../Header'
import './Transportation.css'
import publictransport from '../../img/publictransport.jpg'
import taxi from '../../img/taxi.jpg'
import carshare from '../../img/carshare.jpg'
import bubi from '../../img/bubi.jpg'
import bkk from '../../img/bkk.png'

// import '../../index.css'
import TransportSubmenu from './TransportSubmenu'

const Transportation = () => {
    return (
        <div>
            <Header />
            <h3 className="page-title">Transportation</h3>
                <TransportSubmenu 
                    image={publictransport}
                    title="Public Transport"
                    className="public-transport"
                    content={
                        <div className='public-transport-content'>
                            <p>Pro tip: Whenever you are getting around in Budapest I highly suggest you to use Google Maps.</p>
                            <p>The address of the apartment is <br /><b><a href='https://goo.gl/maps/Km6bhCybimrTLNrUA' target="_blank" rel="noreferrer">1137 Budapest, Katona József utca 10/B</a></b></p>
                            <img className='bkk-img' src={bkk} alt="" />
                        </div>
                    }
                />
                <TransportSubmenu 
                    image={taxi}
                    title="Taxi services"
                />
                <TransportSubmenu 
                    image={carshare}
                    title="Car sharing"
                />
                <TransportSubmenu 
                    image={bubi}
                    title="Two wheel share"
                />
        </div>
    )
}

export default Transportation
