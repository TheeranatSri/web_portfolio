import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="section-header">
                <div className="section-number">[04]</div>
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Let's build something great together
                </p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    <h3>Ready to discuss your next data science project?</h3>
                    <p>
                        I'm always open to discussing new opportunities, interesting projects,
                        or partnerships in data science and machine learning.
                    </p>

                    <div className="contact-methods">
                        <a href="mailto:jui@example.com" className="contact-method">
                            <div className="contact-icon">📧</div>
                            <div className="contact-text">
                                <div className="contact-label">Email</div>
                                <div className="contact-value">theeranat.sri@gmail.com</div>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/theeranat-sringamdee-9a7653107/" className="contact-method">
                            <div className="contact-icon">💼</div>
                            <div className="contact-text">
                                <div className="contact-label">LinkedIn</div>
                                <div className="contact-value">/in/jui-datascientist</div>
                            </div>
                        </a>

                        {/* <a href="https://github.com/jui" className="contact-method">
                            <div className="contact-icon">💻</div>
                            <div className="contact-text">
                                <div className="contact-label">GitHub</div>
                                <div className="contact-value">@jui</div>
                            </div>
                        </a> */}
                    </div>
                </div>

                {/* <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Tell me about your project..."></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                </form> */}
            </div>
        </section>
    );
};

export default Contact;
