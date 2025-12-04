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
                <p className="hero-subtitle">Turning complex data into business impact</p>
                <p className="hero-description">
                    Data Scientist who transforms complex data into automated solutions that drive measurable business impact. Specializing in customer analytics, segmentation systems, and LLM-powered applications.
                </p>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">4+</span>
                        <span className="stat-label">Years</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">3</span>
                        <span className="stat-label">Industries</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">+20%</span>
                        <span className="stat-label">Engagement</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Projects Delivered</span>
                    </div>
                </div>
                <a href="#contact" className="cta-button">
                    <span >Get In Touch</span>
                </a>
            </div>

            <div className="hero-image-container">
                <div className="image-frame">
                    <img
                        src={profileImage}
                        alt="Jui - Data Scientist"
                        className="profile-image"
                    />
                    <div className="image-label">Data Scientist</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
