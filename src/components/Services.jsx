
import React from 'react';
import { motion } from 'framer-motion';
import { FaRoad, FaBuilding, FaTint, FaBolt, FaCogs, FaTruckLoading, FaVideo, FaLock, FaSolarPanel } from 'react-icons/fa';
import '../styles/Services.css';

const servicesData = [
    {
        icon: <FaRoad />,
        title: "Civil Works & Road Engineering",
        description: "Expertise in road construction, bridges, dams, and large-scale civil infrastructure projects."
    },
    {
        icon: <FaBuilding />,
        title: "Building Construction",
        description: "High-quality residential and commercial building projects, delivered on time and within budget."
    },
    {
        icon: <FaCogs />,
        title: "Mechanical Engineering",
        description: "Industrial pumps, HVAC systems, and plumbing solutions for complex facilities."
    },
    {
        icon: <FaBolt />,
        title: "Electrical Engineering",
        description: "Design and installation of electrical systems, fire detection, and power generation solutions."
    },
    {
        icon: <FaTint />,
        title: "Water Works",
        description: "Comprehensive water engineering services, drainage systems, and hydraulic structures."
    },
    {
        icon: <FaTruckLoading />,
        title: "General Supply",
        description: "Supply of construction materials, geothermal drilling equipment, and industrial machinery."
    },
    {
        icon: <FaVideo />,
        title: "CCTV Systems",
        description: "Professional installation of surveillance cameras and monitoring systems for security and safety."
    },
    {
        icon: <FaLock />,
        title: "Access Control",
        description: "Modern access control solutions including biometric systems, card readers, and security gates."
    },
    {
        icon: <FaSolarPanel />,
        title: "Solar & Green Energy",
        description: "Sustainable energy solutions including solar panel installation, green power systems, and energy efficiency consulting."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
    return (
        <section id="services" className="section-padding services-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our Capabilities
                </motion.h2>
                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {servicesData.map((service, index) => (
                        <motion.div key={index} className="service-card" variants={itemVariants}>
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
