import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="main-title">ARTISAN COFFEE CO.</h1>
        <p className="tagline">Where Every Cup Tells a Story</p>
      </div>

      <div className="features-section">
        <div className="feature">
          <h2>Specialty Coffee</h2>
          <p>Hand-selected beans from the world's finest coffee regions</p>
        </div>
        
        <div className="feature">
          <h2>Fresh Pastries</h2>
          <p>Baked daily in our artisan kitchen</p>
        </div>
        
        <div className="feature">
          <h2>Cozy Atmosphere</h2>
          <p>Perfect space for work, meetings, or relaxation</p>
        </div>
      </div>

      <div className="hours-section">
        <h2>Hours</h2>
        <p>Monday - Friday: 7am - 8pm</p>
        <p>Saturday - Sunday: 8am - 6pm</p>
      </div>

      <div className="contact-section">
        <h2>Visit Us</h2>
        <p>123 Coffee Lane, Downtown</p>
        <p>Tel: (555) 123-4567</p>
      </div>
    </div>
  );
}