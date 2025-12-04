import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <div className="section-header">
                <div className="section-number">[02]</div>
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    Production systems driving real business value
                </p>
            </div>

            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-icon">🗺️</div>
                    <h3 className="project-title">Site Feasibility Automation</h3>
                    <p className="project-description">
                        Automated system integrating POI data, population rasters, and satellite imagery
                        to predict store location viability. Reduced 3-5 day surveys to 2 hours.
                    </p>
                    <div className="project-metrics">
                        <span className="metric-badge">78% Accuracy</span>
                        <span className="metric-badge">70% Faster</span>
                        <span className="metric-badge">1,500 Stores</span>
                    </div>
                    <div className="project-tech">
                        <span className="tech-tag">BigQuery</span>
                        <span className="tech-tag">Random Forest</span>
                        <span className="tech-tag">H3 Geospatial</span>
                        <span className="tech-tag">Docker</span>
                        <span className="tech-tag">GCP</span>
                        <span className="tech-tag">Gradio</span>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-icon">👥</div>
                    <h3 className="project-title">Customer Segmentation</h3>
                    <p className="project-description">
                        Behavioral clustering with automated drift monitoring for 2M+ customers.
                        Achieved 15% lift in campaign performance with 5 actionable segments.
                    </p>
                    <div className="project-metrics">
                        <span className="metric-badge">15% Lift</span>
                        <span className="metric-badge">2M+ Users</span>
                        <span className="metric-badge">92% Accuracy</span>
                    </div>
                    <div className="project-tech">
                        <span className="tech-tag">K-means</span>
                        <span className="tech-tag">Random Forest</span>
                        <span className="tech-tag">Evidently</span>
                        <span className="tech-tag">Docker</span>
                        <span className="tech-tag">BigQuery</span>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-icon">🛒</div>
                    <h3 className="project-title">Product Affinity Analysis</h3>
                    <p className="project-description">
                        RFM-based analysis identifying customer patterns across 10K+ SKUs.
                        Uncovered cross-selling opportunities increasing penetration by 8%.
                    </p>
                    <div className="project-metrics">
                        <span className="metric-badge">8% Growth</span>
                        <span className="metric-badge">10K+ SKUs</span>
                        <span className="metric-badge">50+ Categories</span>
                    </div>
                    <div className="project-tech">
                        <span className="tech-tag">RFM Analysis</span>
                        <span className="tech-tag">BigQuery</span>
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">Correlation</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
