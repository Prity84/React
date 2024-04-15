import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712880000&semt=sph"
          alt=""
        />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to ='about'>About</Link>
        </li>
        <li>
          <Link to ='contact'>Contact</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
