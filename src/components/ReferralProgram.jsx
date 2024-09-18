import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
const ReferralProgram = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <section className='refral_program'>
                <div className="container">

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h3>Referral Program</h3>
                            <p>Refer your friends & family looking for house construction and earn cashbacks/discounts* upto 25,000 INR today</p>
                            <Link onClick={handleShow}>Enquire Now! <ArrowRightAltOutlinedIcon /></Link>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://www.bricknbolt.com/assets/images/illustrations/refer.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            {/* Modl */}

            <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" style={{ background: show ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Refer a Friends</h3>
                            <button type="button" className="btn-close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="row">
                                    <div className="col-lg-6" style={{ borderRight: '2px dotted red' }}>
                                        <span style={{ fontSize: '0.8rem', color: '#f15a29' }}>Please fill in your details</span>
                                        <div className="mb-3 mt-2">
                                            <input type="Name" className="form-control" placeholder='Name*' required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="Email" className="form-control" placeholder="Email*" required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="tel" className="form-control" placeholder='Number*' />
                                        </div>
                                        <div className="mb-3">
                                            <textarea rows='1' className='form-control' placeholder='Messsage(optional)' id=""></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <span style={{ fontSize: '0.8rem', color: '#f15a29' }}>Please fill in the details of your references (Friends&Family)</span>
                                        <div className="mb-3 mt-2">
                                            <input type="Name" className="form-control" placeholder='Name*' required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="Email" className="form-control" placeholder="Email*" required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="tel" className="form-control" placeholder='Number*' />
                                        </div>

                                        <div className="mb-3">
                                            <select className='form-control' required>
                                                <option>Select City*</option>
                                                <option value="">Bengaluru</option>
                                                <option value="">Chennai</option>
                                                <option value="">Hydrabad</option>
                                                <option value="">Pune</option>
                                                <option value="">Jaipur</option>
                                                <option value="">NCR-Noida</option>
                                                <option value="">NCR-Fridabad</option>
                                                <option value="">NCR-Gurgaon</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <button type="submit" className="btn btn-danger w-100">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferralProgram