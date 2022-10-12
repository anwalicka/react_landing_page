import React from "react";
import logo from "./logo.svg";
export default function Header() {
    return (
    <div>
      <header>
        <nav className="nav">
          <img src={logo} alt="logo" className="nav-logo">
          </img>
          <ul className="nav-items">
            <li className="item">About</li>
            <li className="item">Pricing</li>
            <li className="item">Contact</li>
          </ul>
        </nav>
      </header>
    </div>)
  };