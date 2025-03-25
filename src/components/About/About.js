import React from 'react';
import { FaStar, FaSmile, FaCar } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header text-center">
          <h2>Wie zijn wij?</h2>
          <p className="section-subtitle">
            Even voorstellen!
          </p>
        </div>
        
        <div className="about-image-container">
          <img src="/assets/images/about-image.svg" alt="Gebroeders Poets Oprichters" className="founders-image" />
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Wij zijn Yanick en Rohard, de trotse oprichters van GebroedersPoets. Met passie en oog voor detail 
              brengen wij het interieur en exterieur van uw auto weer tot leven.
            </p>
            <p>
              Ons bedrijf is geboren uit de liefde voor auto's en het streven naar perfectie. Of het nu gaat om 
              een grondige interieurreiniging of het polijsten van het exterieur, wij zorgen ervoor dat uw auto 
              er altijd op zijn best uitziet.
            </p>
            <p>
              Als gepassioneerde vakmannen zetten wij ons elke dag in om topkwaliteit te leveren. GebroedersPoets 
              is meer dan alleen een schoonmaakbedrijf; het is onze missie om uw voertuig in topconditie te houden, 
              zodat u met een glimlach achter het stuur stapt.
            </p>
            <p>
              Wij geloven in persoonlijke aandacht en maatwerk, want geen auto is hetzelfde. Bij ons krijgt elke 
              klant de zorg en aandacht die hij verdient. Uw tevredenheid is voor ons het hoogste doel.
            </p>
          </div>
          
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">
                <FaStar />
              </div>
              <h3>Kwaliteit Gegarandeerd</h3>
              <p>Wij werken alleen met premium producten en professionele apparatuur voor het beste resultaat.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FaSmile />
              </div>
              <h3>Tevreden Klanten</h3>
              <p>Onze klanten waarderen onze service en aandacht voor detail. Bekijk onze recensies.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FaCar />
              </div>
              <h3>Flexibele Service</h3>
              <p>Wij komen op locatie en werken op een tijdstip dat u het beste uitkomt.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
