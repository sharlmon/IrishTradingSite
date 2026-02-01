
import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaRoad, FaIndustry, FaHome, FaGlobe, FaAnchor } from 'react-icons/fa';
import '../styles/Clients.css';

const clientsData = [
    {
        name: "Kenya Pipeline Company (KPC)",
        icon: <FaIndustry />,
        projects: [
            {
                title: "Security Fence Construction",
                description: "Construction of security fence around Port Reitz Tankfarm"
            },
            {
                title: "Fire Equipment Stores",
                description: "Construction of fire equipment stores at PS 14 (Kipevu), PS 5 (Mtito Andei), and PS 9 (Embakasi)"
            },
            {
                title: "High Capacity Pumps",
                description: "Supply of high-capacity portable diesel-driven pumps and reinforced hoses"
            },
            {
                title: "Oil Pipeline Instrumentation",
                description: "Supply, installation, and commissioning of oil pipeline instrumentation skid for Morendat Institute of Oil and Gas"
            }
        ]
    },
    {
        name: "Kenya Ports Authority (KPA)",
        icon: <FaAnchor />,
        projects: [
            {
                title: "Framework Agreement for Concrete Works",
                description: "Framework agreement for concrete works on a call-off order basis"
            }
        ]
    },
    {
        name: "County Government of Taita Taveta",
        icon: <FaBuilding />,
        projects: [
            {
                title: "Jomo Kenyatta High School",
                description: "Construction of administration block"
            }
        ]
    },
    {
        name: "GlobalGiving (Kenya Vision 2030)",
        icon: <FaGlobe />,
        projects: [
            {
                title: "Road Maintenance & Upgrading",
                description: "Upgrading to bitumen standard and maintenance of Chepareria–Centre Kwanza–Chepkobegh–Kabombo–Tamugh–Chepnyal road"
            }
        ]
    },
    {
        name: "Jura Construction (Juba Construction)",
        icon: <FaRoad />,
        projects: [
            {
                title: "Jonglei Government Road Rehabilitation",
                description: "Irko-Jiang road rehabilitation in Twic East, South Sudan"
            }
        ]
    },
    {
        name: "Gridlock Developers",
        icon: <FaHome />,
        projects: [
            {
                title: "Residential Building",
                description: "4-bedroom residential building on Kangundo Road"
            }
        ]
    }
];

const Clients = () => {
    return (
        <section id="clients" className="section-padding clients-section">
            <div className="container">
                <h2 className="section-title">Our Proud Clients</h2>
                <p className="section-subtitle">
                    Successfully collaborating with prominent organizations in both public and private sectors
                </p>

                <div className="clients-grid">
                    {clientsData.map((client, index) => (
                        <motion.div
                            key={index}
                            className="client-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="client-header">
                                <div className="client-icon">{client.icon}</div>
                                <h3>{client.name}</h3>
                            </div>

                            <div className="client-projects">
                                {client.projects.map((project, pIndex) => (
                                    <div key={pIndex} className="project-item">
                                        <h4>{project.title}</h4>
                                        <p>{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
