import React from 'react';
// import './style.css';
import './showcase.css'; // Add your showcase-specific styles here
import picture from '../../assets/assets/How_to_Create__5_-removebg.png'

function Showcase() {
  return (
    <section className="showcase-area" id="showcase">
    <section className='forImage'>
      <div className="showcase-container">
        <div className="left-side" style={{marginTop: '0px', marginRight: '-40px'}}>
          <h1 className="main-title">
            <span style={{ color: 'black', fontSize: '5.2rem' }}>MED</span>
            <span style={{ fontSize: '4.7rem' }}>vista</span>
            <span style={{ color: 'black' }}>.</span>
          </h1>
          <p>"To make affordable healthcare accessible by reducing medication wastage and providing affordable alternatives."</p>
          <a href="#menu" className="btn hero-btn">Learn More</a>
        </div>
        <div className="right-side">
          <div className="alternatives-card">
            <h3>Find Medicine Alternatives</h3>
            <div className="input-group">
              <label htmlFor="medicineName">Enter Medicine Name:</label>
              <input type="text" id="medicineName" placeholder="e.g., Paracetamol" className="input-field" />
            </div>
            <button id="prescriptionUpload" className="input-group">
              <a href="http://127.0.0.1:5001"> Scan Prescription </a>
            </button>
            <button id="findAlternativesBtn" className="alternative-btn">
              <a href="http://127.0.0.1:5000"> Find Alternatives </a>
            </button>
            <div id="alternativesResult" className="alternatives-result" />
          </div>
        </div>
      </div>
      </section>
    </section>
  );
}

export default Showcase;
