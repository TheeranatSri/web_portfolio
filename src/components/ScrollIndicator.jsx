import React from 'react';

const ScrollIndicator = ({ activeSection, scrollToSection }) => {
    return (
        <div className="scroll-indicator">
            {[0, 1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    className={`scroll-dot ${activeSection === i ? 'active' : ''}`}
                    onClick={() => scrollToSection(i)}
                />
            ))}
        </div>
    );
};

export default ScrollIndicator;
