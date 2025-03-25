import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const tickerRef = useRef(null);

  useEffect(() => {
    if (tickerRef.current) {
      const tickerAnimation = () => {
        if (tickerRef.current) {
          tickerRef.current.style.transform = 'translateX(100%)';
          setTimeout(() => {
            if (tickerRef.current) {
              tickerRef.current.style.transition = 'transform 35s linear'; // Increased from 20s to 35s for slower movement
              tickerRef.current.style.transform = 'translateX(-100%)';
            }
          }, 100);
        }
      };

      tickerAnimation();
      const tickerInterval = setInterval(() => {
        if (tickerRef.current) {
          tickerRef.current.style.transition = 'none';
          tickerAnimation();
        }
      }, 35100); // Slightly longer than the animation duration (increased from 20100 to 35100)

      return () => clearInterval(tickerInterval);
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-video-container">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="https://res.cloudinary.com/dbsrtnquz/video/upload/v1742469177/Met_trots_presenteren_wij_GebroedersPoets_Na_maanden_van_voorbereiding_zijn_we_blij_te_kunnen_aankondigen_om_officieel_van_start_gaan_Wij_zijn_er_helemaal_klaar_voor_om_onze_passie_voor_schoonmaak_in_de_praktijk_te_brengen_en_voor_u_het_v_uwkrrs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Professionele<br />
            <span className="text-red">Autopoetsservice</span>
          </h1>
          <div className="ticker-container">
            <div className="ticker-content" ref={tickerRef}>
              Neem contact op via WhatsApp voor een snelle afspraak • Professionele service • Flexibele tijden • Op locatie • Neem contact op via WhatsApp voor een snelle afspraak
            </div>
          </div>
          <p className="hero-subtitle">
            Uw auto verdient het beste. Wij zorgen voor een stralend resultaat.
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/31653682643" target="_blank" rel="noopener noreferrer" className="button">Boek hier</a>
            <a href="#pricing" className="button secondary">Onze pakketten</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
