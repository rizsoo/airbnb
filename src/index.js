import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Apartment from './pages/Apartment';
import Budapest from './pages/Budapest';
import Info from './pages/Info';
import Checkout from './pages/apartment/Checkout';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Guides from './pages/apartment/Guides';
import Parking from './pages/apartment/Parking';
import FoodandCulture from './pages/budapest/FoodandCulture';
import Tvguide from './pages/apartment/guides/Tvguide';
import Cafeguide from './pages/apartment/guides/Cafeguide';
import WashingmachineGuide from './pages/apartment/guides/WashingmachineGuide';
import BoilerGuide from './pages/apartment/guides/Boilerguide';
import StoveGuide from './pages/apartment/guides/Stoveguide';
import AirconditionGuide from './pages/apartment/guides/AirconditionGuide';

import Transportation from './pages/budapest/Transportation';
import { Suspense } from 'react';

const loadingMarkup = (
  <div>
    <h2>Loading...</h2>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/apartment' element={<Apartment />} />
      <Route path='/budapest' element={<Budapest />} />
      <Route path='/about' element={<Info />} />
      <Route path='/check-out' element={<Checkout />} />
      <Route path='/guides' element={<Guides />} />
      <Route path='/parking' element={<Parking />} />
      <Route path='/foodandculture' element={<FoodandCulture />} />
      <Route path='/tvguide' element={<Tvguide />} />
      <Route path='/cafeguide' element={<Cafeguide />} />
      <Route path='/washingmachineguide' element={<WashingmachineGuide />} />
      <Route path='/boilerguide' element={<BoilerGuide />} />
      <Route path='/stoveguide' element={<StoveGuide />} />
      <Route path='/aircondition' element={<AirconditionGuide />} />
      <Route path='/public-transport' element={<Transportation />} />
    </Routes>
  </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
