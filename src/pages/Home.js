import React from 'react';
import FootPage from '../components/FootPage';
import Meteo from '../components/Meteo';
import Navigation from '../components/Navigation';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Slider />
            <Meteo />
            <FootPage />
        </div>
    );
};

export default Home;