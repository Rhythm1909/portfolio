import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Rhythm Patel</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
