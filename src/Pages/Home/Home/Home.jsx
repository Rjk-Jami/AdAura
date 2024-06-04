import React from 'react';
import Banner from '../Banner/Banner';
import AboutService from '../AboutService/AboutService';
import Pricing from '../Pricing/Pricing';
import Process from '../Process/Process';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutService></AboutService>
            <Pricing></Pricing>
            <Process></Process>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;