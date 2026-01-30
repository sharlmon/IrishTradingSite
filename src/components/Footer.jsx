
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h4>IRISH TRADING ENTERPRISES LTD</h4>
                    <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
                </div>

                <div className="footer-links">
                    {/* Add social media links here if provided */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
