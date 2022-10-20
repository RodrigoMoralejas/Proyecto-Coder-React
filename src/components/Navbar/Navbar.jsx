import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import "./navbar.css"

export const Navbar = () => {
  return (
    <header className="header">
      <div className="navContainer">
        <div className="navLogo"><h1>LogoNav</h1></div>
        <nav className="navBar">
          <ul className="navUl">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <CartWidget/>
      </div>
    </header>
  );
};


