import React from 'react';

const LandingPage = ({ onEnter }) => {
    return (
        <div className="landing-container">
            <div className="scene">
                <div className="cube">
                    <div className="cube-face cube-face-front"></div>
                    <div className="cube-face cube-face-back"></div>
                    <div className="cube-face cube-face-right"></div>
                    <div className="cube-face cube-face-left"></div>
                    <div className="cube-face cube-face-top"></div>
                    <div className="cube-face cube-face-bottom"></div>
                </div>
            </div>

            <div className="landing-content">
                <h1 className="hero-title">
                    Echo <span>AI</span>
                </h1>
                <p className="hero-subtitle">Open Source Intelligence</p>
                <button className="enter-btn" onClick={onEnter}>
                    Initialize
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
