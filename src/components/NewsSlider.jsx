import React, { useEffect } from 'react';
const NewsSlider = () => {
    useEffect(() => {
        const carouselElement = document.getElementById('NewsSlider');
        if (carouselElement) {
            // Ensure you have Bootstrap's JS loaded
            const bootstrap = require('bootstrap');
            const carousel = new bootstrap.Carousel(carouselElement, {
                interval: 10000, // 3 seconds
            });
        }
    }, []);

    return (
        <section className='news_slider_section'>
            <div className="container">


                <h3>Brick&Bolt In The News !</h3>

                <div id="NewsSlider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" style={{ cursor: 'grab' }}>
                    <ul className="carousel-indicators">
                        <li data-bs-target="#NewsSlider" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#NewsSlider" data-bs-slide-to="1"></li>
                        <li data-bs-target="#NewsSlider" data-bs-slide-to="2"></li>
                        <li data-bs-target="#NewsSlider" data-bs-slide-to="3"></li>
                        <li data-bs-target="#NewsSlider" data-bs-slide-to="4"></li>
                        <li data-bs-target="#NewsSlider" data-bs-slide-to="5"></li>

                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="news_slider_box">
                                        <img src="https://www.bricknbolt.com/assets/images/temp/BT.jpg" alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo rem, hic eaque ducimus quisquam accusantium minus in et, nobis sit, impedit dicta molestias quasi harum beatae! Officia, quae magni.</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ullam tempore deserunt qui doloremque alias beatae! Aspernatur praesentium voluptatem ipsam sed quidem odio illo odit, natus necessitatibus sequi veritatis numquam?</p>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="news_slider_box">
                                        <img src="https://www.bricknbolt.com/assets/images/temp/BT.jpg" alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo rem, hic eaque ducimus quisquam accusantium minus in et, nobis sit, impedit dicta molestias quasi harum beatae! Officia, quae magni.</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ullam tempore deserunt qui doloremque alias beatae! Aspernatur praesentium voluptatem ipsam sed quidem odio illo odit, natus necessitatibus sequi veritatis numquam?</p>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="news_slider_box">
                                        <img src="https://www.bricknbolt.com/assets/images/temp/BT.jpg" alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo rem, hic eaque ducimus quisquam accusantium minus in et, nobis sit, impedit dicta molestias quasi harum beatae! Officia, quae magni.</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ullam tempore deserunt qui doloremque alias beatae! Aspernatur praesentium voluptatem ipsam sed quidem odio illo odit, natus necessitatibus sequi veritatis numquam?</p>
                                    </div>
                                </div>



                            </div>
                        </div>


                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="news_slider_box">
                                        <img src="https://www.bricknbolt.com/assets/images/temp/BT.jpg" alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo rem, hic eaque ducimus quisquam accusantium minus in et, nobis sit, impedit dicta molestias quasi harum beatae! Officia, quae magni.</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ullam tempore deserunt qui doloremque alias beatae! Aspernatur praesentium voluptatem ipsam sed quidem odio illo odit, natus necessitatibus sequi veritatis numquam?</p>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="news_slider_box">
                                        <img src="https://www.bricknbolt.com/assets/images/temp/BT.jpg" alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo rem, hic eaque ducimus quisquam accusantium minus in et, nobis sit, impedit dicta molestias quasi harum beatae! Officia, quae magni.</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ullam tempore deserunt qui doloremque alias beatae! Aspernatur praesentium voluptatem ipsam sed quidem odio illo odit, natus necessitatibus sequi veritatis numquam?</p>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="news_slider_box">
                                        <img src="https://www.bricknbolt.com/assets/images/temp/BT.jpg" alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo rem, hic eaque ducimus quisquam accusantium minus in et, nobis sit, impedit dicta molestias quasi harum beatae! Officia, quae magni.</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ullam tempore deserunt qui doloremque alias beatae! Aspernatur praesentium voluptatem ipsam sed quidem odio illo odit, natus necessitatibus sequi veritatis numquam?</p>
                                    </div>
                                </div>



                            </div>
                        </div>
                        {/* Add more carousel-item as needed */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#NewsSlider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#NewsSlider" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default NewsSlider;
