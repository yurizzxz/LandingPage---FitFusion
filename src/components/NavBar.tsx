import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <h1 className="nav-title">Navbar</h1>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
      
        <Link to="/login" className="download">Instalar Já!</Link>
      </div>
    </nav>
  );
}
