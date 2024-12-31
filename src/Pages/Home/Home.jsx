import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BenefitsSection from './Benifit';
import DonationCamps from './DOnationCamp';

const Home = () => {
    return (
        <div>
            <Banner />
            <BenefitsSection />
            <DonationCamps/>
        </div>
    );
};

export default Home;