import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';
import axios from 'axios';
const AutoLoadPopup = () => {
    const [show, setShow] = useState(true);
    const modalRef = useRef(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        const modal = new Modal(modalElement);

        // Show the modal after 4 seconds
        const timer = setTimeout(() => {
            modal.show();
        }, 10000);

        // Cleanup on unmount
        return () => {
            clearTimeout(timer);
            modal.dispose();
        };
    }, []); // Run only once on component mount

    const handleClose = () => {
        const modalElement = modalRef.current;
        const modal = Modal.getInstance(modalElement);

        // Hide the modal
        modal.hide();

        // Update state to hide the modal component
        setShow(false);
    };

    const handleModalHidden = () => {
        // Remove the backdrop when the modal is hidden
        document.body.classList.remove('modal-open');
        const modalBackdrops = document.getElementsByClassName('modal-backdrop');
        [...modalBackdrops].forEach(backdrop => backdrop.parentNode.removeChild(backdrop));
    };

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
        show && (
            <div className="modal fade" id="autoLoadModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef} >
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Talk To Our Experts</h5>
                            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='autoload_popup_box'>
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
                                        <textarea placeholder='Loction of your plot' className='form-control' value={message} onChange={(e) => setMessage(e.target.value)} rows='3' id=""></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <button type='submit' className='btn  w-100' disabled={isSubmitting}> {isSubmitting ? 'Please wait..' : 'Submit'}</button>
                                    </div>
                                </form>

                                {/* <form onSubmit={handleSubmit}>
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
                                        <button type='submit' className='btn w-100' disabled={isSubmitting} > {isSubmitting ? 'Please Wait...' : 'Book Your Consultant'}</button>
                                    </div>
                                </form> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        )
    );
};

export default AutoLoadPopup;
