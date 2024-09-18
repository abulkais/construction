import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import AutoLoadPopup from './AutoLoadPopup';
import TawkToChat from './TawkToChat';


const Navbar = () => {

    return (
        <>



            <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{ boxShadow: '0 0 0.25rem 0 rgba(0, 0, 0, 0.12)' }}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="https://www.bricknbolt.com/assets/images/logo/Logo_Home.svg" alt="" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'flex-end' }}>
                        <ul className="navbar-nav mb-2 mb-lg-0 ">

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Plot Locations
                                </a>
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            NCR-Gurgaon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            NCR-Faridabad
                                        </Link>
                                    </li>
                                    <li>

                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            NCR-Delhi
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/construction-company-noida">
                                            NCR-Noida
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Jaipur
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Hyderabad
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Chennai
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Bengaluru
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Pune
                                        </Link>
                                    </li>
                                </ul> */}

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
                                    <li>

                                    </li>



                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/services">
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/our-projects">
                                    Our Projects
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/how-it-works">
                                    How it Works
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="about"

                                >
                                    About us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact us
                                </Link>
                            </li>
                            <li className="nav-item nav-button-bg">
                                <Link to="#" class="nav-link  lets-build-shadow">Let’s Build<ArrowRightAltIcon /></Link>
                            </li>

                            <li class="nav-item" style={{ display: 'flex', alignItems: 'center', marginLeft: '1.6rem' }}>

                                <Link to="tel:+91 8271057255" className='btn btn-round' style={{ backgroundColor: '#007AFF', padding: '10px' }}>
                                    <span class="fa fa-phone text-white"></span>
                                </Link>
                                <div style={{ marginLeft: '5px', fontWeight: '500' }}>+91 827 105 7255</div></li>

                        </ul>

                    </div>
                </div>
            </nav>




            {/* tawk to chat widget  start*/}
            <TawkToChat />

            {/* tawk to chat widget end */}

            {/* popup start */}

            <AutoLoadPopup />
            {/* popup end */}




        </>
    )
}
export default Navbar;