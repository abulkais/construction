import React from 'react'
import { Link } from 'react-router-dom'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DraftsIcon from '@mui/icons-material/Drafts';
import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppCall from './WhatsAppCall';
import Location from './Location';
import SocialMedia from './SocialMedia';
import PopupForm from './PopupForm';

const Footer = () => {
    return (
        <>

            <WhatsAppCall />
            <Location />
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="https://i.ibb.co/xfm1VPx/logo-removebg-preview.png" style={{ width: 'auto', height: '7rem' }} alt="" />
                            <p>Tifdevelopers Constructions Pvt. Ltd. is a nationally recognized construction company.</p>
                            {/* <h3>Quick Links</h3> */}
                            {/* <ul>
                                <li> <img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" /><Link to="/">Home</Link></li>
                                <li><img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" /> <Link to="/serives">Services</Link></li>
                                <li> <img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" /> <Link to="/how-it-works">How it works</Link></li>
                                <li> <img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" /> <Link to="">Our Projects</Link></li>
                                <li> <img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" /> <Link to="/contact">Contact</Link></li>
                            </ul> */}
                        </div>
                        <div className="col-md-2">
                            <h3>Our Services</h3>
                            <ul>
                                <li> <img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" /> <Link to="/commercial-construction-company">Commercial</Link></li>
                                <li> <img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" /> <Link to="/residential-construction-company">Industrial</Link></li>
                                <li> <img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" /> <Link to="/residential-construction-company">Residential</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" />  <Link to="/contact"> Contact us </Link>
                                </li>
                                <li>

                                    <img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" />  <Link to="/about"> About us </Link>
                                </li>

                                <li>
                                    <img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" />  <Link to="/gallery"> Gallery </Link>
                                </li>
                                <li>

                                    <img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" /> <Link to="/privacy-policy"> Privacy Policy</Link>
                                </li>
                                <li>

                                    <img src="https://demo.awaikenthemes.com/builtup/wp-content/themes/builtup/assets/images/readmore-arrow.svg" alt="" /> <Link to="terms-conditions"> Terms Conditions </Link>
                                </li>



                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Contact</h3>
                            <p>
                                <PlaceIcon /> TIFdevelopers  D - 112, New Ashok Nagar Delhi 110096
                            </p>
                            <p>
                                <Link to="mailto:info@greenleafconstruction.co.in">
                                    <DraftsIcon /> tifdevelopers@gmail.com
                                </Link>
                            </p>

                            <a to='tel:9717224326'><PhoneIphoneIcon />+91 971-722-4326</a>
                        </div>
                    </div>
                </div>
                <SocialMedia />
            </div>

        </>
    )
}

export default Footer