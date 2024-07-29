import React from 'react';
import message from '../assets/email (3).png';
import map from '../assets/maps-and-flags.png';
import phone from '../assets/phone-call.png';
import arrow from '../assets/right-arrow.png';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "90f46ef0-565b-4f42-814e-181f3cb964a3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send Us a Message</h3>
                <p>Feel free to reach out through contact form or find our contact 
                    information below. Your feedback, questions, and suggestions are 
                    important to us as we strive to provide exceptional service to our 
                    school community.</p>
                <ul>
                    <li><img src={message} alt="" /> info@springdale.edu</li>
                    <li><img src={phone} alt="" /> +1 (123) 456-7890</li>
                    <li><img src={map} alt="" /> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</li>
                </ul>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d144.9537363153167!3d-37.8162797420219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779fd90c5a06b8!2sSpringdale%20Public%20School!5e0!3m2!1sen!2s!4v1597359048675!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type="number" name='phone no' placeholder='Enter your phone number' required />
                    <label>Email</label>
                    <input type="email" name='email id' placeholder='Enter your Email id' required />
                    <label>Write your message here</label>
                    <textarea type="text"  rows="6" placeholder='Enter your message' required/>
                    <button type='submit' className='btn dark-btn'>Submit Now
                    <img src={arrow} alt="arrow" className="arrow-icon" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact;
