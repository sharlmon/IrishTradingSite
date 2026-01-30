
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import heroBg from '../assets/rebar-sky.jpg'; // Using the artistic rebar shot for the hero

const Hero = () => {
    return (
        <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        Building <span className="text-accent">Tomorrow's</span> Infrastructure
                    </h1>
                    <p className="hero-subtitle">
                        Leading the way in civil engineering and construction excellence across Kenya.
                        Quality, Safety, and Innovation in every project.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">View Our Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Us</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
