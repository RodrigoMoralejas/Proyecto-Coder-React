import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="navContainer">
        <div className="navLogo">
          <NavLink exact="true" to="/">
            <h1>MoraDrums</h1>
          </NavLink>
        </div>
        <nav className="navBar">
          <ul className="navUl">
            <li>
              <NavLink to="/category/snares">Snares</NavLink>
            </li>
            <li>
              <NavLink to="/category/cymbals">Cymbals</NavLink>
            </li>
            <li>
              <NavLink to="/category/pedals">Pedals</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};
