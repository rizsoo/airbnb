import React from 'react'
import Header from '../../../Header'
import tverror from '../../../img/tv_error.png'
import './Tvguide.css'

function Tvguide() {
    return (
        <div>
            <Header />
            <h3 className="page-title">Tv guide</h3>
            <div className='no-connection'>
                <div className='no-connection-text'>
                <div>
                    <h4>No connection?</h4>
                    <p>Sometimes the tv loose its connection to the internet. This case just re-set the internet in the settings of the TV or plug out and in the Television’s power outlet.</p>
                </div>
                <img src={tverror} alt='' />
                </div>
                <p><i>*There are internet applications, but no cable tv on this device</i></p>
            </div>
            
        </div>
    )
}

export default Tvguide;