import React from 'react';
import './AboutPage.css'; // Import the CSS file for styling

function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-header">Fruit.Ai</h1>
      <p className="about-text">
      Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
      </p>
      <button className="about-button">About</button>
    </div>
  );
}

export default AboutPage;
