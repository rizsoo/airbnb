import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Apartment from './pages/Apartment';
import Budapest from './pages/Budapest';
import Info from './pages/Info';
import Checkout from './pages/Checkout';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Guides from './pages/Guides';
import Parking from './pages/Parking';
import FoodandCulture from './pages/FoodandCulture';
import Tvguide from './pages/guides/Tvguide';
import Cafeguide from './pages/guides/Cafeguide';
import Transportation from './pages/Transportation';

ReactDOM.render(
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
      <Route path='/public-transport' element={<Transportation />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
