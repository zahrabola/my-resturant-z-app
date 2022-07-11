import React from "react";
import image from "../../Constants/images"
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
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
    <div className="navbarlogin">
      <a href="#login" className="text">
        Log In / Registration
      </a>
      <div />
      <a href="/" className="text">
        Book Table
      </a>
    </div>

    <div className="navbarsmallscreen">
      <GiHamburgerMenu
        color="#fff"
        fontSize={27}
        onClick={() => setToggleMenu(true)}
      />
      {toggleMenu && (
        <div className="navbarsmallscreenOverlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu
            fontSize={27}
            className="overlayclose"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="navbarsmallscreen-links">
            <li>
              <a href="#home" onClick={() => setToggleMenu(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setToggleMenu(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => setToggleMenu(false)}>
                Menu
              </a>
            </li>
            <li>
              <a href="#awards" onClick={() => setToggleMenu(false)}>
                Awards
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setToggleMenu(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  </nav>
);
}


export default Navbar;
