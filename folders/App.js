// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login'; // Ensure you have these components
import Register from './Register'; // Ensure you have these components
import OilChangePage from './Oilchange';
import RateOilChangePage from './Rate';
import PriceOilChangePage from './Price';
import Details from './Details';
import Deta from './Deta';
import Appo from './Appo';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       <Route path="/oil-change" element={<OilChangePage/>}/>
       <Route path="/rate-oil-change" element={<RateOilChangePage/>}/>
       <Route path="/price-oil-change" element={<PriceOilChangePage/>}/>
        <Route path='/appoint' element={<Appo/>}/>
       <Route path="/detail" element={<Details/>}/>
       <Route path="/deta" element={<Deta/>}/>
      </Routes>
    </Router>
  );
};

export default App;
