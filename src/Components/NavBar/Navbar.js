import React from "react";
import image from "../../Constants/images"
import "./Navbar.css";

const Navbar = () => {

return (
  <nav className="appnavbar">
    <div className="navbarlogo">
      <img src={image.dine} alt="applogo" />
    </div>
    <ul className="navbarlinks">
      <li className="text">
        <a href="#home">Home</a>
      </li>
      <li className="text">
        <a href="#about">About</a>
      </li>
      <li className="text">
        <a href="#menu">Menu</a>
      </li>
      <li className="text">
        <a href="#awards">Awards</a>
      </li>
      <li className="text">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
);
}


export default Navbar;
