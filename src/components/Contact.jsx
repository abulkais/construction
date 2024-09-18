import React, { useState, useEffect } from 'react';
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
            <section className='contact_section'>
                <div class="contact_section_inner"><img src="https://meconprojects.com/assets/images/contactus-banner-mecon-projects.webp" alt="Contact Details" /></div>
            </section>
            <section className='contact_section_form'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Address & Phone</h2>
                            <h5> <i className='fa fa-map-marker fa-lg'></i>  Brick&Bolt (PluckWalk Technologies Pvt. Ltd.) BM Habitat Mall, 2nd Floor, Jayalakshmipuram, Mysuru, Karnataka 570012</h5>
                            <h5><i className='fa fa-phone fa-lg'></i> <a to='/'>+91 8271-057-255</a> | <a to='/'>+91 8271-057-255</a></h5>
                            <h5><i className='fa fa-envelope fa-md'></i> <a to='/'>test@gmail.com</a> | <a to='/'>test2@gmail.com</a></h5>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact_section_form2">
                                <h2>Enquire Now</h2>
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
                                    <div>
                                        <button type='submit' className='btn w-100' style={{backgroundColor:'#f15a29', color:'#fff'}} disabled={isSubmitting} > {isSubmitting ? 'Please Wait...' : 'Book Your Consultant '} </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact