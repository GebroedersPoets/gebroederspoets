import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Vul alstublieft alle verplichte velden in.',
      });
      return;
    }
    
    // In a real application, you would send the form data to a server here
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.',
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="contact bg-light-gray">
      <div className="container">
        <div className="section-header text-center">
          <h2>Neem <span className="text-red">Contact</span> Op</h2>
          <p className="section-subtitle">
            Heeft u vragen of wilt u een afspraak maken? Neem contact met ons op.
          </p>
        </div>
        
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75777.33430782348!2d6.454748071971791!3d53.30481228079138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c835fa1a60426b%3A0x9a47e258de4f1b2!2sBedum!5b1!4c1!3m4!1s0x47c835fa1a60426b%3A0x9a47e258de4f1b2!8m2!3d53.3011099!4d6.603241!5e0!3m2!1snl!2snl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Bedum, Nederland"
            className="google-map"
          ></iframe>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contactgegevens</h3>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h4>Telefoon</h4>
                <a href="tel:+31653682643">Rohard: 06-53682643</a><br/>
                <a href="tel:+31637344403">Yanick: 06-37344403</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h4>E-mail</h4>
                <a href="mailto:gebroederspoets@outlook.com">gebroederspoets@outlook.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h4>Locatie</h4>
                <p>Bedum - wij komen op locatie</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaInstagram />
              </div>
              <div className="contact-details">
                <h4>Instagram</h4>
                <a href="https://www.instagram.com/gebroederspoets" target="_blank" rel="noopener noreferrer">
                  @gebroederspoets
                </a>
              </div>
            </div>
            
            <div className="contact-hours">
              <h4>Openingstijden</h4>
              <p>Openingstijden maandag tot zaterdag open</p>
              <p>Zondag in overleg</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Stuur ons een bericht</h3>
            
            {formStatus.submitted ? (
              <div className="form-success">
                <p>{formStatus.message}</p>
                <div className="submit-button-container">
                  <button 
                    className="button"
                    onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                  >
                    Nieuw bericht versturen
                  </button>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {formStatus.error && (
                  <div className="form-error">
                    <p>{formStatus.message}</p>
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name">Naam *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Telefoonnummer</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Bericht *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="submit-button-container">
                  <button type="submit" className="button">Verstuur</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
