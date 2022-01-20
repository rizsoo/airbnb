import './Locations.css'
import { useState } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

function Locations(props) {
  const [showPopup, setShowPopup] = useState(false);

  const stopBodyScroll = function(){
    document.body.style.overflow = "hidden";
  }
  const unstopBodyScroll = function(){
    document.body.style.overflow = "auto";
  }

  const isBestOf = props.bestof ? true : null;
  return (
    <div className="locations">
      <div className='locations-section'>
        <img src={props.image} alt='image_locations'/>
          <div>
              <h3>{props.title}</h3>
              <p>{props.hashtags.split(' ').map(tag => {
                return (
                  " #" + tag
                )
              })}</p>
          </div>
      </div>
      {showPopup?<div className='popup-shader' onClick={() => setShowPopup(false)}></div>:null}
      <button onClick={() => setShowPopup(true) + stopBodyScroll()}>More</button>
      {
          showPopup?
      <div className='locations-popups'>
        <div className='popup-header'>
          <h4>{props.title}</h4>
          <ion-icon onClick={() => setShowPopup(false) + unstopBodyScroll()} name="close-circle-outline"></ion-icon>
        </div>
        <p>{props.hashtags.split(' ').map(tag => {
                return (
                  " #" + tag
                )
              })}</p>
        {isBestOf ?<div className='bestof'>{props.bestof}</div>:null}
        <img src={props.image} alt='image_locations'/>
        <p>{props.textarea}</p>
        <iframe 
          title={props.title} 
          width="100%" 
          height="300" 
          style={{border: 0, marginTop: 15 + "px"}} 
          loading="lazy" 
          allowfullscreen 
          src={props.maps}
        /> 
      </div>:null
        }
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBUXqCYjrqymmczj9I7gylsnlnMqXUYZXw'),
  version: 3.31
 })(Locations);