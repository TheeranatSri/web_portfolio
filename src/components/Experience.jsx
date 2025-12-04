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
                    <div className="timeline-project">Site Feasibility Study Automation</div>
                    <div className="timeline-impact">Automated branch location screening with Docker + Gradio</div>
                </div>

                <div className="timeline-item" style={{ animationDelay: '0.2s' }}>
                    <div className="timeline-date">01/2023 — 09/2024</div>
                    <h3 className="timeline-company">DATA CAFE COMPANY LIMITED</h3>
                    <div className="timeline-role">Data Scientist</div>
                    <div className="timeline-project">LLM-Powered HR Knowledge System & Meeting Summarization</div>
                    <div className="timeline-impact">Customer Segmentation | Power BI Dashboards</div>
                </div>

                <div className="timeline-item" style={{ animationDelay: '0.3s' }}>
                    <div className="timeline-date">07/2022 — 12/2022</div>
                    <h3 className="timeline-company">24 SOLUTION GROUP (THAILAND)</h3>
                    <div className="timeline-role">Data Analyst</div>
                    <div className="timeline-project">Order Flow Tracking & Data Synchronization</div>
                    <div className="timeline-impact">Reduced SLA response times | Automated data cleaning</div>
                </div>

                <div className="timeline-item" style={{ animationDelay: '0.4s' }}>
                    <div className="timeline-date">06/2020 — 07/2022</div>
                    <h3 className="timeline-company">MUANG THAI BROKER</h3>
                    <div className="timeline-role">Data Analyst</div>
                    <div className="timeline-project">Product Recommendation Model</div>
                    <div className="timeline-impact">+20% Engagement | Google Looker Dashboards</div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
