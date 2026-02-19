import React from 'react';
import './HeroSection.css';
import heroBg from '../save.jpg';
import sideImg from '../2side.jpg';

const HeroSection = () => {
    return (
        <section className="hero" role="img" aria-label="Hero background image">
            {/* Left side decorative image */}
            <div className="hero-side hero-side-left">
                <img src={sideImg} alt="" />
            </div>
            
            <div className="hero-bg">
                <img className="hero-fullimg" src={heroBg} alt="Hero background" />
            </div>

            {/* Right side decorative image */}
            <div className="hero-side hero-side-right">
                <img src={sideImg} alt="" />
            </div>

            <div className="hero-copy">
                <div className="hero-copy-inner">
                    <h1>Art speaks where words fall short</h1>
                    <p>Original ideas, colour and form — a canvas holds memory and meaning.</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
