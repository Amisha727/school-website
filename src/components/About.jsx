import React from 'react';
import about_video from '../assets/5198161-uhd_3840_2160_25fps.mp4';
import './About.css';


const About = () => {
    return (
    <div className='about'>
        <div className="about-left">
        <video controls width="100%" height="auto">
                    <source src={about_video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </div>
        <div className="about-right">
            <h3>ABOUT SCHOOL</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>History: Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
            <p>Vision: To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
            <p>Mission: To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
            <p>Principal's Message: At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
            <p>Infrastructure and Facilities:
                State-of-the-art science and computer labs"
                Spacious and well-equipped classrooms"
                Library with a vast collection of books and digital resources"
                Sports facilities including a playground, gymnasium, and swimming pool
            </p>
        </div>
    </div>
    )
}

export default About
