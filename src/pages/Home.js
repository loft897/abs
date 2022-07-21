import React from 'react';
import FootPage from '../components/FootPage';
import Navigation from '../components/Navigation';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Slider />
            <FootPage />
        </div>
    );
};

export default Home;