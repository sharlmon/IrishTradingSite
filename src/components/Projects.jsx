
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const projectsData = [
    // Civil Works / Drainage
    { id: 1, category: 'Civil', image: constructionSlab, title: 'Concrete Slab Foundation', location: 'Commercial Site' },
    { id: 2, category: 'Civil', image: drainageWorkers, title: 'Drainage Channel Construction', location: 'Infrastructure Project' },
    { id: 3, category: 'Civil', image: stoneDrainage, title: 'Stone Pitching Work', location: 'Roadside Drainage' },
    { id: 4, category: 'Civil', image: completedDrainage1, title: 'Completed Stone Drain', location: 'Urban Road' },
    { id: 5, category: 'Civil', image: completedDrainage2, title: 'Drainage Systems', location: 'Highway Section' },
    { id: 6, category: 'Civil', image: stoneLinedDitch, title: 'Stone Lined Ditch', location: 'Rural Access Road' },
    { id: 7, category: 'Civil', image: deepStoneDrainage, title: 'Deep Drainage Channel', location: 'Flood Control' },
    { id: 8, category: 'Civil', image: roadEdgeDrainage, title: 'Roadside Drainage', location: 'Access Road' },

    // Road Construction - Excavation & Prep
    { id: 9, category: 'Roads', image: roadWetting, title: 'Base Preparation', location: 'Site Preparation' },
    { id: 10, category: 'Roads', image: roadShoulderWork, title: 'Road Shoulder Stabilization', location: 'Access Road' },
    { id: 11, category: 'Roads', image: handPackingRoadEdge, title: 'Manual Edge Packing', location: 'Community Road' },

    // Road Construction - Paving & Compaction
    { id: 12, category: 'Roads', image: asphaltPaver, title: 'Asphalt Paving', location: 'Main Highway' },
    { id: 13, category: 'Roads', image: asphaltSpreading, title: 'Asphalt Spreading', location: 'Road Surfacing' },
    { id: 14, category: 'Roads', image: roadCompaction, title: 'Primary Compaction', location: 'Tarmac Layer' },
    { id: 15, category: 'Roads', image: heavyRollerCompaction, title: 'Heavy Roller Compaction', location: 'Final Layer' },
    { id: 16, category: 'Roads', image: smallRollerCompaction, title: 'Finish Compaction', location: 'Driveway' },
    { id: 17, category: 'Roads', image: largeRollerFinishing, title: 'Surface Finishing', location: 'Main Road' },

    // Finished Projects
    { id: 18, category: 'Roads', image: finishedTarmacCurve, title: 'Curved Access Road', location: 'Completed Project' },
    { id: 19, category: 'Roads', image: finishedRoadGuardrails1, title: 'Road with Guardrails', location: 'Scenic Route' },
    { id: 20, category: 'Roads', image: finishedRoadGuardrails2, title: 'Safety Barriers', location: 'Highway Section' },
    { id: 21, category: 'Roads', image: finishedRoadStraight, title: 'Straight Tarmac Road', location: 'Development Access' },
    { id: 22, category: 'Roads', image: roadMarkingsFinished, title: 'Road Marking', location: 'Traffic Safety' },
    { id: 23, category: 'Roads', image: curvedTarmacRoadCloseup, title: 'Quality Surfacing', location: 'Detail View' },
    { id: 24, category: 'Roads', image: walkingOnFinishedRoad, title: 'Project Inspection', location: 'Handover Phase' },

    // Structural Works
    { id: 25, category: 'Structural', image: rebarSlabLarge, title: 'Heavy Rebar Reinforcement', location: 'Industrial Foundation' },
    { id: 26, category: 'Structural', image: rebarGridHeavy, title: 'Steel Grid Work', location: 'Construction Site' },
    { id: 27, category: 'Structural', image: workersFoundationTanks, title: 'Foundation & Tanks', location: 'Processing Plant' },

    // Building Projects
    { id: 28, category: 'Building', image: warehouseBuildingFront, title: 'Modern Warehouse', location: 'Logistics Park' },
    { id: 29, category: 'Building', image: buildingFrameConstruction, title: 'Multi-Story Framework', location: 'Commercial Complex' },

    // Electrical / Instrumentation - Kenya Pipeline Company
    { id: 30, category: 'Electrical', image: pipelineInstrumentation, title: 'Pipeline Instrumentation', location: 'KPC Oil Pipeline' },
    { id: 31, category: 'Electrical', image: junctionBoxWiring, title: 'Industrial Junction Box', location: 'Control Systems' },
    { id: 32, category: 'Electrical', image: controlPanelsNight, title: 'Control Panel Installation', location: 'Pipeline Station' },
    { id: 33, category: 'Electrical', image: flowComputerDisplay, title: 'Flow Computer Systems', location: 'Metering Station' },
    { id: 34, category: 'Electrical', image: pipelineValveGauge, title: 'Pipeline Valve & Gauge', location: 'Oil & Gas Facility' },
    { id: 35, category: 'Electrical', image: meteringSkidPs14, title: 'PS14 Metering Skid', location: 'Kenya Pipeline Company' },
    { id: 36, category: 'Electrical', image: densityMeterInstallation, title: 'Density Meter Installation', location: 'Pipeline Station' },
    { id: 37, category: 'Electrical', image: flowMeterBlue, title: 'Flow Meter Assembly', location: 'Morendat Institute' },
    { id: 38, category: 'Electrical', image: skidWiringWork, title: 'Skid Wiring Work', location: 'Mobile Instrumentation' },
    { id: 39, category: 'Electrical', image: controlPanelWiring, title: 'Control Panel Wiring', location: 'Instrumentation Skid' },
];

const INITIAL_SHOW_COUNT = 8;

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [isExpanded, setIsExpanded] = useState(false);

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    // Show limited projects unless expanded
    const displayedProjects = isExpanded
        ? filteredProjects
        : filteredProjects.slice(0, INITIAL_SHOW_COUNT);

    const hasMoreProjects = filteredProjects.length > INITIAL_SHOW_COUNT;

    // Reset expansion when filter changes
    const handleFilterChange = (cat) => {
        setFilter(cat);
        setIsExpanded(false);
    };

    return (
        <section id="projects" className="section-padding projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-filter">
                    {['All', 'Civil', 'Building', 'Roads', 'Structural', 'Electrical'].map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => handleFilterChange(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="projects-grid">
                    <AnimatePresence>
                        {displayedProjects.map(project => (
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
                                <div className="project-info">
                                    <h4>{project.title}</h4>
                                    <p>{project.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {hasMoreProjects && (
                    <motion.div
                        className="projects-expand-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            className="expand-btn"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? (
                                <>Show Less ↑</>
                            ) : (
                                <>Show More ({filteredProjects.length - INITIAL_SHOW_COUNT} more) ↓</>
                            )}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;

