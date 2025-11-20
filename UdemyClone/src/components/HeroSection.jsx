import React from 'react';
import { heroData } from '../data/data';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content-box">
        <h1>{heroData.title}</h1>
        <p>{heroData.subtitle}</p>
      </div>
      <div className="hero-image">
         <img src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/5ab81bd5-af55-4235-9f1e-07cdc7ce0b93.jpg" alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;