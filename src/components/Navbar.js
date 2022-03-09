import React from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="container">
        <h1>
          Cryp<span className="primary">ti</span>
        </h1>
        <ul className="nav-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hamburger">
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
