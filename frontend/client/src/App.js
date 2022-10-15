import React from 'react';

import './index.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/home';
import Servics from './pages/services';
import Booknechanic from './pages/bookMechanic';
import Packages from './pages/packages';
import Aboutus from './pages/aboutUs';
import Contact from './pages/contact';
import Order from './pages/order'




function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Servics />} />
          <Route path='/bookmechanic' element={<Booknechanic />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/order' element={<Order/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
