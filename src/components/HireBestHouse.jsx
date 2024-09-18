import React from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { Link } from 'react-router-dom';
const HireBestHouse = () => {
    return (
        <>
            <section className='hire_best_house'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Hire the best house construction service</h3>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="hire_best_home_inner_div">
                                        <p><img src="https://www.bricknbolt.com/assets/images/svg/total_projects.svg" alt="" /> <span>4500+</span></p>
                                        <h6>Homes</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="hire_best_home_inner_div">
                                        <p><img src="https://www.bricknbolt.com/assets/images/svg/qualitycheck.svg" alt="" /> <span>470+</span></p>
                                        <h6> Quality Checks</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="hire_best_home_inner_div">
                                        <p><img src="https://www.bricknbolt.com/assets/images/svg/rupee-orange.svg" alt="" /> <span>100%</span></p>
                                        <h6>Safe Money Transaction</h6>
                                    </div>
                                </div>
                            </div>

                            <Link>let's build <ArrowRightAltOutlinedIcon /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HireBestHouse