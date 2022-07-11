import React from "react";
import image from "../../Constants/images";
import "./Header.css";

const Header = () => (
  <div className="appheader appwrapper sectionpadding" id="home">
    <div className="wrapperinfo">
      <h1 className="headerh1">The key to fine dinig</h1>
      <p className="textheader" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet, id pri tempor fuisset, pro no menandri
        appellantur. Vis eu imperdiet prodesset.
      </p>
      <button type="button" className="custombtn">
        Explore Menu
      </button>
    </div>
    <div className="wrapperimg">
      <img src={image.welcome} alt="headerimg" />
    </div>
  </div>
);
export default Header;
 
 
     
