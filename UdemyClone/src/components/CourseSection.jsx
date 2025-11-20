import React from 'react';
import { coursesData, courseTabs } from '../data/data';

const CourseSection = () => {
  return (
    <section className="container section-padding">
      <h2>Skills to transform your career and life</h2>
      
      <div className="tabs">
        {courseTabs.map((tab, index) => (
            <button key={index} className={`tab-btn ${index === 0 ? 'active' : ''}`}>
                {tab}
            </button>
        ))}
      </div>

      <div className="courses-grid">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-img-wrapper">
                <img src={course.image} alt={course.title} />
            </div>
            <div className="course-content">
                <h3>{course.title}</h3>
                <p className="author">{course.author}</p>
                <div className="rating">
                    <span className="rating-num">{course.rating}</span>
                    <span className="stars">⭐⭐⭐⭐⭐</span>
                    <span className="reviews">({course.reviews})</span>
                </div>
                <div className="price">{course.price}</div>
                {course.tag && <span className={`tag ${course.tag.toLowerCase()}`}>{course.tag}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;