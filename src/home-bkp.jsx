import React from 'react';
import Packages from './Packages';
import ProjectsSlider from './ProjectsSlider';

import ReferralProgram from './ReferralProgram';
import HireBestHouse from './HireBestHouse';
import FaqsSection from './FaqsSection';
import CustomersSlider from './CustomersSlider';

import BannerSlider from './BannerSlider';
import WhyChoose from './WhyChoose';
import ServicesSection from './ServicesSection';
import '../css/home.css'
import { Link } from 'react-router-dom'
import CommonContactForm from './CommonContactForm';
import Clients from './Clients';
const Home = () => {



    return (
        <>
            <title>Home Construction Company | Best Home Builders | Brick &amp; Bolt</title>
            <meta name="description" content='Brick & Bolt Indians No.1 Tech-Enabled House Construction Company: Build your dream home with our expert home contractors & personalized approach. Schedule a free consultation today' />
            <meta name="keywords" content='' />
            <BannerSlider />


            <section className='location_sec'>
                <div className="container">
                    <h2>Our Locations</h2>
                    <div className="row">
                        <div className="col-lg-3 mx-auto">
                            <Link to='/construction-company-in-chennai'>
                                <div className="location_box">
                                    <div className="location_box_inner">
                                        <img alt="Chennai" src="https://www.deejos.com/images/chennai.png" />
                                        <h3>Chennai</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-3 mx-auto">
                            <Link to=''>
                                <div className="location_box">
                                    <div className="location_box_inner">
                                        <img alt="Chennai" src="https://www.deejos.com/images/chennai.png" />
                                        <h3>Delhi NCR</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* <div className="col-lg-3">
                            <Link to=''>
                                <div className="location_box">
                                    <div className="location_box_inner">
                                        <img alt="Chennai" src="https://www.deejos.com/images/chennai.png" />
                                        <h3>Delhi</h3>
                                    </div>
                                </div>
                            </Link>
                        </div> */}

                        <div className="col-lg-3 mx-auto">
                            <Link to='/construction-company-in-gujarat'>
                                <div className="location_box">
                                    <div className="location_box_inner">
                                        <img alt="Chennai" src="https://www.deejos.com/images/chennai.png" />
                                        <h3>Gujarat</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <section className='Completed_sec'>
                <div className="container-fluid">
                    <p>Actual Pictures</p>
                    <h3>Our Completed Site Pictures</h3>
                    <div className="row no-gutters">
                        <div className="col-md-6 col-lg-3 wow slideInUp">
                            <div className="project">
                                <img
                                    src="https://www.deejos.com/images/pearl-beach/beach-house-by-deejos-1.webp"
                                    className="img-fluid"
                                    alt="Beach House by Deejos"
                                    loading="lazy"
                                />

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow slideInRight">
                            <div className="project">
                                <img
                                    src="https://www.deejos.com/images/pearl-beach/beach-house-by-deejos-2.webp"
                                    className="img-fluid"
                                    alt="Best Architects in Hyderabad"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow slideInLeft">
                            <div className="project">
                                <img
                                    src="https://www.deejos.com/images/pearl-beach/beach-house-by-deejos-3.webp"
                                    className="img-fluid"
                                    alt="Architects in Hyderabad"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow slideInUp">
                            <div className="project">
                                <img
                                    src="https://www.deejos.com/images/pearl-beach/beach-house-by-deejos-4.webp"
                                    className="img-fluid"
                                    alt="Residential Architects in Hyderabad"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow slideInDown">
                            <div className="project">
                                <img
                                    src="https://www.deejos.com/images/pearl-beach/beach-house-by-deejos-5.webp"
                                    className="img-fluid"
                                    alt="Construction Company in Hyderabad"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow slideInLeft">
                            <div className="project">
                                <img
                                    src="https://www.deejos.com/images/pearl-beach/beach-house-by-deejos-6.webp"
                                    className="img-fluid"
                                    alt="Residential Construction Company in Hyderabad"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow slideInRight">
                            <div className="project">
                                <img
                                    src="https://www.deejos.com/images/pearl-beach/beach-house-by-deejos-7.webp"
                                    className="img-fluid"
                                    alt="Best Residential Architect in Hyderabad"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow slideInDown">
                            <div className="project">
                                <img
                                    src="https://www.deejos.com/images/pearl-beach/xbeach-house-by-deejos-8.webp.pagespeed.ic.CPB7yOmXF6.webp"
                                    className="img-fluid"
                                    alt="Top Construction Companies in Hyderabad"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <WhyChoose />

            <section className="services_sec_our_services">
                <div className="container">
                    <p className='span_services'>Our Services</p>
                    <h2>Our construction services </h2>


                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="service_box">
                                <img loading='lazy' src="https://senseprojects.in/assets/images/icon-image/residential.png" alt="tifdevelopers" />
                                <h3>Residential Construction                </h3>
                                <p>Looking to build, renovate, or upgrade your home? Our residential construction company is here to make your dreams come true. With our expertise and dedication, we can transform your vision into a beautiful, functional, and customized space that you'll love.
                                </p>
                                <button data-bs-toggle="modal" data-bs-target="#enquirenowModal"  >Enquire Now</button>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="service_box">
                                <img loading='lazy' src="https://senseprojects.in/assets/images/icon-image/industrial.png" alt="tifdevelopers" />
                                <h3>Industrial Construction
                                </h3>
                                <p>Our company specializes in providing top-notch construction services tailored specifically for industrial facilities. Whether you need a new industrial building, expansion of existing structures, or renovation of industrial spaces, we have the expertise to deliver outstanding results.</p>
                                <button>Enquire Now</button>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="service_box">
                                <img loading='lazy' src="https://senseprojects.in/assets/images/icon-image/commercial.png" alt="tifdevelopers" />
                                <h3>Commercial Construction
                                </h3>
                                <p>SPPL specializes in delivering top-quality construction services tailored specifically for commercial projects. Whether you're planning to build a new commercial space, renovate an existing one, or expand your business facilities, we have the expertise and resources to bring...</p>
                                <button>Enquire Now</button>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="service_box">
                                <img loading='lazy' src="https://senseprojects.in/assets/images/icon-image/hospital.png" alt="tifdevelopers" />
                                <h3>Hospitality Construction
                                </h3>
                                <p>Looking to create exceptional spaces in the hospitality industry? Our hospitality construction company specializes in delivering top-quality construction services tailored specifically for hotels, resorts, restaurants, and other hospitality establishments. With our extensive experience in the industry, we understand the unique</p>
                                <button>Enquire Now</button>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="service_box">
                                <img loading='lazy' src="https://senseprojects.in/assets/images/icon-image/institutional.png" alt="tifdevelopers" />
                                <h3>Institutional Construction
                                </h3>
                                <p>Whether you're looking to build educational facilities, healthcare institutions, government buildings, or cultural centers, we have the expertise and resources to fulfill your needs. With our extensive experience in the industry, we possess a deep understanding of the unique</p>
                                <button>Enquire Now</button>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="service_box">
                                <img loading='lazy' src="https://senseprojects.in/assets/images/icon-image/warehouse.png" alt="tifdevelopers" />
                                <h3>Warehouse Construction                </h3>
                                <p>Looking to build or expand a warehouse facility? Our warehouse construction company specializes in delivering top-quality construction services tailored specifically for warehouse constructions projects. Whether you need a new warehouse, an expansion, or renovation of an existing one, we have the expertise and resources to meet your</p>
                                <button>Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Filter /> */}
            {/* <ServicesSection /> */}

            <Clients />

            <ProjectsSlider />
            <Packages />
            <CustomersSlider />

            {/* <LuxuryPackages /> */}

            {/* <ReferralProgram /> */}

            <HireBestHouse />
            {/* <NewsSlider /> */}

            <FaqsSection />

            <CommonContactForm />

        </>
    )
}
export default Home;