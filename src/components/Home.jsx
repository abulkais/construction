import React from 'react';
import Packages from './Packages';
import ProjectsSlider from './ProjectsSlider';

import ReferralProgram from './ReferralProgram';
import HireBestHouse from './HireBestHouse';
import FaqsSection from './FaqsSection';
import CustomersSlider from './CustomersSlider';

import BannerSlider from './BannerSlider';
import WhyChoose from './WhyChoose';
import ServicesSection from './ServicesSection';


const Home = () => {



    return (
        <>
            <title>Home Construction Company | Best Home Builders | Brick &amp; Bolt</title>
            <meta name="description" content='Brick & Bolt Indians No.1 Tech-Enabled House Construction Company: Build your dream home with our expert home contractors & personalized approach. Schedule a free consultation today' />
            <meta name="keywords" content='' />
            <BannerSlider />


            {/* <Filter /> */}
            <ServicesSection />

            <WhyChoose />

            <ProjectsSlider />
            <Packages />
            <CustomersSlider />

            {/* <LuxuryPackages /> */}

            <ReferralProgram />

            <HireBestHouse />
            {/* <NewsSlider /> */}

            <FaqsSection />

        </>
    )
}
export default Home;