import React, { useState, useEffect } from 'react';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // Add or remove menu-open class on body to prevent scrolling
    if (newMenuState) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo logo-wrapper">
          <a href="#home" onClick={closeMenu} className="logo-link">
            <img src="/assets/images/new-logo.svg" alt="Gebroeders Poets Logo" className="logo-image" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#about" onClick={closeMenu}>Wie zijn wij?</a>
            </li>
            <li className="nav-item">
              <a href="#reviews" onClick={closeMenu}>Reviews</a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
            <li className="nav-item cta-item">
              <a 
                href="https://wa.me/31653682643" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-button"
                onClick={closeMenu}
              >
                Boek hier
              </a>
            </li>
            <li className="nav-item social-item">
              <a 
                href="https://www.instagram.com/gebroederspoets" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Volg ons op Instagram"
                onClick={closeMenu}
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
