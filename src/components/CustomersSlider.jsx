import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import project_img_1 from '../images/project_img_1.png'
const CustomersSlider = () => {
    useEffect(() => {
        const carouselElement = document.getElementById('CustomersSlider');
        if (carouselElement) {
            // Ensure you have Bootstrap's JS loaded
            const bootstrap = require('bootstrap');
            const carousel = new bootstrap.Carousel(carouselElement, {
                interval: 10000, // 3 seconds
            });
        }
    }, []);

    return (
        <section className='customer_slider_section'>
            <div className="container">


                <h3>Our Customers</h3>
                <p>Over 800 happy family members are part of Brick&Bolt family.</p>
                <div id="CustomersSlider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <iframe src="https://www.youtube.com/embed/fhbN15DytMQ?si=s5cxb05vXoMOuzYw"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allowfullscreen style={{ width: '100%', height: '15rem', maxHeight: '100%' }}>

                                        </iframe>



                                        <div className="card-footer">
                                            <p className="bb-project-location">The whole team was very very supportive and I am really very happy. I am an extremely happy customer, Thank you Brick&Bolt !</p>
                                            <p><strong>Mr. Channaverappa</strong></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card">
                                        <iframe src="https://www.youtube.com/embed/fhbN15DytMQ?si=s5cxb05vXoMOuzYw"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allowfullscreen style={{ width: '100%', height: '15rem', maxHeight: '100%' }}>

                                        </iframe>



                                        <div className="card-footer">
                                            <p className="bb-project-location">The whole team was very very supportive and I am really very happy. I am an extremely happy customer, Thank you Brick&Bolt !</p>
                                            <p><strong>Mr. Channaverappa</strong></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card">
                                        <iframe src="https://www.youtube.com/embed/fhbN15DytMQ?si=s5cxb05vXoMOuzYw"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allowfullscreen style={{ width: '100%', height: '15rem', maxHeight: '100%' }}>

                                        </iframe>
                                        <div className="card-footer">
                                            <p className="bb-project-location">The whole team was very very supportive and I am really very happy. I am an extremely happy customer, Thank you Brick&Bolt !</p>
                                            <p><strong>Mr. Channaverappa</strong></p>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>


                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <iframe src="https://www.youtube.com/embed/fhbN15DytMQ?si=s5cxb05vXoMOuzYw"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allowfullscreen style={{ width: '100%', height: '15rem', maxHeight: '100%' }}>

                                        </iframe>



                                        <div className="card-footer">
                                            <p className="bb-project-location">The whole team was very very supportive and I am really very happy. I am an extremely happy customer, Thank you Brick&Bolt !</p>
                                            <p><strong>Mr. Channaverappa</strong></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card">
                                        <iframe src="https://www.youtube.com/embed/fhbN15DytMQ?si=s5cxb05vXoMOuzYw"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allowfullscreen style={{ width: '100%', height: '15rem', maxHeight: '100%' }}>

                                        </iframe>



                                        <div className="card-footer">
                                            <p className="bb-project-location">The whole team was very very supportive and I am really very happy. I am an extremely happy customer, Thank you Brick&Bolt !</p>
                                            <p><strong>Mr. Channaverappa</strong></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card">
                                        <iframe src="https://www.youtube.com/embed/fhbN15DytMQ?si=s5cxb05vXoMOuzYw"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allowfullscreen style={{ width: '100%', height: '15rem', maxHeight: '100%' }}>

                                        </iframe>
                                        <div className="card-footer">
                                            <p className="bb-project-location">The whole team was very very supportive and I am really very happy. I am an extremely happy customer, Thank you Brick&Bolt !</p>
                                            <p><strong>Mr. Channaverappa</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Add more carousel-item as needed */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#CustomersSlider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#CustomersSlider" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CustomersSlider;
