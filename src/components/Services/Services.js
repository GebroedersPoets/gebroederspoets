import React from 'react';
import { FaCar, FaSprayCan, FaWater, FaBrush, FaStar, FaShieldAlt } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCar />,
      title: 'Basis Wasbeurt',
      description: 'Grondige reiniging van de buitenkant van uw auto, inclusief velgen en banden.',
    },
    {
      id: 2,
      icon: <FaSprayCan />,
      title: 'Interieur Reiniging',
      description: 'Volledige reiniging van het interieur, inclusief stofzuigen, dashboard en ramen.',
    },
    {
      id: 3,
      icon: <FaWater />,
      title: 'Complete Poetsbeurt',
      description: 'Combinatie van exterieur en interieur reiniging voor een volledig schone auto.',
    },
    {
      id: 4,
      icon: <FaBrush />,
      title: 'Polijsten',
      description: 'Verwijderen van kleine krasjes en swirls voor een glanzende afwerking.',
    },
    {
      id: 5,
      icon: <FaStar />,
      title: 'Nieuwstaat',
      description: 'Complete transformatie naar showroom-kwaliteit. Brengt uw auto terug naar nieuwstaat met diepgaande reiniging, polijsten en bescherming.',
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      title: 'Wax & Coating',
      description: 'Beschermende laag voor langdurige bescherming en glans van uw auto.',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header text-center">
          <h2>Onze <span className="text-red">Diensten</span></h2>
          <p className="section-subtitle">
            Wij bieden verschillende diensten aan om uw auto er weer als nieuw uit te laten zien
          </p>
        </div>
        
        <div className="services-showcase">
          <div className="service-image-container">
            <img 
              src="/service-image-1.svg" 
              alt="Auto poetsservice" 
              className="service-image" 
            />
          </div>
          <div className="service-image-container">
            <img 
              src="/service-image-2.svg" 
              alt="Professionele auto reiniging" 
              className="service-image" 
            />
          </div>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="services-cta text-center">
          <p>Heeft u specifieke wensen of vragen over onze diensten?</p>
          <a href="https://wa.me/31653682643" target="_blank" rel="noopener noreferrer" className="button">Boek via WhatsApp</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
