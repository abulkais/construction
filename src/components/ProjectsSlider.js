import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import project_img_1 from '../images/project_img_1.png'
const ProjectsSlider = () => {
    useEffect(() => {
        const carouselElement = document.getElementById('ProjectsSlider');
        if (carouselElement) {
            // Ensure you have Bootstrap's JS loaded
            const bootstrap = require('bootstrap');
            const carousel = new bootstrap.Carousel(carouselElement, {
                interval: 10000, // 3 seconds
            });
        }
    }, []);

    return (
        <section className='project_slider_section'>
            <div className="container">

                <h3>Our Projects</h3>
                <p>From a couple to a large Indian family, we have houses built with emotions for everyone.</p>

                <div id="ProjectsSlider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="card">
                                        <Link to='' className='d-block'>
                                            <figure>
                                                <img src={project_img_1} alt="" />
                                            </figure>
                                            <div className="card-footer">
                                                <p className="bb-project-code">CRN1925</p>
                                                <p className="bb-project-location">Nelamangala Town, Bengaluru</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card">
                                        <Link to='' className='d-block'>
                                            <figure>
                                                <img src={project_img_1} alt="" />
                                            </figure>
                                            <div className="card-footer">
                                                <p className="bb-project-code">CRN1925</p>
                                                <p className="bb-project-location">Nelamangala Town, Bengaluru</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card">
                                        <Link to='' className='d-block'>
                                            <figure>
                                                <img src={project_img_1} alt="" />
                                            </figure>
                                            <div className="card-footer">
                                                <p className="bb-project-code">CRN1925</p>
                                                <p className="bb-project-location">Nelamangala Town, Bengaluru</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card">
                                        <Link to='' className='d-block'>
                                            <figure>
                                                <img src={project_img_1} alt="" />
                                            </figure>
                                            <div className="card-footer">
                                                <p className="bb-project-code">CRN1925</p>
                                                <p className="bb-project-location">Nelamangala Town, Bengaluru</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="card">
                                        <Link to='' className='d-block'>
                                            <figure>
                                                <img src={project_img_1} alt="" />
                                            </figure>
                                            <div className="card-footer">
                                                <p className="bb-project-code">CRN1925</p>
                                                <p className="bb-project-location">Nelamangala Town, Bengaluru</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card">
                                        <Link to='' className='d-block'>
                                            <figure>
                                                <img src={project_img_1} alt="" />
                                            </figure>
                                            <div className="card-footer">
                                                <p className="bb-project-code">CRN1925</p>
                                                <p className="bb-project-location">Nelamangala Town, Bengaluru</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card">
                                        <Link to='' className='d-block'>
                                            <figure>
                                                <img src={project_img_1} alt="" />
                                            </figure>
                                            <div className="card-footer">
                                                <p className="bb-project-code">CRN1925</p>
                                                <p className="bb-project-location">Nelamangala Town, Bengaluru</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card">
                                        <Link to='' className='d-block'>
                                            <figure>
                                                <img src={project_img_1} alt="" />
                                            </figure>
                                            <div className="card-footer">
                                                <p className="bb-project-code">CRN1925</p>
                                                <p className="bb-project-location">Nelamangala Town, Bengaluru</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Add more carousel-item as needed */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#ProjectsSlider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#ProjectsSlider" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSlider;
