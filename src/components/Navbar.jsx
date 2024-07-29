import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/open-book (2).png';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="site-name">SPRINGDALE PUBLIC SCHOOL</span> {/* Add the name next to the logo */}
      </div>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
        <li><Link to='acad' smooth={true} offset={-260} duration={500} >Academics</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} >About Us</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} >Facilities</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} >Students</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} >Gallery</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' >Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
