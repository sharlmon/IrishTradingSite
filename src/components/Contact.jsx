
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../styles/Contact.css';


const Contact = () => {
    return (
        <section id="contact" className="section-padding contact-section">
            <div className="logo-watermark"></div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-layout">
                    {/* Left Column: Info Sidebar */}
                    <div className="contact-info-sidebar">
                        {/* Head Office Card */}
                        <div className="hub-card info-card">
                            <div className="card-icon-wrapper">
                                <FaMapMarkerAlt className="hub-icon" />
                            </div>
                            <h3>Head Office</h3>
                            <p>Mayfair Center, 4th Floor</p>
                            <p>Ralph Bunche Road, Upper Hill</p>
                            <p className="postal">P.O. Box 16159-00100 Nairobi</p>
                        </div>

                        {/* Working Hours Card */}
                        <div className="hub-card info-card">
                            <div className="card-icon-wrapper">
                                <FaClock className="hub-icon" />
                            </div>
                            <h3>Working Hours</h3>
                            <div className="hours-row">
                                <span>Mon - Fri:</span>
                                <span>8:00 AM - 5:00 PM</span>
                            </div>
                            <div className="hours-row">
                                <span>Saturday:</span>
                                <span>8:00 AM - 1:00 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Action Grid */}
                    <div className="contact-action-grid">
                        {/* General Inquiry Card */}
                        <div className="hub-card action-card">
                            <div className="card-icon-wrapper">
                                <FaEnvelope className="hub-icon" />
                            </div>
                            <h3>General Inquiry</h3>
                            <p>For general questions:</p>
                            <a href="mailto:info@irishtrading.co.ke" className="contact-link">info@irishtrading.co.ke</a>
                        </div>

                        {/* Sales Department Card */}
                        <div className="hub-card action-card">
                            <div className="card-icon-wrapper">
                                <FaPhone className="hub-icon" />
                            </div>
                            <h3>Sales & Projects</h3>
                            <p>Start your project:</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                <a href="tel:+254722131308" className="contact-link">0722 131 308</a>
                                <a href="tel:+254734131308" className="contact-link">0734 131 308</a>
                            </div>
                        </div>

                        {/* Support Card */}
                        <div className="hub-card action-card">
                            <div className="card-icon-wrapper">
                                <FaEnvelope className="hub-icon" />
                            </div>
                            <h3>Customer Support</h3>
                            <p>Existing client services:</p>
                            <a href="mailto:info@irishtrading.co.ke" className="contact-link">info@irishtrading.co.ke</a>
                        </div>

                        {/* CTA Card */}
                        <div className="hub-card cta-card action-card">
                            <h3>Ready to Start?</h3>
                            <p>Turn vision into reality.</p>
                            <a href="mailto:info@irishtrading.co.ke?subject=Project Inquiry" className="btn btn-primary pulse-btn">
                                Request a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
