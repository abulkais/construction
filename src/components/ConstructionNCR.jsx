import React from 'react'
import BannerSlider from './BannerSlider'
import { Link } from 'react-router-dom'
import NewsSlider from './NewsSlider'
import ReferralProgram from './ReferralProgram'
import LuxuryPackages from './LuxuryPackages'
import CustomersSlider from './CustomersSlider'
import Packages from './Packages'
import ProjectsSlider from './ProjectsSlider'
const ConstructionNCR = () => {
    return (
        <>
            <BannerSlider />

            <section className='construction_top_sec'>
                <div className="container">
                    <h1>Construction Company in Delhi - NCR</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati quos vel vitae laboriosam magni voluptates et facilis illo expedita necessitatibus ullam magnam, nobis ducimus earum excepturi iusto doloribus nam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur voluptatibus facere animi illum nobis eum mollitia perferendis nemo, fugiat incidunt. Error dolore, architecto animi sapiente fugit iure tempora. Fugiat!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime facere impedit est dicta nulla ad tempora atque unde! Earum eaque omnis velit totam et, ullam quasi eos esse nobis tempore.</p>
                </div>
            </section>

            <section className='servises_section'>
                <div className="container">
                    <h3>Home Construction Services In Delhi -NCR</h3>
                    <p>Flawless construction powered by deep expertise.</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='bb-construction'>
                                <Link to="">
                                    <figure>
                                        <img src="https://www.bricknbolt.com/assets/images/temp/img_houseconstruction@3x.webp" alt="" />
                                    </figure>
                                    <div className='bb-construction__type'>
                                        <span>House Construction</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='bb-construction'>
                                <Link to="">
                                    <figure>
                                        <img src="https://www.bricknbolt.com/assets/images/temp/commercial_thumbnail.webp" alt="" />
                                    </figure>
                                    <div className='bb-construction__type'>
                                        <span>Construction for Business</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='why_section'>
                <div className="container">
                    <h3 style={{ width: '70%' }}>Why Choose Brick & Bolt as the Best Construction Company in Delhi - NCR?</h3>
                    <p>We ensure peace of mind, trust, and transparent house construction services.</p>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="why_section_bg">
                                <figure>
                                    <img src="https://bricknbolt-gallery.s3.ap-south-1.amazonaws.com/lp-construction-request-page/brick-bolt-payment-i-ilustration-3.svg" alt="" />
                                </figure>
                                <h4>Safe Money Transaction</h4>
                                <p>No Advance. Contractor is paid only once the work is complete</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="why_section_bg">
                                <figure>
                                    <img src="https://bricknbolt-gallery.s3.ap-south-1.amazonaws.com/lp-construction-request-page/brick-bolt-payment-i-ilustration-1.svg" alt="" />
                                </figure>
                                <h4>Absolute Transparency</h4>
                                <p>Clear and Detailed Quotation. Online tracking of projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="why_section_bg">
                                <figure>
                                    <img src="https://bricknbolt-gallery.s3.ap-south-1.amazonaws.com/lp-construction-request-page/brick-bolt-payment-i-ilustration-4.svg" alt="" />
                                </figure>
                                <h4>Assured Quality Control</h4>
                                <p>470+ Quality (QASCON) Checks performed by team of experts</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="why_section_bg">
                                <figure>
                                    <img src="https://bricknbolt-gallery.s3.ap-south-1.amazonaws.com/lp-construction-request-page/brick-bolt-payment-i-ilustration-2.svg" alt="" />
                                </figure>
                                <h4>Zero Delays</h4>
                                <p>Zero tolerance for delays</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectsSlider/>
            <Packages/>
            

            <ReferralProgram />

            {/* <NewsSlider /> */}
        </>
    )
}

export default ConstructionNCR