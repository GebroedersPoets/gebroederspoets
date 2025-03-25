import React, { useState, useEffect, useCallback } from 'react';
import { FaCheck, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import './Pricing.css';

const pricingPackages = {
  pakketten: [
    {
      id: 1,
      name: 'Basis Pakket',
      price: '€95',
      description: 'Complete basis reiniging voor uw auto',
      features: [
        'Interieur',
        'Exterieur',
        'Stoomreiniging'
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Premium Pakket',
      price: '€110',
      description: 'Premium reiniging met extra detailing',
      features: [
        'Interieur',
        'Exterieur',
        'Stoomreiniging',
        'Detailing'
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Luxe Pakket',
      price: '€130',
      description: 'De meest complete verzorging voor uw auto',
      features: [
        'Interieur',
        'Exterieur',
        'Stoomreiniging',
        'Detailing',
        'Dieptereiniging bekleding'
      ],
      popular: false,
    }
  ],
  basisPrijzen: [
    {
      id: 4,
      name: 'Interieur',
      price: '€69,99',
      description: 'Volledige reiniging van het interieur',
      features: [],
      popular: false,
    },
    {
      id: 5,
      name: 'Exterieur',
      price: '€39,99',
      description: 'Professionele reiniging van het exterieur',
      features: [],
      popular: false,
    },
    {
      id: 6,
      name: 'Dieptereiniging bekleding',
      price: '€10 (per stoel)',
      description: 'Grondige reiniging van de stoelbekleding',
      features: [],
      popular: false,
      perSeat: true
    },
    {
      id: 7,
      name: 'Leer reiniging',
      price: '€10 (per stoel)',
      description: 'Specialistische reiniging voor lederen bekleding',
      features: [],
      popular: false,
      perSeat: true
    },
    {
      id: 8,
      name: 'Velgen behandeling',
      price: '€15',
      description: 'Professionele reiniging en behandeling van velgen',
      features: [],
      popular: false,
    },
    {
      id: 9,
      name: 'Stofzuigen',
      price: '€20',
      description: 'Grondige stofzuiging van het interieur',
      features: [],
      popular: false,
    },
    {
      id: 10,
      name: 'Matten reiniging',
      price: '€15',
      description: 'Dieptereiniging van automatten',
      features: [],
      popular: false,
    },
    {
      id: 11,
      name: 'Polijsten/Wax',
      price: 'Op aanvraag',
      description: 'Professionele polijst- en waxbehandeling voor glanzende bescherming',
      features: [],
      popular: false,
    }
  ]
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('pakketten');
  const [selectedServices, setSelectedServices] = useState({});
  const [seatCounts, setSeatCounts] = useState({
    'Dieptereiniging bekleding': 1,
    'Leer reiniging': 1
  });
  const [totalPrice, setTotalPrice] = useState(0);
  
  const calculateTotalPrice = useCallback(() => {
    let total = 0;
    for (const serviceId in selectedServices) {
      if (selectedServices[serviceId]) {
        const service = pricingPackages.basisPrijzen.find(pkg => pkg.id === parseInt(serviceId));
        if (service) {
          // Skip price calculation for "Op aanvraag" items
          if (service.price === 'Op aanvraag') {
            continue;
          }
          
          // For per-seat services, multiply by seat count
          if (service.name === 'Dieptereiniging bekleding' || service.name === 'Leer reiniging') {
            const price = parseFloat(service.price.replace('€', '').replace(',', '.').split(' ')[0]);
            total += price * seatCounts[service.name];
          } else {
            // Regular services
            const price = parseFloat(service.price.replace('€', '').replace(',', '.').split(' ')[0]);
            total += price;
          }
        }
      }
    }
    setTotalPrice(total);
  }, [selectedServices, seatCounts, pricingPackages.basisPrijzen]);
  
  useEffect(() => {
    calculateTotalPrice();
  }, [calculateTotalPrice]);

  const handleSelectService = (id) => {
    setSelectedServices(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    
    // Removed automatic tab switching - users will manually go to the Samengesteld Pakket tab
  };

  const handleSeatCount = (name, increment) => {
    setSeatCounts(prev => ({
      ...prev,
      [name]: Math.max(1, prev[name] + increment)
    }));
  };

  const generateWhatsAppMessage = () => {
    let message = "Hallo Gebroeders Poets, ik wil graag een afspraak maken voor de volgende diensten:\n\n";
    
    // Add selected services to message
    for (const serviceId in selectedServices) {
      if (selectedServices[serviceId]) {
        const service = pricingPackages.basisPrijzen.find(pkg => pkg.id === parseInt(serviceId));
        if (service) {
          if (service.price === 'Op aanvraag') {
            message += `- ${service.name}: ${service.price}\n`;
          } else if (service.name === 'Dieptereiniging bekleding' || service.name === 'Leer reiniging') {
            message += `- ${service.name} (${seatCounts[service.name]} stoelen): €${(parseFloat(service.price.replace('€', '').replace(',', '.').split(' ')[0]) * seatCounts[service.name]).toFixed(2)}\n`;
          } else {
            message += `- ${service.name}: ${service.price}\n`;
          }
        }
      }
    }
    
    // Add total price with note about final price
    message += `\nTotaalprijs: €${totalPrice.toFixed(2)}`;
    message += `\nDit is een vanaf prijs, de eind kosten liggen aan de staat van uw voertuig.`;
    
    return encodeURIComponent(message);
  };

  // Pricing packages are now defined at the top level

  const renderBasisPrijzenTab = () => {
    return (
      <div className="pricing-packages">
        {pricingPackages.basisPrijzen.map((pkg) => (
          <div 
            className={`pricing-package ${selectedServices[pkg.id] ? 'selected' : ''}`} 
            key={pkg.id}
          >
            <h3 className="package-name">{pkg.name}</h3>
            <div className="package-price">{pkg.price}</div>
            <p className="package-description">{pkg.description}</p>
            
            <div className="service-selection">
              <label className="service-checkbox">
                <input 
                  type="checkbox" 
                  checked={selectedServices[pkg.id] || false}
                  onChange={() => handleSelectService(pkg.id)}
                />
                Selecteer
              </label>
              
              {pkg.perSeat && selectedServices[pkg.id] && (
                <div className="seat-counter">
                  <button 
                    className="count-button"
                    onClick={() => handleSeatCount(pkg.name, -1)}
                  >
                    <FaMinus />
                  </button>
                  <span className="seat-count">{seatCounts[pkg.name]} stoelen</span>
                  <button 
                    className="count-button"
                    onClick={() => handleSeatCount(pkg.name, 1)}
                  >
                    <FaPlus />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderWerkbussenTab = () => {
    return (
      <div>
        <div className="pricing-packages">
          {/* Enkele cabine pakket */}
          <div className="pricing-package">
            <h3 className="package-name">Enkele Cabine</h3>
            <div className="package-price">Vanaf €80</div>
            <p className="package-description">Professionele reiniging voor werkbussen met enkele cabine</p>
            <ul className="package-features">
              <li>
                <FaCheck className="feature-icon" />
                Interieur reiniging: €80
              </li>
              <li>
                <FaCheck className="feature-icon" />
                Met exterieur: €110
              </li>
            </ul>
            <a href="https://wa.me/31653682643" target="_blank" rel="noopener noreferrer" className="button">Boek via WhatsApp</a>
          </div>
          
          {/* Dubbele cabine pakket */}
          <div className="pricing-package">
            <h3 className="package-name">Dubbele Cabine</h3>
            <div className="package-price">Vanaf €95</div>
            <p className="package-description">Professionele reiniging voor werkbussen met dubbele cabine</p>
            <ul className="package-features">
              <li>
                <FaCheck className="feature-icon" />
                Interieur reiniging: €95
              </li>
              <li>
                <FaCheck className="feature-icon" />
                Met exterieur: €135
              </li>
            </ul>
            <a href="https://wa.me/31653682643" target="_blank" rel="noopener noreferrer" className="button">Boek via WhatsApp</a>
          </div>
        </div>
        <div className="pricing-vanaf-note text-center">
          <p>Alle genoemde prijzen zijn vanaf-prijzen</p>
        </div>
      </div>
    );
  };

  const renderSamenstellenTab = () => {
    const hasSelectedServices = Object.values(selectedServices).some(isSelected => isSelected);
    
    if (!hasSelectedServices) {
      return (
        <div className="empty-selection">
          <FaShoppingCart className="cart-icon" />
          <p>U heeft nog geen diensten geselecteerd.</p>
          <p>Ga naar het "Basis Prijzen" tabblad om uw pakket samen te stellen.</p>
          <button 
            className="button secondary"
            onClick={() => setActiveTab('basisPrijzen')}
          >
            Ga naar Basis Prijzen
          </button>
        </div>
      );
    }
    
    return (
      <div className="samengesteld-pakket">
        <h3 className="pakket-title">Uw Samengestelde Pakket</h3>
        
        <div className="selected-services">
          {pricingPackages.basisPrijzen.map((pkg) => {
            if (selectedServices[pkg.id]) {
              let servicePrice = pkg.price;
              
              if (pkg.perSeat) {
                const basePrice = parseFloat(pkg.price.replace('€', '').replace(',', '.').split(' ')[0]);
                const totalPrice = basePrice * seatCounts[pkg.name];
                servicePrice = `€${totalPrice.toFixed(2)} (${seatCounts[pkg.name]} stoelen)`;
              }
              
              return (
                <div className="selected-service" key={pkg.id}>
                  <div className="service-details">
                    <h4>{pkg.name}</h4>
                    <p>{servicePrice}</p>
                  </div>
                  <button 
                    className="remove-button"
                    onClick={() => handleSelectService(pkg.id)}
                  >
                    Verwijderen
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
        
        <div className="pakket-footer">
          <div className="total-price">
            <h3>Totaalprijs:</h3>
            <p className="price-value">€{totalPrice.toFixed(2)}</p>
            <p className="price-note">Alle prijzen zijn vanaf-prijzen</p>
          </div>
          
          <a 
            href={`https://wa.me/31653682643?text=${generateWhatsAppMessage()}`}
            className="button primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Plan deze afspraak
          </a>
        </div>
        
        <div className="add-more">
          <button 
            className="button secondary"
            onClick={() => setActiveTab('basisPrijzen')}
          >
            Meer diensten toevoegen
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header text-center">
          <h2>Pakketten & Tarieven</h2>
          <p className="section-subtitle">
            Prijzen voor professionele autopoetsservice
          </p>
        </div>
        
        <div className="pricing-tabs">
          <button 
            className={`pricing-tab ${activeTab === 'pakketten' ? 'active' : ''}`}
            onClick={() => setActiveTab('pakketten')}
          >
            Pakketten
          </button>
          <button 
            className={`pricing-tab ${activeTab === 'basisPrijzen' ? 'active' : ''}`}
            onClick={() => setActiveTab('basisPrijzen')}
          >
            Basis Prijzen
          </button>
          <button 
            className={`pricing-tab ${activeTab === 'werkbussen' ? 'active' : ''}`}
            onClick={() => setActiveTab('werkbussen')}
          >
            Werkbussen
          </button>
          <button 
            className={`pricing-tab ${activeTab === 'samenstellen' ? 'active' : ''}`}
            onClick={() => setActiveTab('samenstellen')}
          >
            Samengesteld Pakket
          </button>
        </div>
        
        {activeTab === 'pakketten' && (
          <div>
            <div className="pricing-packages">
              {pricingPackages.pakketten.map((pkg) => (
                <div 
                  className={`pricing-package ${pkg.popular ? 'popular' : ''}`} 
                  key={pkg.id}
                >
                  {pkg.popular && <div className="popular-badge">Meest gekozen</div>}
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="package-price">{pkg.price}</div>
                  <p className="package-description">{pkg.description}</p>
                  {pkg.features.length > 0 && (
                    <ul className="package-features">
                      {pkg.features.map((feature, index) => (
                        <li key={index}>
                          <FaCheck className="feature-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <a href="https://wa.me/31653682643" target="_blank" rel="noopener noreferrer" className="button">Boek via WhatsApp</a>
                </div>
              ))}
            </div>
            <div className="pricing-vanaf-note text-center">
              <p>Alle genoemde prijzen zijn vanaf-prijzen</p>
            </div>
          </div>
        )}
        
        {activeTab === 'basisPrijzen' && renderBasisPrijzenTab()}
        {activeTab === 'werkbussen' && renderWerkbussenTab()}
        {activeTab === 'samenstellen' && renderSamenstellenTab()}
        
        <div className="pricing-note text-center">
          <p>
            <strong>Voor speciale voertuigen of aangepaste wensen, 
            neem contact met ons op voor een persoonlijke offerte.</strong>
          </p>
          <a href="#contact" className="button secondary">Vraag een Offerte Aan</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
