import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaRoad, FaIndustry, FaHome, FaGlobe, FaAnchor, FaHardHat } from 'react-icons/fa';
import '../styles/Projects.css';

// Import project images
import constructionSlab from '../assets/construction-slab.jpg';
import drainageWorkers from '../assets/drainage-workers.jpg';
import stoneDrainage from '../assets/stone-drainage.jpg';
import completedDrainage1 from '../assets/completed-drainage-1.jpg';
import completedDrainage2 from '../assets/completed-drainage-2.jpg';
import stoneLinedDitch from '../assets/stone-lined-ditch.jpg';
import roadWetting from '../assets/road-wetting.jpg';
import asphaltPaver from '../assets/asphalt-paver.jpg';
import asphaltSpreading from '../assets/asphalt-spreading.jpg';
import roadCompaction from '../assets/road-compaction.jpg';
import finishedTarmacCurve from '../assets/finished-tarmac-curve.jpg';
import heavyRollerCompaction from '../assets/heavy-roller-compaction.jpg';
import roadShoulderWork from '../assets/road-shoulder-work.jpg';
import handPackingRoadEdge from '../assets/hand-packing-road-edge.jpg';
import smallRollerCompaction from '../assets/small-roller-compaction.jpg';
import finishedRoadGuardrails1 from '../assets/finished-road-guardrails-1.jpg';
import finishedRoadGuardrails2 from '../assets/finished-road-guardrails-2.jpg';
import finishedRoadStraight from '../assets/finished-road-straight.jpg';
import roadEdgeDrainage from '../assets/road-edge-drainage.jpg';
import roadMarkingsFinished from '../assets/road-markings-finished.jpg';
import curvedTarmacRoadCloseup from '../assets/curved-tarmac-road-closeup.jpg';
import walkingOnFinishedRoad from '../assets/walking-on-finished-road.jpg';
import largeRollerFinishing from '../assets/large-roller-finishing.jpg';
import deepStoneDrainage from '../assets/deep-stone-drainage.jpg';
import rebarSlabLarge from '../assets/rebar-slab-large.jpg';
import workersFoundationTanks from '../assets/workers-foundation-tanks.jpg';
import warehouseBuildingFront from '../assets/warehouse-building-front.jpg';
import rebarGridHeavy from '../assets/rebar-grid-heavy.jpg';
import buildingFrameConstruction from '../assets/building-frame-construction.jpg';

// Electrical / Instrumentation
import pipelineInstrumentation from '../assets/pipeline-instrumentation-1.jpg';
import junctionBoxWiring from '../assets/junction-box-wiring.jpg';
import controlPanelsNight from '../assets/control-panels-night.jpg';
import flowComputerDisplay from '../assets/flow-computer-display.jpg';
import pipelineValveGauge from '../assets/pipeline-valve-gauge.jpg';
import meteringSkidPs14 from '../assets/metering-skid-ps14.jpg';
import densityMeterInstallation from '../assets/density-meter-installation.jpg';
import flowMeterBlue from '../assets/flow-meter-blue.jpg';
import skidWiringWork from '../assets/skid-wiring-work.jpg';
import controlPanelWiring from '../assets/control-panel-wiring.jpg';
import cctvInstallation from '../assets/cctv-installation.png';
import accessControlSystem from '../assets/access-control-system.png';

const clientGroups = [
    {
        id: 'kpc',
        name: "Kenya Pipeline Company (KPC)",
        icon: <FaIndustry />,
        description: "Partnering on critical infrastructure, security systems, and pipeline instrumentation.",
        projects: [
            { id: 40, image: cctvInstallation, title: 'Site Surveillance System', location: 'Commercial Complex' },
            { id: 41, image: accessControlSystem, title: 'Biometric Access Control', location: 'Corporate HQ' },
            { id: 30, image: pipelineInstrumentation, title: 'Pipeline Instrumentation', location: 'KPC Oil Pipeline' },
            { id: 31, image: junctionBoxWiring, title: 'Industrial Junction Box', location: 'Control Systems' },
            { id: 32, image: controlPanelsNight, title: 'Control Panel Installation', location: 'Pipeline Station' },
            { id: 33, image: flowComputerDisplay, title: 'Flow Computer Systems', location: 'Metering Station' },
            { id: 34, image: pipelineValveGauge, title: 'Pipeline Valve & Gauge', location: 'Oil & Gas Facility' },
            { id: 35, image: meteringSkidPs14, title: 'PS14 Metering Skid', location: 'Kenya Pipeline Company' },
            { id: 36, image: densityMeterInstallation, title: 'Density Meter Installation', location: 'Pipeline Station' },
            { id: 37, image: flowMeterBlue, title: 'Flow Meter Assembly', location: 'Morendat Institute' },
            { id: 39, image: controlPanelWiring, title: 'Control Panel Wiring', location: 'Instrumentation Skid' },
        ]
    },
    {
        id: 'kpa',
        name: "Kenya Ports Authority (KPA)",
        icon: <FaAnchor />,
        description: "Framework agreement for concrete works and port infrastructure.",
        projects: [
            // Placeholder or reuse appropriate civil images that match 'Concrete Works'
            { id: 1, image: constructionSlab, title: 'Concrete Slab Foundation', location: 'Port Infrastructure' },
            { id: 25, image: rebarSlabLarge, title: 'Heavy Rebar Reinforcement', location: 'Foundation Works' },
        ]
    },
    {
        id: 'roads',
        name: "Road Infrastructure Partners (Jura / GlobalGiving)",
        icon: <FaRoad />,
        description: "Major road rehabilitation and upgrading projects across Kenya and South Sudan.",
        projects: [
            { id: 12, image: asphaltPaver, title: 'Asphalt Paving', location: 'Main Highway' },
            { id: 13, image: asphaltSpreading, title: 'Asphalt Spreading', location: 'Road Surfacing' },
            { id: 18, image: finishedTarmacCurve, title: 'Curved Access Road', location: 'Completed Project' },
            { id: 14, image: roadCompaction, title: 'Primary Compaction', location: 'Tarmac Layer' },
            { id: 19, image: finishedRoadGuardrails1, title: 'Road with Guardrails', location: 'Scenic Route' },
            { id: 22, image: roadMarkingsFinished, title: 'Road Marking', location: 'Traffic Safety' },
            { id: 5, image: completedDrainage2, title: 'Drainage Systems', location: 'Highway Section' },
        ]
    },
    {
        id: 'buildings',
        name: "Building & Development Partners",
        icon: <FaBuilding />,
        description: "Commercial and residential construction projects for County Governments and Developers.",
        projects: [
            { id: 28, image: warehouseBuildingFront, title: 'Modern Warehouse', location: 'Logistics Park' },
            { id: 29, image: buildingFrameConstruction, title: 'Multi-Story Framework', location: 'Commercial Complex' },
            { id: 26, image: rebarGridHeavy, title: 'Steel Grid Work', location: 'Construction Site' },
            { id: 27, image: workersFoundationTanks, title: 'Foundation & Tanks', location: 'Processing Plant' },
        ]
    },
    {
        id: 'civil',
        name: "General Civil Works",
        icon: <FaHardHat />,
        description: "Drainage, site preparation, and structural foundations.",
        projects: [
            { id: 2, image: drainageWorkers, title: 'Drainage Channel Construction', location: 'Infrastructure Project' },
            { id: 3, image: stoneDrainage, title: 'Stone Pitching Work', location: 'Roadside Drainage' },
            { id: 7, image: deepStoneDrainage, title: 'Deep Drainage Channel', location: 'Flood Control' },
            { id: 9, image: roadWetting, title: 'Base Preparation', location: 'Site Preparation' },
        ]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding projects-section">
            <div className="container">
                <h2 className="section-title">Our Projects & Partners</h2>
                <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    Delivering excellence for our trusted clients across diverse industries.
                </p>

                <div className="client-groups">
                    {clientGroups.map((group) => (
                        <div key={group.id} className="client-group-section" style={{ marginBottom: '4rem' }}>
                            <div className="group-header" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ fontSize: '2rem', color: 'var(--accent-green)' }}>{group.icon}</div>
                                <div>
                                    <h3 style={{ marginBottom: '0.2rem', fontSize: '1.5rem' }}>{group.name}</h3>
                                    <p style={{ color: 'var(--medium-gray)' }}>{group.description}</p>
                                </div>
                            </div>

                            <div className="projects-grid">
                                {group.projects.map(project => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        key={project.id}
                                        className="project-card"
                                    >
                                        <div className="project-img-wrapper">
                                            <img src={project.image} alt={project.title} />
                                            <div className="project-overlay">
                                                <h3>{project.title}</h3>
                                                <p>{project.location}</p>
                                            </div>
                                        </div>
                                        <div className="project-info">
                                            <h4>{project.title}</h4>
                                            <p>{project.location}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

