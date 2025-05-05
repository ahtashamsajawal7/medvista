import React from 'react';
import './style.css'; // Add your about-specific styles here
import aboutImage from './about.jpg';
function About() {
  return (
    <section id="about">
      <div className="about-wrapper container">
        <div className="about-text">
          <p className="small">About Us</p>
          <h2>Affordable medicines, <br /> less wastage <span style={{ color: '#33b4ff' }}>&amp;</span> healthier future.</h2>
          <p>MedVista empowers users to find low-cost alternatives to prescribed medicines and offers a platform for selling or donating unused medications. With our user-friendly interface, we aim to bridge the gap between medicine accessibility and sustainability, making healthcare more affordable and responsible for all.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
        <div className="about-img">
          <img src={aboutImage} alt ="about us" />
        </div>
      </div>
    </section>
  );
}

export default About;
