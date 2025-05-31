import React from 'react';
import './HeroSection.scss'; // Ensure this file exists in the same folder

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image">
          <img
            src="https://i.ibb.co/VWJv4q3/dosa-plate.png"
            alt="Dosa Plate"
          />
        </div>
        <div className="hero-text">
          <h1 className="line1">
            Say goodbye to fast food
            <span className="highlight-underline" />
          </h1>
          <h2 className="line2 highlight-box">
            and hello to family-style dinners,
          </h2>
          <p className="line3">
            delivered straight to your door.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;