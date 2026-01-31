
import React from 'react';
import { FaRoad, FaBuilding, FaTint, FaBolt, FaCogs, FaTruckLoading, FaVideo, FaLock } from 'react-icons/fa';
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
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding services-section">
            <div className="container">
                <h2 className="section-title">Our Capabilities</h2>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
