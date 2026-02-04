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
    // KPC Group removed as it is now covered by the detailed Featured Projects above
    /* 
    {
        id: 'kpc', ... (removed to avoid duplication)
    }, 
    */
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
        name: "Juba Infrastructure Projects (South Sudan)",
        icon: <FaRoad />,
        description: "Road rehabilitation and upgrading projects in Juba, partnering with Jura / GlobalGiving.",
        projects: [
            { id: 12, image: asphaltPaver, title: 'Asphalt Paving', location: 'Juba Highway' },
            { id: 13, image: asphaltSpreading, title: 'Asphalt Spreading', location: 'Juba Road Network' },
            { id: 18, image: finishedTarmacCurve, title: 'Curved Access Road', location: 'Juba Infrastucture' },
            { id: 14, image: roadCompaction, title: 'Primary Compaction', location: 'Tarmac Layer' },
            { id: 19, image: finishedRoadGuardrails1, title: 'Road with Guardrails', location: 'South Sudan' },
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

// Import KPC Master Meter Images
import kpcMeter1 from '../assets/kpc-meter-1.jpg';
import kpcMeter2 from '../assets/kpc-meter-2.jpg';
import kpcMeter3 from '../assets/kpc-meter-3.jpg';
import kpcMeter4 from '../assets/kpc-meter-4.jpg';
import kpcMeter5 from '../assets/kpc-meter-5.jpg';
import kpcMeter6 from '../assets/kpc-meter-6.jpg';
import kpcMeter7 from '../assets/kpc-meter-7.jpg';
import kpcMeter8 from '../assets/kpc-meter-8.jpg';

const kpcImages = [kpcMeter1, kpcMeter2, kpcMeter3, kpcMeter4, kpcMeter5, kpcMeter6, kpcMeter7, kpcMeter8];

// Import KPC Firestore Images
import kpcFirestore1 from '../assets/kpc-firestore-1.jpg';
import kpcFirestore2 from '../assets/kpc-firestore-2.jpg';
import kpcFirestore3 from '../assets/kpc-firestore-3.jpg';
import kpcFirestore4 from '../assets/kpc-firestore-4.jpg';
import kpcFirestore5 from '../assets/kpc-firestore-5.jpg';

const kpcFirestoreImages = [kpcFirestore1, kpcFirestore2, kpcFirestore3, kpcFirestore4, kpcFirestore5];

// Import KPC Fire Stores Images
import kpcFireStores1 from '../assets/kpc-fire-stores-1.jpg';
import kpcFireStores2 from '../assets/kpc-fire-stores-2.jpg';
import kpcFireStores3 from '../assets/kpc-fire-stores-3.jpg';
import kpcFireStores4 from '../assets/kpc-fire-stores-4.jpg';
import kpcFireStores5 from '../assets/kpc-fire-stores-5.jpg';
import kpcFireStores6 from '../assets/kpc-fire-stores-6.jpg';

const kpcFireStoresImages = [kpcFireStores1, kpcFireStores2, kpcFireStores4, kpcFireStores5]; // Start with completed shot

// Import KPC Fence Images
import kpcFence1 from '../assets/kpc-fence-1.jpg'; // Keep import for now or remove? Instruction says removes from array. I will remove from array.
import kpcFence2 from '../assets/kpc-fence-2.jpg';
import kpcFence3 from '../assets/kpc-fence-3.jpg';
import kpcFence4 from '../assets/kpc-fence-4.jpg';
import kpcFence5 from '../assets/kpc-fence-5.jpg';
import kpcFence6 from '../assets/kpc-fence-6.jpg';
import kpcFence7 from '../assets/kpc-fence-7.jpg';

const kpcFenceImages = [kpcFence2, kpcFence3, kpcFence4, kpcFence5, kpcFence6, kpcFence7];

const Projects = () => {
    return (
        <section id="projects" className="section-padding projects-section">
            <div className="container">
                <h2 className="section-title">Our Projects & Partners</h2>
                <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    Delivering excellence for our trusted clients across diverse industries.
                </p>

                {/* Featured Project: KPC Master Meter */}
                <div className="featured-project">
                    <div className="featured-header">
                        <span className="featured-label">Featured Project</span>
                        <h3 className="featured-title">
                            Supply, Installation and Commissioning of Master Meter Proving System
                        </h3>
                        <div className="featured-meta">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaIndustry /> Kenya Pipeline Company Limited</span>
                            <span>•</span>
                            <span>Major Infrastructure Upgrade</span>
                        </div>
                    </div>

                    <div className="featured-content">
                        <div className="featured-scope">
                            <h4>Scope of Works</h4>
                            <p>
                                The scope of works involved the supply of critical material and equipment including <strong>prover meters, flow computers, temperature and pressure transmitters</strong>, and trucks.
                                <br /><br />
                                The project executed the <strong>modification of pipework</strong> to allow for the installation of meter calibration loops, followed by the comprehensive <strong>testing and commissioning</strong> of the master meter proving and verification system. This infrastructure is vital for ensuring accurate flow measurement and operational efficiency in the pipeline network.
                            </p>
                        </div>

                        <div className="featured-gallery">
                            {kpcImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="gallery-item"
                                >
                                    <img src={img} alt={`KPC Master Meter Work ${index + 1}`} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Featured Project 2: Firestore Building */}
                <div className="featured-project">
                    <div className="featured-header">
                        <span className="featured-label">Featured Project</span>
                        <h3 className="featured-title">
                            Firestore Building at PS 10 – Kenya Pipeline Company Limited (Nairobi Terminal)
                        </h3>
                        <div className="featured-meta">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaBuilding /> Kenya Pipeline Company Limited</span>
                            <span>•</span>
                            <span>Civil Construction</span>
                        </div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-scope">
                            <h4>Scope of Works</h4>
                            <p>
                                Comprehensive civil engineering and construction of the Firestore Building at KPC's PS 10 Nairobi Terminal. The project involved:
                                <br /><br />
                                • <strong>Structural Construction</strong>: Reinforced concrete foundation, slab work, and multi-story structural framing.<br />
                                • <strong>Site Preparation</strong>: Extensive rebar work and formwork installation.<br />
                                • <strong>Infrastructure</strong>: Integration with existing terminal facilities and safety systems.
                            </p>
                        </div>
                        <div className="featured-gallery">
                            {kpcFirestoreImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="gallery-item"
                                >
                                    <img src={img} alt={`KPC Firestore Construction ${index + 1}`} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Featured Project 3: Fire Equipment Stores */}
                <div className="featured-project">
                    <div className="featured-header">
                        <span className="featured-label">Featured Project</span>
                        <h3 className="featured-title">
                            Construction of Fire Equipment Stores at PS14 (Kipevu) – Kenya Pipeline Company Limited
                        </h3>
                        <div className="featured-meta">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaHardHat /> Kenya Pipeline Company Limited</span>
                            <span>•</span>
                            <span>Industrial Safety Infrastructure</span>
                        </div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-scope">
                            <h4>Scope of Works</h4>
                            <p>
                                Specialized construction of critical safety infrastructure at KPC's Kipevu Terminal (PS14). The project delivered:
                                <br /><br />
                                • <strong>Purpose-Built Storage</strong>: Secure, accessible housing for high-priority fire suppression equipment.<br />
                                • <strong>Structural Integrity</strong>: Reinforced masonry and steel roofing designed to withstand industrial conditions.<br />
                                • <strong>Site Integration</strong>: Seamless connectivity with existing emergency response routes and facilities.
                            </p>
                        </div>
                        <div className="featured-gallery">
                            {kpcFireStoresImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="gallery-item"
                                >
                                    <img src={img} alt={`Fire Equipment Store Construction ${index + 1}`} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Featured Project 4: Security Fence */}
                <div className="featured-project">
                    <div className="featured-header">
                        <span className="featured-label">Featured Project</span>
                        <h3 className="featured-title">
                            Security Fence Around Port Reitz Tank Farm (Kipevu) – KPC
                        </h3>
                        <div className="featured-meta">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaIndustry /> Kenya Pipeline Company Limited</span>
                            <span>•</span>
                            <span>Security Infrastructure</span>
                        </div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-scope">
                            <h4>Scope of Works</h4>
                            <p>
                                Enhancement of perimeter security for the Port Reitz Tank Farm. The project scope included:
                                <br /><br />
                                • <strong>High-Security Fencing</strong>: Installation of robust fencing solutions to secure strategic assets.<br />
                                • <strong>Civil Works</strong>: Concrete trenching, reinforcement for fence posts, and ground stabilization.<br />
                                • <strong>Perimeter Hardening</strong>: Ensuring full compliance with industrial security standards for sensitive energy infrastructure.
                            </p>
                        </div>
                        <div className="featured-gallery">
                            {kpcFenceImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="gallery-item"
                                >
                                    <img src={img} alt={`Security Fence Construction ${index + 1}`} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="client-groups">
                    {clientGroups.map((group) => (
                        <div key={group.id} className="featured-project">
                            <div className="featured-header">
                                <span className="featured-label">Project Partner</span>
                                <h3 className="featured-title">{group.name}</h3>
                                <div className="featured-meta">
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--accent-green)' }}>
                                        {group.icon}
                                    </span>
                                    <span>•</span>
                                    <span>Strategic Partnership</span>
                                </div>
                            </div>

                            <div className="featured-content">
                                <div className="featured-scope">
                                    <h4>Scope of Partnership</h4>
                                    <p>{group.description}</p>
                                </div>

                                <div className="featured-gallery">
                                    {group.projects.map(project => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                            key={project.id}
                                            whileHover={{ scale: 1.05 }}
                                            className="gallery-item"
                                        >
                                            <img src={project.image} alt={project.title} />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

