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
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/serives">Services</Link></li>
                                <li><Link to="/how-it-works">How it works</Link></li>
                                <li><Link to="/our-projects">Our Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h3>Services</h3>
                            <ul>
                                <li> <Link to="/commercial">Commercial</Link></li>
                                <li> <Link to="/industrial">Industrial</Link></li>
                                <li> <Link to="/residential">Residential</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>

                                    <Link to="/about"> About us </Link>
                                </li>
                                <li>

                                    <Link to="/privacy-policy"> Privacy Policy</Link>
                                </li>
                                <li>

                                    <Link to="terms-conditions"> Terms Conditions </Link>
                                </li>
                               
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Contact</h3>
                            <p>
                                <PlaceIcon /> Brick&Bolt (PluckWalk Technologies Pvt. Ltd.) BM Habitat Mall, 2nd Floor, Jayalakshmipuram, Mysuru, Karnataka 570012
                            </p>
                            <p>
                                <Link to="mailto:info@greenleafconstruction.co.in">
                                    <DraftsIcon /> test@test.com
                                </Link>
                            </p>

                            <Link to='tel:'><PhoneIphoneIcon />+91 827 105 7255</Link>
                        </div>
                    </div>
                </div>
                <SocialMedia />
            </div>

        </>
    )
}

export default Footer