import React from 'react';
import school_2 from '../assets/1d22ff7a62c35749a53f93c50c87a497.jpg';
import fest from '../assets/fest.jpg';
import fest_2 from '../assets/fest_2.png';
import arrow from '../assets/right-arrow.png';
import school from '../assets/school-1-1024x597.jpg';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={fest} alt='fest' />
                <img src={fest_2} alt='fest_2' />
                <img src={school} alt='school' />
                <img src={school_2} alt='school_2' />
            </div>
            <button className='btn dark-btn'>See more here
                <img src={arrow} alt="arrow" className="arrow-icon" />
            </button>
        </div>
    );
}

export default Gallery;
