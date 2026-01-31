import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';
import logo from '../assets/logo-header.png'; // Assuming same logo usage or text

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">

                {/* Column 1: Company Info */}
                <div className="footer-col company-col">
                    <h3 className="footer-logo-text">IRISH TRADING <span>ENTERPRISES</span></h3>
                    <p className="footer-desc">
                        Leading the way in civil engineering and construction excellence across Kenya.
                        Committed to quality, safety, and innovation in every project we undertake.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col links-col">
                    <h4>Quick Links</h4>
                    <ul className="footer-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Our Services</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/partners">Partners</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="footer-col contact-col">
                    <h4>Contact Us</h4>
                    <ul className="contact-list">
                        <li>
                            <FaMapMarkerAlt className="contact-icon" />
                            <span>
                                P.O. Box 1234 - 00100,<br />
                                Nairobi, Kenya
                            </span>
                        </li>
                        <li>
                            <FaPhoneAlt className="contact-icon" />
                            <a href="tel:+254700000000">+254 700 000 000</a>
                        </li>
                        <li>
                            <FaEnvelope className="contact-icon" />
                            <a href="mailto:info@irishtrading.co.ke">info@irishtrading.co.ke</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="container bottom-content">
                    <p>&copy; {new Date().getFullYear()} Irish Trading Enterprises Ltd. All Rights Reserved.</p>
                    <p className="credit">Built for Excellence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
