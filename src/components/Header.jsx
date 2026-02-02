import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

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
        { title: 'Home', path: '/' },
        { title: 'Services', path: '/services' },
        { title: 'Projects & Partners', path: '/projects' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`header ${isScrolled || location.pathname !== '/' ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo-link">
                    <img src={`${import.meta.env.BASE_URL}logo-header.png`} alt="Irish Trading Enterprises" className="logo-img" />
                </Link>

                <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.title} className="nav-item">
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    onClick={closeMenu}
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact" className="btn btn-primary header-cta" onClick={closeMenu}>
                        <FaPhoneAlt style={{ marginRight: '8px' }} /> Get Quote
                    </Link>
                </nav>

                <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    );
};

export default Header;
