
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Projects.css';

// Import project images
import p1 from '../assets/building-construction.jpg';
import p2 from '../assets/tank-construction.jpg';
import p3 from '../assets/road-finished-1.jpg';
import p4 from '../assets/steel-structure.jpg';
import p5 from '../assets/foundation-wide.jpg';
import p6 from '../assets/rebar-work-detailed.jpg';

const projectsData = [
    { id: 1, category: 'Building', image: p1, title: 'Commercial Complex', location: 'Nairobi' },
    { id: 2, category: 'Civil', image: p2, title: 'Industrial Tank Farm', location: 'Mombasa' },
    { id: 3, category: 'Roads', image: p3, title: 'Access Road Paving', location: 'Central Region' },
    { id: 4, category: 'Structural', image: p4, title: 'Steel Warehouse Structure', location: 'Industrial Area' },
    { id: 5, category: 'Civil', image: p5, title: 'Foundation Works', location: 'Site A' },
    { id: 6, category: 'Structural', image: p6, title: 'Rebar Reinforcement', location: 'Site B' },
];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <section id="projects" className="section-padding projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-filter">
                    {['All', 'Civil', 'Building', 'Roads', 'Structural'].map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="projects-grid">
                    <AnimatePresence>
                        {filteredProjects.map(project => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="project-card"
                            >
                                <div className="project-img-wrapper">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <h3>{project.title}</h3>
                                        <p>{project.location}</p>
                                        <span className="project-category">{project.category}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
