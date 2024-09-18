import React, { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import AutoLoadPopup from './AutoLoadPopup';
import TawkToChat from './TawkToChat';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>



            <nav className="sticky_navbar navbar navbar-expand-lg sticky-top navbar-light bg-white" style={{ boxShadow: '0 0 0.25rem 0 rgba(0, 0, 0, 0.12)' }}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="https://i.ibb.co/xfm1VPx/logo-removebg-preview.png" style={{ height: '5.3rem', width: '100%' }} alt="" />
                    </Link>
                    <button
                        className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
                        type="button"
                        onClick={toggleNavbar}
                        aria-controls="navbarNav"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Plot Locations
                                </a>


                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/construction-company-delhi-ncr">
                                            Delhi/NCR
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/construction-company-in-gujarat">
                                            Gujarat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/construction-company-in-chennai">
                                            Chennai
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/services">
                                    Services
                                </Link>
                            </li>


                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Our Projects
                                </a>


                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/residential-construction-company">
                                            Residential  Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/commercial-construction-company">
                                            Commercial Projects
                                        </Link>
                                    </li>
                                </ul>
                            </li>



                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/about">
                                    About us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact us
                                </Link>
                            </li>
                           

                            <li class="nav-item" style={{ display: 'flex', alignItems: 'center', marginLeft: '1.6rem' }}>

                                <Link to="tel:+91 8271057255" style={{ color: '#000', textDecoration: 'none' }}>
                                    <img src="https://kvch.in/assets-new/img/india.webp" alt="" />
                                    <span style={{ marginLeft: '5px', fontWeight: '500' }}>+91 827 105 7255</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >


            {/* tawk to chat widget  start*/}
            {/* <TawkToChat /> */}

            {/* tawk to chat widget end */}

            {/* popup start */}

            <AutoLoadPopup />
            {/* popup end */}




        </>
    )
}
export default Navbar;