import React from 'react';
import { categoryData } from '../data/data';
import { ArrowRight } from 'lucide-react';

const CategorySection = () => {
  return (
    <section className="container section-padding">
      <div className="section-header">
        <h2>Learn essential career and life skills</h2>
        <p className="sub-header">Udemy helps you build in-demand skills fast.</p>
      </div>
      
      <div className="category-grid">
        {categoryData.map((cat) => (
          <div key={cat.id} className="category-card">
            <div className="cat-image">
                <img src={cat.image} alt={cat.title} />
            </div>
            <div className="cat-info">
                <span className="learner-count"><i className="icon-user"></i> {cat.learners} learners</span>
                <h3>{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;