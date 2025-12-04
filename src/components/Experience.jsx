import React from 'react';

const Experience = () => {
    return (
        <section id="about">
            <div className="section-header">
                <div className="section-number">[01]</div>
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">
                    From insurance analytics to retail automation at scale
                </p>
            </div>

            <div className="timeline">
                <div className="timeline-item current" style={{ animationDelay: '0.1s' }}>
                    <div className="timeline-date">09/2024 — PRESENT</div>
                    <h3 className="timeline-company">CJ MORE CO., LTD.</h3>
                    <div className="timeline-role">Data Scientist</div>

                    <div className="timeline-project-group">
                        <div className="timeline-project">Site Feasibility Study Automation</div>
                        <div className="timeline-impact">
                            <span className="impact-tag">Docker</span>
                            <span className="impact-tag">Gradio</span>
                            <span className="impact-tag">Reduced Fieldwork</span>
                        </div>
                    </div>
                    <div className="timeline-project-group">
                        <div className="timeline-project">Product Labeling</div>
                        <div className="timeline-impact">
                            <span className="impact-tag">RFM Scoring</span>
                            <span className="impact-tag">Targeted Marketing</span>
                        </div>
                    </div>
                    <div className="timeline-project-group">
                        <div className="timeline-project">Customer Segmentation</div>
                        <div className="timeline-impact">
                            <span className="impact-tag">Behavioral Clustering</span>
                            <span className="impact-tag">Drift Tracking</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-item" style={{ animationDelay: '0.2s' }}>
                    <div className="timeline-date">01/2023 — 09/2024</div>
                    <h3 className="timeline-company">DATA CAFE COMPANY LIMITED</h3>
                    <div className="timeline-role">Data Scientist</div>

                    <div className="timeline-project-group">
                        <div className="timeline-project">HR Knowledge Management System</div>
                        <div className="timeline-impact">
                            <span className="impact-tag">LLM-Powered</span>
                            <span className="impact-tag">Streamlit</span>
                        </div>
                    </div>
                    <div className="timeline-project-group">
                        <div className="timeline-project">Meeting Video Summarization</div>
                        <div className="timeline-impact">
                            <span className="impact-tag">VTT + LLM</span>
                            <span className="impact-tag">FastAPI</span>
                        </div>
                    </div>
                    <div className="timeline-project-group">
                        <div className="timeline-project">Customer Behavior Analytics</div>
                        <div className="timeline-impact">
                            <span className="impact-tag">Power BI</span>
                            <span className="impact-tag">Clustering Models</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-item" style={{ animationDelay: '0.3s' }}>
                    <div className="timeline-date">07/2022 — 12/2022</div>
                    <h3 className="timeline-company">24 SOLUTION GROUP (THAILAND)</h3>
                    <div className="timeline-role">Data Analyst</div>

                    <div className="timeline-project-group">
                        <div className="timeline-project">Order Flow Tracking & Monitoring</div>
                        <div className="timeline-impact">
                            <span className="impact-tag">Zendesk</span>
                            <span className="impact-tag">Reduced SLA Time</span>
                        </div>
                    </div>
                    <div className="timeline-project-group">
                        <div className="timeline-project">Data Synchronization & Quality</div>
                        <div className="timeline-impact">
                            <span className="impact-tag">Python Scheduler</span>
                            <span className="impact-tag">KPI Monitoring</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-item" style={{ animationDelay: '0.4s' }}>
                    <div className="timeline-date">06/2020 — 07/2022</div>
                    <h3 className="timeline-company">MUANG THAI BROKER</h3>
                    <div className="timeline-role">Data Analyst</div>

                    <div className="timeline-project-group">
                        <div className="timeline-project">Product Recommendation Model</div>
                        <div className="timeline-impact">
                            <span className="impact-tag">Collaborative Filtering</span>
                            <span className="impact-tag">+20% Clicks</span>
                        </div>
                    </div>
                    <div className="timeline-project-group">
                        <div className="timeline-project">Competitive Analysis & Dashboards</div>
                        <div className="timeline-impact">
                            <span className="impact-tag">Google Looker</span>
                            <span className="impact-tag">Partner Tracking</span>
                        </div>
                    </div>
                    <div className="timeline-project-group">
                        <div className="timeline-project">User Behavior Tracking Infrastructure</div>
                        <div className="timeline-impact">
                            <span className="impact-tag">Data Layer Design</span>
                            <span className="impact-tag">Improved Reliability</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
