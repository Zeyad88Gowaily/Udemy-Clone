import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import PromoSection from './components/PromoSection';
import CourseSection from './components/CourseSection';
import TrustedBy from './components/TrustedBy';
import './App.css';

function App() {
  return (
    <div>
        <div style={{background: '#dcf7fa', padding: '10px', textAlign: 'center', fontWeight: 'bold', fontSize: '14px',color:'#2d2f31'}}>
          AI is changing the game | Get the skills with Udemy Business.
        </div>
      
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <PromoSection />
        <CourseSection />
        <TrustedBy/>
      </main>
      
      <footer style={{padding: '40px 24px', background: '#1c1d1f', color: 'white', marginTop: '40px',textAlign:'center'}}>
        <div className="container">
          <p>© 2025 Udemy Clone. Created for demonstration.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;