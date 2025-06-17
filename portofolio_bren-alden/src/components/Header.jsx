import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Ald.</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact" className="contact-button">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;