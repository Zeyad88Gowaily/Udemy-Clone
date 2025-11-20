import React from 'react';
import { Search, ShoppingCart, Globe, Menu } from 'lucide-react';
import { navLinks } from '../data/data';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Menu className="mobile-menu" />
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" className="logo" />
        <span className="category-link">Explore</span>
      </div>
      
      <div className="search-bar-container">
        <Search className="search-icon" size={18} />
        <input type="text" placeholder="Search for anything" />
      </div>

      <div className="nav-right">
        <div className="nav-links">
          {navLinks.map((link, index) => (
            <a href="#" key={index}>{link}</a>
          ))}
        </div>
        <ShoppingCart className="icon" size={20} />
        <div className="auth-buttons">
          <button className="btn-outline">Log in</button>
          <button className="btn-solid-black">Sign up</button>
          <button className="btn-icon"><Globe size={18} /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;