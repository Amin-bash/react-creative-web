import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { WhoWeAre } from './components/WhoWeAre/WhoWeAre';
import { OurWork } from './components/OurWork/OurWork';
import { HireUs } from './components/HireUs/HireUs';
import { ContactUs } from './components/ContactUs/ContactUs';


function App() {
  return (
    <div className="hide-over-flow">
     <Navbar />
     <Header />
     <WhoWeAre />
     <OurWork />
     <HireUs />
     <ContactUs />
    </div>
  );
}

export default App;
