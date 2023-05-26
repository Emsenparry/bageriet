import React from 'react';
import './NavBar.scss'


const NavBar = () => {
  return (
    <nav className="nav-bar">
        <ul className="nav-list">
        <li><a href="/">Forside</a></li>
        <li><a href="/products">Produkter</a></li>
        <h2 href="/">bageriet</h2>
        <li><a href="/contact">Kontakt</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
