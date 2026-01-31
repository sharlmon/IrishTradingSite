
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../styles/Contact.css';


const Contact = () => {
    return (
        <section id="contact" className="section-padding contact-section">
            <div className="logo-watermark"></div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Let's Build Something Great Together</h3>
                        <p>We're ready to listen to your needs and bring your project to life. Contact us today for a consultation.</p>

                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <h4>Head Office</h4>
                                <p>Mayfair Center, 4th Floor, Ralph Bunche Road</p>
                                <p>Upper Hill, Nairobi</p>
                                <p className="postal">P.O. Box 16159-00100 G.P.O Nairobi</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaPhone className="info-icon" />
                            <div>
                                <h4>Phone</h4>
                                <p>+254 700 000 000</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <div>
                                <h4>Email</h4>
                                <p>info@irishtrading.co.ke</p>
                                <p>irishlimited@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaClock className="info-icon" />
                            <div>
                                <h4>Working Hours</h4>
                                <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                                <p>Sat: 8:00 AM - 1:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Phone Number" />
                        </div>
                        <input type="text" placeholder="Subject" required className="full-width-input" />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
