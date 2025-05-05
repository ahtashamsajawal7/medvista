import React from 'react';
import './style.css'; // Add your services-specific styles here
import altimag from '../../assets/assets/pexels-rdne-7363196.jpg'
import donat from '../../assets/assets/pexels-rdne-6646875.jpg'
import cmpprice from '../../assets/assets/pexels-breakingpic-3305.jpg'
function Services() {
  return (
    <section id="services">
      <h2>SERVICES</h2>
      <div className="medicine-container container">
        <div className="medicine-type fruit">
          <div className="img-container">
            <img src={altimag} alt="Fruit" />
            <div className="img-content">
              <h3>Alternative Medicines</h3>
              <a href="#" className="btn btn-primary">LEARN MORE</a>
            </div>
          </div>
        </div>
        <div className="medicine-type vegitable">
          <div className="img-container">
            <img src={donat}alt="Vegetables" />
            <div className="img-content">
              <h3>Sell &amp; Donate</h3>
              <a href="#" className="btn btn-primary">LEARN MORE</a>
            </div>
          </div>
        </div>
        <div className="medicine-type grains">
          <div className="img-container">
            <img src={cmpprice} alt="Grains" />
            <div className="img-content">
              <h3>Compare Prices</h3>
              <a href="#" className="btn btn-primary">LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
