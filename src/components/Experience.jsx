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
                <div className="timeline-item" style={{ animationDelay: '0.1s' }}>
                    <div className="timeline-date">09/2024 — PRESENT</div>
                    <h3 className="timeline-company">CJ MORE CO., LTD.</h3>
                    <div className="timeline-role">Data Scientist</div>
                    <div className="timeline-project">Site Feasibility Study Automation </div>
                    <div className="timeline-impact">Semi-automated pipeline with Docker + Gradio • Reduced manual fieldwork</div>
                    <div className="timeline-project">Product Labeling </div>
                    <div className="timeline-impact">RFM-based customer insights • Foundation for targeted marketing</div>
                    <div className="timeline-project">Customer Segmentation </div>
                    <div className="timeline-impact">Behavioral clustering with drift tracking • Improved strategic alignment</div>
                </div>

                <div className="timeline-item" style={{ animationDelay: '0.2s' }}>
                    <div className="timeline-date">01/2023 — 09/2024</div>
                    <h3 className="timeline-company">DATA CAFE COMPANY LIMITED</h3>
                    <div className="timeline-role">Data Scientist</div>
                    <div className="timeline-project">HR Knowledge Management System</div>
                    <div className="timeline-impact">LLM-powered retrieval with Streamlit • Reduced information search time</div>
                    <div className="timeline-project">Meeting Video Summarization System</div>
                    <div className="timeline-impact">VTT + LLM with FastAPI • Enhanced team productivity</div>
                    <div className="timeline-project">Customer Behavior Analytics</div>
                    <div className="timeline-impact">Power BI dashboards • Clustering models for segmentation</div>
                </div>

                <div className="timeline-item" style={{ animationDelay: '0.3s' }}>
                    <div className="timeline-date">07/2022 — 12/2022</div>
                    <h3 className="timeline-company">24 SOLUTION GROUP (THAILAND)</h3>
                    <div className="timeline-role">Data Analyst</div>
                    <div className="timeline-project">Order Flow Tracking & Monitoring System</div>
                    <div className="timeline-impact">Zendesk integration • Reduced SLA response times</div>
                    <div className="timeline-project">Data Synchronization & Quality Management</div>
                    <div className="timeline-impact">Python scheduler for automated cleaning • KPI monitoring</div>
                </div>

                <div className="timeline-item" style={{ animationDelay: '0.4s' }}>
                    <div className="timeline-date">06/2020 — 07/2022</div>
                    <h3 className="timeline-company">MUANG THAI BROKER</h3>
                    <div className="timeline-role">Data Analyst</div>
                    <div className="timeline-project">Product Recommendation Model</div>
                    <div className="timeline-impact">Collaborative filtering • +20% impression clicks</div>
                    <div className="timeline-project">Competitive Analysis & Performance Dashboards</div>
                    <div className="timeline-impact">Google Looker dashboards • Partner performance tracking</div>
                    <div className="timeline-project">User Behavior Tracking Infrastructure</div>
                    <div className="timeline-impact">Data layer design • Improved data reliability for reporting</div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
