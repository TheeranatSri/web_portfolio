import React from 'react';
import profileImage from '../assets/profile.jpeg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="terminal-prefix">$ ./introduce.sh</div>
                <h1 className="hero-title">
                    JUI<br />
                    DATA SCIENTIST
                </h1>
                <p className="hero-subtitle">Building production systems that scale</p>
                <p className="hero-description">
                    I transform complex data into automated solutions that drive measurable business impact.
                    Specializing in retail analytics, geospatial ML, and production-ready deployments.
                </p>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">5+</span>
                        <span className="stat-label">Years</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">1500+</span>
                        <span className="stat-label">Stores</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">70%</span>
                        <span className="stat-label">Time Saved</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">5</span>
                        <span className="stat-label">Prod Systems</span>
                    </div>
                </div>
                <a href="#contact" className="cta-button">
                    <span>Get In Touch</span>
                </a>
            </div>

            <div className="hero-image-container">
                <div className="image-frame">
                    <img
                        src={profileImage}
                        alt="Jui - Data Scientist"
                        className="profile-image"
                    />
                    <div className="image-label">Senior Data Scientist</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
