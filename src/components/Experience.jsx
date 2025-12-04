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
                    <div className="timeline-date">2022 — PRESENT</div>
                    <h3 className="timeline-company">CJ MORE CO., LTD.</h3>
                    <div className="timeline-role">Senior Data Scientist</div>
                    <div className="timeline-project">Site Feasibility Study Automation</div>
                    <div className="timeline-impact">-70% Survey Time | 1,500+ Stores</div>
                </div>

                <div className="timeline-item" style={{ animationDelay: '0.2s' }}>
                    <div className="timeline-date">2021 — 2022</div>
                    <h3 className="timeline-company">24 Solution Group + Data Cafe</h3>
                    <div className="timeline-role">Data Scientist / Consultant</div>
                    <div className="timeline-project">End-to-End ML Solutions</div>
                    <div className="timeline-impact">Customer Segmentation | HR Systems</div>
                </div>

                <div className="timeline-item" style={{ animationDelay: '0.3s' }}>
                    <div className="timeline-date">2020 — 2021</div>
                    <h3 className="timeline-company">Muang Thai Broker</h3>
                    <div className="timeline-role">Data Analyst</div>
                    <div className="timeline-project">Recommendation Engine</div>
                    <div className="timeline-impact">+20% Engagement</div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
