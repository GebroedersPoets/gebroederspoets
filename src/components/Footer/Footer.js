import React from 'react';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2 className="footer-logo-text">GebroedersPoets</h2>
            <p className="footer-tagline">car detailing - cleaning service</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Menu</h3>
              <ul>
                <li><a href="#home">Voorpagina</a></li>
                <li><a href="#about">Wie zijn wij?</a></li>
                <li><a href="#pricing">Pakketten & Tarieven</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href="tel:+31637344403">
                    <FaWhatsapp className="footer-icon" />
                    Yanick: 06-37344403
                  </a>
                </li>
                <li>
                  <a href="tel:+31653682643">
                    <FaWhatsapp className="footer-icon" />
                    Rohard: 06-53682643
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <FaMapMarkerAlt className="footer-icon" />
                    Bedum, Nederland
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Volg ons</h3>
              <div className="social-links">
                <a 
                  href="https://www.instagram.com/gebroederspoets" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Volg ons op Instagram"
                  className="social-link"
                >
                  <FaInstagram className="social-icon" />
                  @gebroederspoets
                </a>
              </div>
              <div className="cta-container">
                <a href="https://wa.me/31653682643" target="_blank" rel="noopener noreferrer" className="button">
                  <FaWhatsapp /> Boek Direct
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} GebroedersPoets. Alle rechten voorbehouden.</p>
          <p>Website door GebroedersPoets</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
