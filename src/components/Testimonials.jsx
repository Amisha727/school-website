import React, { useRef } from 'react';
import left from '../assets/left-chevron.png';
import right from '../assets/right-chevron-.png';
import user_1 from '../assets/teacher-1.jpg';
import user_2 from '../assets/teacher-2.jpeg';
import user_3 from '../assets/teacher_3.jpg';
import user_4 from '../assets/teacher_4.jpeg';
import './Testimonials.css';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const SlideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const SlideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={right} alt="Next" className='next-btn' onClick={SlideForward} />
            <img src={left} alt="Previous" className='prev-btn' onClick={SlideBackward} />
            <div className='slider' ref={slider}>
                <ul ref={slider}>
                    <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt="Amiara" />
                        <div>
                            <h3>Amiara</h3>
                            <span>Springdale, IND</span>
                        </div>
                    </div>
                    <p>
                        Choosing to teach at Springdale was one of the 
                        best decisions I've ever made. The supportive community, 
                        state-of-the-art facilities, and commitment to academic 
                        excellence have truly exceeded my expectations.
                    </p>
                </div>
                </li>
                <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt="William Jackson" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Springdale, IND</span>
                        </div>
                    </div>
                    <p>
                        Choosing to teach at Springdale was one of the 
                        best decisions I've ever made. The supportive community, 
                        state-of-the-art facilities, and commitment to academic 
                        excellence have truly exceeded my expectations.
                    </p>
                </div>
                </li>
                <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt="John Doe" />
                        <div>
                            <h3>John Doe</h3>
                            <span>Springdale, IND</span>
                        </div>
                    </div>
                    <p>
                        Choosing to teach at Springdale was one of the 
                        best decisions I've ever made. The supportive community, 
                        state-of-the-art facilities, and commitment to academic 
                        excellence have truly exceeded my expectations.
                    </p>
                </div>
                </li>
                <li> 
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt="Tina John" />
                        <div>
                            <h3>Tina John</h3>
                            <span>Springdale, IND</span>
                        </div>
                    </div>
                    <p>
                        Choosing to teach at Springdale was one of the 
                        best decisions I've ever made. The supportive community, 
                        state-of-the-art facilities, and commitment to academic 
                        excellence have truly exceeded my expectations.
                    </p>
                </div>
                </li>
                </ul>
            </div>
        </div>
    );
}

export default Testimonials;
