import React from 'react'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
    return (
        <>
            <div className="container-fluid copyright">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                Copyright ©2024 <Link to='/'>tifdevelopers</Link> , All Rights Reserved
                            </p>
                        </div>
                        <div className="col-md-6">

                            <div className="social-media2">
                                <Link to="https://www.facebook.com">
                                    <i className="fa fa-facebook" />
                                </Link>
                                <Link to="https://twitter.com">
                                    <i className="fa fa-twitter" />
                                </Link>
                                <Link to="https://www.linkedin.com/">
                                    <i className="fa fa-linkedin" />
                                </Link>
                                <Link to="https://www.instagram.com">
                                    <i className="fa fa-instagram" />
                                </Link>
                                <Link to="https://www.instagram.com">
                                    <i className="fa fa-youtube" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialMedia