import React, { useState, useEffect } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import axios from 'axios';
const BannerSlider = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [countdown, setCountdown] = useState(10); // Countdown timer
    const [isSubmitting, setIsSubmitting] = useState(false); // Button state


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message
        setIsSubmitting(true); // Disable button and change text

        const user = { name, email, number, message };

        try {
            const response = await axios.post('http://localhost:8181/api/contact', user);
            alert(response.data.message);
            setIsSubmitting(false); // Re-enable button and reset text
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
                setCountdown(10); // Reset countdown timer when an error occurs
                // clear all fields after submit
                setName('');
                setEmail('');
                setNumber('');
                setMessage('');
                setIsSubmitting(false); // Re-enable button and reset text
            } else {
                setError('There was an error submit in!');
                setCountdown(10); // Reset countdown timer when an error occurs

            }
        }
    };


    useEffect(() => {
        let timer;
        if (error) {
            timer = setInterval(() => {
                setCountdown(prevCountdown => {
                    if (prevCountdown <= 1) {
                        clearInterval(timer);
                        setError('');
                        return 10;
                    }
                    return prevCountdown - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [error]);

    return (
        <>
            <section>
                <div id="demo" class="carousel slide" data-bs-ride="carousel">
                    {/* <!-- Indicators/dots --> */}
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        {/* <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button> */}
                    </div>


                    {/* <!-- The slideshow/carousel --> */}
                    <div class="carousel-inner">
                        {/* <div class="carousel-item active">
                            <img src="https://website-lps-marketing-data.s3.ap-south-1.amazonaws.com/website-lps/ncrPlain.webp" class="d-block" style={{ width: '100%' }} />
                        </div> */}
                        <div class="carousel-item active">
                            <img src="https://www.bricknbolt.com/assets/images/house-construction-1.jpg" class="d-block" style={{ width: '100%' }} />
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.bricknbolt.com/assets/images/house-construction-2.jpg" class="d-block" style={{ width: '100%' }} />
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.bricknbolt.com/assets/images/house-construction-3.jpg" class="d-block" style={{ width: '100%' }} />
                        </div>
                    </div>

                    {/* <!-- Left and right controls/icons --> */}
                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>

                <article className='form_style'>
                    <div className='form_style_inner'>

                        <h3>
                            Talk to our Expert
                        </h3>
                        <form onSubmit={handleSubmit}>
                            {error && (
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    {error} - {countdown}
                                    <button className="btn-close border-0 bg-transparent" onClick={() => setError('')}></button>
                                </div>
                            )}
                            <div className="mb-3">
                                <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name*' />
                            </div>
                            <div className="mb-3">
                                <input type="tel" className='form-control' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Number*' />
                            </div>
                            <div className="mb-3">
                                <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email*' />
                            </div>
                            <div className="mb-3">
                                <textarea name="" placeholder='Loction of your plot' value={message} onChange={(e) => setMessage(e.target.value)} className='form-control' rows='3' id=""></textarea>
                            </div>
                            <div className="mb-3">
                                <button type='submit' className='btn w-100' disabled={isSubmitting} > {isSubmitting ? 'Please Wait...' : 'Book Your Consultant'} <ArrowRightAltIcon /></button>
                            </div>
                        </form>

                    </div>
                </article>
            </section>
        </>
    )
}

export default BannerSlider