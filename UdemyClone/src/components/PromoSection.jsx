import React from 'react';
import { promoData } from '../data/data';
import { CheckCircle, Star, Monitor } from 'lucide-react';

const PromoSection = () => {
  return (
    <section className="container section-padding">
      <div className="promo-box">
        <div className="promo-content">
          <h2>{promoData.title}</h2>
          <p>{promoData.subtitle}</p>
          <div className="promo-features">
            {promoData.features.map((feat, idx) => (
              <div key={idx} className="feature-item">
                 <CheckCircle size={16} className="feat-icon" /> <span>{feat}</span>
              </div>
            ))}
          </div>
          
          <button className="btn-white">Learn more</button>
          <p className="small-text">{promoData.price}</p>
        </div>

        <div className="promo-images">
             <div className="img-collage">
                <div className="collage-main">
                    <img src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@2x.webp" alt="Person" />
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;