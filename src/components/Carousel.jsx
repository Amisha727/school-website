import React from 'react';
import arrow from '../assets/right-arrow.png';
import './Carousel.css';

const Carousel = () => {
    return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</h1>
            <button className='btn'>Explore more<img src={arrow} alt="arrow" className="arrow-icon" /></button>
    </div>
    </div>
);
};

export default Carousel
