import React from 'react';


import RegistrationForm from './RegistrationForm';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import { Whatsapp } from './Whatsapp';
import Mission from './Mission';


const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registrationform" element={<RegistrationForm/>} />
        <Route path="/whatsapp"element={<Whatsapp/>} />
        <Route path="/mission"element={<Mission/>} />
    </Routes>

      
   
  );
};

export default Allroutes;
