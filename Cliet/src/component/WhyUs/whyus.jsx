import React from 'react';
import './WhyUs.css'; // Import the CSS

const WhyUs = () => {
  return (
    <div className="whyus-container">
      <h1 className="whyus-title">🏆 Why Choose CasaDirect?</h1>
      <p className="whyus-intro">
        At CasaDirect, we’re not just building websites — we’re giving real estate agents the tools to grow in a digital world.
      </p>

      <div className="whyus-grid">
        <div className="whyus-block">
          <h2>✅ Simple. Fast. Affordable.</h2>
          <ul>
            <li>Custom websites starting at low cost — no monthly fees</li>
            <li>Quick setup — listings live in less than 48 hours</li>
            <li>Modern design that builds trust and works great on mobile</li>
          </ul>
        </div>

        <div className="whyus-block">
          <h2>✅ Built for Small Agents</h2>
          <ul>
            <li>We work with independent agents, not big companies</li>
            <li>Personal support, updates, and customization</li>
            <li>Your brand, your listings — fully under your control</li>
          </ul>
        </div>

        <div className="whyus-block">
          <h2>✅ Say Goodbye to Platform Fees</h2>
          <ul>
            <li>No more Idealista or Facebook dependency</li>
            <li>Branded site with search, filters, and inquiry system</li>
            <li>No commission cuts. No middlemen.</li>
          </ul>
        </div>
      </div>

      <p className="whyus-closing">
        CasaDirect is your digital partner — simple, fast, and built just for you.
      </p>
    </div>
  );
};

export default WhyUs;
