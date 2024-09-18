import React from 'react'
import about_banner from '../images/about_banner_img.png'
import ReferralProgram from './ReferralProgram'
import HireBestHouse from './HireBestHouse'
const About = () => {
    return (
        <>
            <div className='about_section_banner'>
                <figure className='with-overlay'>
                    <img src='https://meconprojects.com/assets/images/about-us-banner-mecon-projects.webp' alt="" />
                </figure>

                <div class="bb-banner-section-content">
                    <div class="container">
                        <h1 class="main-title">About Us</h1>
                        <p class="section-title">It all started with an idea, that changed the way we look at construction today. We started with the aim of making the construction simple, transparent and reliable .</p></div></div>
            </div>

            <section className='about_para_sec'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <figure>
                                <img src="https://estedama.com.sa/uploads/overview/slide_003_1.jpg" alt="" />
                            </figure>
                        </div>
                        <div className="col-lg-6">
                            <h2>Fully-integrated Turnkey Solutions</h2>
                            <p>For years, we have been providing key industry players in the region with both fully-integrated turnkey solutions and any individual service needed such as collection, transportation, segregation, treatment, or recycling of liquid and solid industrial waste.

                                Our team can also provide all necessary supporting services, such as industrial cleaning of process equipment, tanks, and vessels, collection of the post-cleaning industrial waste, as well as its proper handling and disposal.

                                We can further assist clients with engineering and designing their own treatment processes, alongside our environmental consultancy services.

                                The Oil & Gas and Petrochemicals industries produce significant amounts of industrial waste and hazardous materials. Estedama can handle a range of hazardous byproducts and complex industrial waste for further processing and recycling. We pride ourselves on our ability to tackle any challenge, while maintaining our commitment to sustainability and minimizing the environmental impact of our clients’ operations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='vision_mission'>
                <div className="container">
                    <h2>Vision & Mission</h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Our Vision</h3>
                            <p>We will be the leading, fully integrated, environmental services and industrial waste management entity in the Middle East region through strategic partnerships with innovative technology providers and close collaboration with key stakeholders offering high-quality, sustainable, and socially responsible solutions.</p>
                        </div>
                        <div className="col-lg-6">
                            <h3>Our Mission</h3>
                            <p>We aim to support Saudi Arabia’s circular economy and adhere to Saudi Arabia’s initiatives to protect the environment through the use of advanced technologies and practices that maximize industrial waste recycling.</p>
                        </div>
                    </div>
                </div>
            </section>
            <ReferralProgram />
            <HireBestHouse />
        </>
    )
}

export default About