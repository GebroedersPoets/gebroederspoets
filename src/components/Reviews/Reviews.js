import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Reviews.css';

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="section-header text-center">
          <h2>Klant Reviews</h2>
          <p className="section-subtitle">
            Wat onze klanten over ons zeggen
          </p>
        </div>
        
        <div className="reviews-content">
          <div className="featured-review">
            <div className="review-media">
              <div className="instagram-video">
                <video 
                  src="https://res.cloudinary.com/dbsrtnquz/video/upload/v1742843782/Snapinst.app_video_AQPUUFez8tu86JzzCSqSJ8IjvWMMmdKPqnFGG4aPGXFSwkrxW4cuYCg6myUP6GAcwMOU49G4-ADS5zLKQeR5w4wHJ7g8AU0HSEwD7mQ_s8qqie.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="review-video"
                />
              </div>
            </div>
            <div className="review-text">
              <div className="review-header text-center">
                <h3>Recente klantervaring</h3>
              </div>
              <blockquote>
                "Fantastisch gedaan boys! Ik ben erg tevreden met het resultaat 💪🏻👍🏻"
              </blockquote>
              <div className="review-images">
                <img src="https://res.cloudinary.com/dbsrtnquz/image/upload/v1742645708/Ontwerp_zonder_titel_7_gi6zhq.png" alt="Tevreden klant resultaat" className="review-image" />
                <img src="https://res.cloudinary.com/dbsrtnquz/image/upload/v1742645709/Ontwerp_zonder_titel_6_nppgzp.png" alt="Tevreden klant resultaat" className="review-image" />
              </div>
              <div className="review-cta text-center">
                <p>Wij streven naar 100% klanttevredenheid bij elke auto die we behandelen.</p>
                <div className="button-center">
                  <a href="https://wa.me/31653682643" className="button" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="button-icon" /> Boek uw afspraak
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="instagram-cta text-center">
            <h3>Bekijk meer resultaten op onze Instagram</h3>
            <p>Volg ons voor dagelijkse updates, before & after foto's en video's van onze werkzaamheden</p>
            <a 
              href="https://www.instagram.com/gebroederspoets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button secondary"
            >
              <FaInstagram className="button-icon" /> @gebroederspoets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
