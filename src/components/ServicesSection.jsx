import React from 'react'
import { Link } from 'react-router-dom'
const ServicesSection = () => {
    return (
        <>
            <section className='servises_section'>
                <div className="container">
                    <h3>Our Services</h3>
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
        </>
    )
}

export default ServicesSection