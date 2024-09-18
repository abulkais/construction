import React from 'react'
import '../css/services.css'
import { Link } from 'react-router-dom'
import CommonContactForm from './CommonContactForm';
import EnquirePopup from './EnquirePopup';
import Clients from './Clients';
import ConstructionServices from './ConstructionServices';

const Services = () => {
  return (
    <>
      <section class="service_sec">
        <div class="serices_sec_banner">
          <div class="container">
            <h2>Services</h2>
            <p><Link to="/home"> <i className='fa fa-home'></i> Home  </Link> / <a>Services</a></p>
          </div>
        </div>
      </section>

      <ConstructionServices />
      <Clients />
      <CommonContactForm />
    </>
  )
}

export default Services