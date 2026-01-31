
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'About', href: '#about' },
        { title: 'Services', href: '#services' },
        { title: 'Projects', href: '#projects' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#home" className="logo-link">
                    <img src={`${import.meta.env.BASE_URL}logo-header.png`} alt="Irish Trading Enterprises" className="logo-img" />
                </a>

                <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.title} className="nav-item">
                                <a href={link.href} className="nav-link" onClick={closeMenu}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="btn btn-primary header-cta" onClick={closeMenu}>
                        <FaPhoneAlt style={{ marginRight: '8px' }} /> Get Quote
                    </a>
                </nav>

                <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    );
};

export default Header;
