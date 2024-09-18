
import '../css/contact.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Contact = () => {

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
          

            <section class="page-title-bar">
                <div class="page-title-bar-overlay"></div>
                <div class="page-title-bar-inner">
                    <div class="container">

                        <div class="page-title-bar-heading">
                            <h2>
                                Contact Us</h2>
                            <p><Link href="index"> <i className='fa fa-home'></i> Home  </Link> / <a>Contact Us</a></p>

                        </div>

                    </div>
                </div>
            </section>

            <section className='upper_contact_sec'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="upper_contact_sec_div">
                                <h2> <i className='fa fa-envelope'></i> Write To Us </h2>
                                <div className="div_mail">
                                    <a href="mailto:">info@trif.com</a>
                                    <a href="mailto:">tifdevelopers@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="upper_contact_sec_div">
                                <h2> <i className='fa fa-phone'></i> call support  24/7	 </h2>
                                <div className="div_mail">
                                    <a href="tel:9717224326"> +91 9717224326 (10 AM - 10 PM)</a>
                                    <a href="tel:9717483516"> +91 9717483516 (10 AM - 10 PM)</a>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="upper_contact_sec_div">
                                <h2> <i className='fa fa-map-marker'></i> Visit Us </h2>
                                <div className="div_mail">
                                    <a href="mailto:">TIFdevelopers  D - 112, New Ashok Nagar Delhi 110096</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact_section_form'>
                <div className="container">

                    <div className="row">
                        <div className="col-md-8">
                            <div className="contact_section_form2">
                                <h2>Ready to get started?
                                    TIFdevelopers.</h2>
                                <p>Please fill out the form below, and a member of our team will get back to you as soon as possible.</p>
                                <form onSubmit={handleSubmit}>
                                    {error && (
                                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                            {error} - {countdown}
                                            <button className="btn-close border-0 bg-transparent" onClick={() => setError('')}></button>
                                        </div>
                                    )}
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name*' />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <input type="tel" className='form-control' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Number*' />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email*' />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mt-3">
                                                <textarea name="" placeholder='Loction of your plot or Message' value={message} onChange={(e) => setMessage(e.target.value)} className='form-control' rows='5' id=""></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">

                                            <button type='submit' disabled={isSubmitting} > {isSubmitting ? 'Please Wait...' : 'Book Your Consultant '} </button>

                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact_social_media_sec">
                                <h3>Follow US</h3>
                                <div className="social_media_div">
                                    <a href=""><i className='fa fa-instagram'></i></a>
                                    <a href=""><i className='fa fa-facebook'></i></a>
                                    <a href=""><i className='fa fa-twitter'></i></a>
                                    <a href=""><i className='fa fa-linkedin'></i></a>
                                    <a href=""><i className='fa fa-youtube'></i></a>

                                </div>
                                <img width="301" height="420" src="https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/contact-info-img.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact