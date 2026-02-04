import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaBuilding, FaRoad, FaIndustry, FaHome, FaGlobe, FaAnchor, FaHardHat,
    FaTimes, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearchPlus
} from 'react-icons/fa';
import '../styles/Projects.css';

// --- Image Imports ---
// Civil / Roads
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

// KPC Specific Imports
import kpcMeter1 from '../assets/kpc-meter-1.jpg';
import kpcMeter2 from '../assets/kpc-meter-2.jpg';
import kpcMeter3 from '../assets/kpc-meter-3.jpg';
import kpcMeter4 from '../assets/kpc-meter-4.jpg';
import kpcMeter5 from '../assets/kpc-meter-5.jpg';
import kpcMeter6 from '../assets/kpc-meter-6.jpg';
import kpcMeter7 from '../assets/kpc-meter-7.jpg';
import kpcMeter8 from '../assets/kpc-meter-8.jpg';

import kpcFirestore1 from '../assets/kpc-firestore-1.jpg';
import kpcFirestore2 from '../assets/kpc-firestore-2.jpg';
import kpcFirestore3 from '../assets/kpc-firestore-3.jpg';
import kpcFirestore4 from '../assets/kpc-firestore-4.jpg';
import kpcFirestoreRebarDeck from '../assets/kpc-firestore-rebar-deck.jpg';
import kpcFirestoreConcreteMixer from '../assets/kpc-firestore-concrete-mixer.jpg';
import kpcFirestoreRebarWorkers from '../assets/kpc-firestore-rebar-workers.jpg';
import kpcFirestoreDeckOverview from '../assets/kpc-firestore-deck-overview.jpg';

import kpcFireStoresFront from '../assets/kpc-fire-stores-completed-front.jpg';

import kpcFence2 from '../assets/kpc-fence-2.jpg';
import kpcFence4 from '../assets/kpc-fence-4.jpg';
import kpcFence5 from '../assets/kpc-fence-5.jpg';
import kpcFence6 from '../assets/kpc-fence-6.jpg';
import kpcFence7 from '../assets/kpc-fence-7.jpg';

// --- Data Arrays ---

const featuredProjects = [
    {
        id: 'kpc-master-meter',
        category: 'industrial',
        label: 'Featured Project',
        title: 'Supply, Installation and Commissioning of Master Meter Proving System',
        client: 'Kenya Pipeline Company Limited',
        location: 'Major Infrastructure Upgrade',
        icon: <FaIndustry />,
        description: (
            <>
                The scope of works involved the supply of critical material and equipment including <strong>prover meters, flow computers, temperature and pressure transmitters</strong>, and trucks.
                <br /><br />
                The project executed the <strong>modification of pipework</strong> to allow for the installation of meter calibration loops, followed by the comprehensive <strong>testing and commissioning</strong> of the master meter proving and verification system. This infrastructure is vital for ensuring accurate flow measurement and operational efficiency in the pipeline network.
            </>
        ),
        techSpecs: {
            timeline: "12 Months",
            materials: "Prover Meters, Flow Computers, Pressure Transmitters",
            status: "Commissioned",
            challenges: "Live Pipeline Integration"
        },
        images: [kpcMeter1, kpcMeter2, kpcMeter3, kpcMeter4, kpcMeter5, kpcMeter6, kpcMeter7, kpcMeter8]
    },
    {
        id: 'kpc-firestore',
        category: 'civil',
        label: 'Featured Project',
        title: 'Firestore Building at PS 10 – Nairobi Terminal',
        client: 'Kenya Pipeline Company Limited',
        location: 'Civil Construction',
        icon: <FaBuilding />,
        description: (
            <>
                Comprehensive civil engineering and construction of the Firestore Building at KPC's PS 10 Nairobi Terminal. The project involved:
                <br /><br />
                • <strong>Structural Construction</strong>: Reinforced concrete foundation, slab work, and multi-story structural framing.<br />
                • <strong>Site Preparation</strong>: Extensive rebar work and formwork installation.<br />
                • <strong>Infrastructure</strong>: Integration with existing terminal facilities and safety systems.
            </>
        ),
        techSpecs: {
            timeline: "8 Months",
            materials: "Reinforced Concrete, Structural Steel",
            area: "450 sqm",
            features: "Multi-story, Safety Compliant"
        },
        images: [
            kpcFirestore1, kpcFirestore2, kpcFirestore3, kpcFirestore4,
            kpcFirestoreRebarDeck, kpcFirestoreConcreteMixer, kpcFirestoreRebarWorkers, kpcFirestoreDeckOverview
        ]
    },
    {
        id: 'kpc-firestores-ps14',
        category: 'civil',
        label: 'Featured Project',
        title: 'Construction of Fire Equipment Stores at PS14 (Kipevu)',
        client: 'Kenya Pipeline Company Limited',
        location: 'Industrial Safety Infrastructure',
        icon: <FaHardHat />,
        description: (
            <>
                Specialized construction of critical safety infrastructure at KPC's Kipevu Terminal (PS14). The project delivered:
                <br /><br />
                • <strong>Purpose-Built Storage</strong>: Secure, accessible housing for high-priority fire suppression equipment.<br />
                • <strong>Structural Integrity</strong>: Reinforced masonry and steel roofing designed to withstand industrial conditions.<br />
                • <strong>Site Integration</strong>: Seamless connectivity with existing emergency response routes and facilities.
            </>
        ),
        techSpecs: {
            timeline: "6 Months",
            materials: "Reinforced Masonry, Steel Roofing",
            access: "Emergency Response Routes",
            purpose: "Safety Equipment Storage"
        },
        images: [kpcFireStoresFront]
    },
    {
        id: 'kpc-security-fence',
        category: 'security',
        label: 'Featured Project',
        title: 'Security Fence Around Port Reitz Tank Farm (Kipevu)',
        client: 'Kenya Pipeline Company Limited',
        location: 'Security Infrastructure',
        icon: <FaIndustry />,
        description: (
            <>
                Enhancement of perimeter security for the Port Reitz Tank Farm. The project scope included:
                <br /><br />
                • <strong>High-Security Fencing</strong>: Installation of robust fencing solutions to secure strategic assets.<br />
                • <strong>Civil Works</strong>: Concrete trenching, reinforcement for fence posts, and ground stabilization.<br />
                • <strong>Perimeter Hardening</strong>: Ensuring full compliance with industrial security standards for sensitive energy infrastructure.
            </>
        ),
        techSpecs: {
            timeline: "4 Months",
            materials: "High-Tensile Fencing, Concrete Trenching",
            length: "Perimeter Coverage",
            compliance: "Industrial Security Standards"
        },
        images: [kpcFence2, kpcFence4, kpcFence5, kpcFence6, kpcFence7]
    }
];

const clientGroups = [
    {
        id: 'kpa',
        name: "Kenya Ports Authority (KPA)",
        icon: <FaAnchor />,
        description: "Framework agreement for concrete works and port infrastructure.",
        projects: [
            { id: 1, image: constructionSlab, title: 'Concrete Slab Foundation', location: 'Port Infrastructure' },
            { id: 25, image: rebarSlabLarge, title: 'Heavy Rebar Reinforcement', location: 'Foundation Works' },
        ]
    },
    {
        id: 'roads',
        name: "Juba Infrastructure Projects",
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

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeProject, setActiveProject] = useState(null);

    // Filter Logic
    const filteredProjects = featuredProjects.filter(project =>
        filter === 'all' ? true : project.category === filter
    );

    // Lightbox Logic
    const openLightbox = (image) => setSelectedImage(image);
    const closeLightbox = () => setSelectedImage(null);

    // Modal Logic
    const openModal = (project) => setActiveProject(project);
    const closeModal = () => setActiveProject(null);

    return (
        <section id="projects" className="section-padding projects-section">
            <div className="container">
                <h2 className="section-title">Our Projects & Partners</h2>
                <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    Delivering excellence for our trusted clients across diverse industries.
                </p>

                {/* --- Filter Bar --- */}
                <div className="projects-filter">
                    {['all', 'industrial', 'civil', 'security'].map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* --- Featured Projects List with AnimatePresence --- */}
                <div className="featured-projects-list">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="featured-project"
                            >
                                <div className="featured-header">
                                    <span className="featured-label">{project.label}</span>
                                    <h3 className="featured-title">{project.title}</h3>
                                    <div className="featured-meta">
                                        <div className="meta-item">{project.icon} <span>{project.client}</span></div>
                                        <div className="meta-item">•</div>
                                        <div className="meta-item"><span>{project.location}</span></div>
                                    </div>
                                </div>

                                <div className="featured-content">
                                    <div className="featured-scope">
                                        <h4>Scope of Works</h4>
                                        <p>{project.description}</p>
                                        <button
                                            className="view-specs-btn"
                                            onClick={() => openModal(project)}
                                        >
                                            <FaInfoCircle /> View Tech Specs
                                        </button>
                                    </div>

                                    <div className="featured-gallery">
                                        {project.images.map((img, index) => (
                                            <motion.div
                                                key={index}
                                                className="gallery-item"
                                                whileHover={{ scale: 1.02 }}
                                                onClick={() => openLightbox(img)}
                                            >
                                                <img src={img} alt={`${project.title} ${index + 1}`} loading="lazy" />
                                                <div className="gallery-overlay">
                                                    <FaSearchPlus style={{ color: 'white', fontSize: '1.5rem' }} />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* --- Client Groups (Static for now, but animated entry) --- */}
                <div className="client-groups">
                    {clientGroups.map((group) => (
                        <motion.div
                            key={group.id}
                            className="featured-project"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
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
                                            key={project.id}
                                            whileHover={{ scale: 1.05 }}
                                            className="gallery-item"
                                            onClick={() => openLightbox(project.image)}
                                        >
                                            <img src={project.image} alt={project.title} loading="lazy" />
                                            <div className="gallery-overlay">
                                                <FaSearchPlus style={{ color: 'white', fontSize: '1.5rem' }} />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- Modals & Overlays --- */}

            {/* Tech Specs Modal */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <h3>Technical Specifications</h3>
                                <button className="modal-close" onClick={closeModal}><FaTimes /></button>
                            </div>
                            <div className="modal-body">
                                <h4 style={{ marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>{activeProject.title}</h4>
                                <div className="spec-grid">
                                    {Object.entries(activeProject.techSpecs).map(([key, value]) => (
                                        <div key={key} className="spec-item">
                                            <h5>{key}</h5>
                                            <p>{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <button className="lightbox-close" onClick={closeLightbox}><FaTimes /></button>
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                        >
                            <img src={selectedImage} alt="Fullscreen View" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
