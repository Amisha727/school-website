import React from 'react';
import primary1 from '../assets/knowledge.png';
import senior1 from '../assets/presentation_5618811.png';
import primary from '../assets/primary.png';
import secondary from '../assets/sec.jpg';
import senior from '../assets/senior.png';
import secondary1 from '../assets/teachings.png';
import './Academics.css';



const Academics = () => {
    return (
    <div className="acad">
        <div className="academics">
        <img src={primary} alt="Primary Education" />
        <div className='caption'>
            <img src={primary1} alt='' />
            <p>Primary Classes</p>
        </div>
        </div>
        <div className="academics">
        <img src={secondary} alt="Secondary Education" />
        <div className='caption'>
            <img src={secondary1} alt='' />
            <p>Secondary Classes</p>
        </div>
        </div>
        <div className="academics">
        <img src={senior} alt="Senior Education" />
        <div className='caption'>
            <img src={senior1} alt='' />
            <p>Senior-Secondary Classes</p>
        </div>
        </div>
    </div>
    );
};

export default Academics;

