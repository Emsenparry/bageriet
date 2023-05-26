import React from 'react';
import './NavBar.scss'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="nav-bar">
        <ul className="nav-list">
        <li><NavLink to="/">Forside</NavLink></li>
        <li><NavLink to="/products">Produkter</NavLink></li>
        <h2><NavLink to="/">bageriet</NavLink></h2>
        <li><NavLink to="/contact">Kontakt</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
