import React from 'react'
import '../css/residential.css'
import { Link } from 'react-router-dom';
import CommonContactForm from './CommonContactForm';
import WhyChoose from './WhyChoose';
const CommercialProjects = () => {
    return (
        <>
            <section className='residential_sec'>
                <div className="residential_sec_banner">
                    <div className="container">
                        <h1>Commercial Project</h1>
                        <p><Link href="/"> <i class="fa fa-home"></i> Home  </Link> / <a>Commercial</a></p>
                    </div>
                </div>
            </section>



            <section className='rs_service'>
                <div className="container">
                    <h2>Commercial Services </h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="rs_service_box">
                                <img src="https://www.greenleafconstruction.co.in/images/services/commercial/commercial1-min.jpg" alt="" />
                                <center>  <button> Enquire Now</button></center>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="rs_service_box">
                                <img src="https://www.greenleafconstruction.co.in/images/services/commercial/commercial1-min.jpg" alt="" />
                                <center>  <button> Enquire Now</button></center>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="rs_service_box">
                                <img src="https://www.greenleafconstruction.co.in/images/services/commercial/commercial1-min.jpg" alt="" />
                                <center>  <button> Enquire Now</button></center>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="rs_service_box">
                                <img src="https://www.greenleafconstruction.co.in/images/services/commercial/commercial1-min.jpg" alt="" />
                                <center>  <button> Enquire Now</button></center>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="rs_service_box">
                                <img src="https://www.greenleafconstruction.co.in/images/services/commercial/commercial1-min.jpg" alt="" />
                                <center>  <button> Enquire Now</button></center>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="rs_service_box">
                                <img src="https://www.greenleafconstruction.co.in/images/services/commercial/commercial1-min.jpg" alt="" />
                                <center>  <button> Enquire Now</button></center>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <WhyChoose />
            <section className='project_exp'>
                <div className="container">
                    <h1>PROJECT EXPERIENCE</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="iframe">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596269.6572098015!2d74.33378378596294!3d28.329143787203172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce19466e19ae1%3A0x45ceeb565fd5de6c!2sNational%20Capital%20Region!5e0!3m2!1sen!2sin!4v1717496151003!5m2!1sen!2sin"
                                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <div className='iframe_details'>
                                    <h3>Delhi / NCR</h3>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4">
                            <div className="iframe">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777314.872995804!2d68.6848901800457!3d22.39949680100548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat!5e0!3m2!1sen!2sin!4v1717496105249!5m2!1sen!2sin"
                                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <div className='iframe_details'>
                                    <h3>Gujarat</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="iframe">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248755.79475951716!2d80.04419698151072!3d13.047807814214304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1717495977612!5m2!1sen!2sin"
                                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <div className='iframe_details'>
                                    <h3>Chennai</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 mx-auto mt-5">
                            <div className="iframe">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765978.00238801!2d61.00083698256399!3d19.729113061269327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1717496241551!5m2!1sen!2sin"
                                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <div className='iframe_details'>
                                    <h3>India</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CommonContactForm />
        </>
    )
}

export default CommercialProjects