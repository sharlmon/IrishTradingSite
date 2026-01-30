
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHardHat, FaAward, FaChartLine } from 'react-icons/fa';
import '../styles/About.css';
import aboutImage from '../assets/team-huddle.jpg'; // Using the team huddle image

const About = () => {
    return (
        <section id="about" className="section-padding about-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About Irish Trading</h2>
                    <p className="section-subtitle">A legacy of quality, honesty, and hard work since 2016.</p>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <img src={aboutImage} alt="Irish Trading Team" className="about-img" />
                        <div className="experience-badge">
                            <span className="years">8+</span>
                            <span className="text">Years of Excellence</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3>Building with Integrity</h3>
                        <p className="about-text">
                            Irish Trading Enterprises Limited is a premier construction and civil engineering firm in Kenya.
                            Incorporated in 2016, we have established ourselves as a reliable partner for large-scale infrastructure,
                            commercial, and industrial projects. Our mission is to deliver efficiency through quality,
                            honesty, and flexible programming.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-card">
                                <FaHardHat className="stat-icon" />
                                <h4>NCA 1</h4>
                                <p>Road Works</p>
                            </div>
                            <div className="stat-card">
                                <FaAward className="stat-icon" />
                                <h4>NCA 3</h4>
                                <p>Building Works</p>
                            </div>
                            <div className="stat-card">
                                <FaChartLine className="stat-icon" />
                                <h4>1.2B+</h4>
                                <p>Annual Revenue</p>
                            </div>
                            <div className="stat-card">
                                <FaCheckCircle className="stat-icon" />
                                <h4>100%</h4>
                                <p>Compliance</p>
                            </div>
                        </div>

                        <div className="compliance-list">
                            <h4>Accreditations</h4>
                            <ul>
                                <li><FaCheckCircle className="check-icon" /> NCA 4 Electrical & Mechanical</li>
                                <li><FaCheckCircle className="check-icon" /> NCA 6 Water Works</li>
                                <li><FaCheckCircle className="check-icon" /> ISO Compliant Processes</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
