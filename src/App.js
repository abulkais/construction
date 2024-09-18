import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Helmet } from 'react-helmet';


import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import ConstructionNCR from './components/ConstructionNCR';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import OurProjects from './components/OurProjects';
import HowWorks from './components/HowWorks';
import ConstructionChennai from './components/ConstructionChennai';
import ConstructionGujarat from './components/ConstructionGujarat';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/construction-company-delhi-ncr' element={<ConstructionNCR />} />
          <Route path='/construction-company-in-chennai' element={<ConstructionChennai />} />
          <Route path='/construction-company-in-gujarat' element={<ConstructionGujarat />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
          <Route path='/our-projects' element={<OurProjects />} />
          <Route path='/how-it-works' element={<HowWorks />} />

          



        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}
export default App;