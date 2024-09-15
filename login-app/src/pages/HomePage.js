import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file for styling
import translatorImage from '../images/g_translate.png'; // Import the image

function HomePage() {
  return (
    <div className="homepage">
      <h1 className="title">Fruit.Ai</h1>
      <p className="slogan">"Be Healthy!"</p>
      <div className="icon-grid">
        <Link to="/chatbot" className="icon chat">
          Chat.
        </Link>
        <div className="icon blank1"></div>
        <div className="icon blank2"></div>
        <Link to="/translator" className="icon translator">
          <img src={translatorImage} alt="Translator" className="icon-image" />
        </Link>
        <Link to="/faq" className="icon faq">
          FAQs
        </Link>
        <Link to="/about" className="icon about">
          About
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
