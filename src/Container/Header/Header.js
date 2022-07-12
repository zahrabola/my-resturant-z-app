import React from "react";
import image from "../../Constants/images";
import SubHeading from "../../Components/SubHeading/SubHeading";
import "./Header.css";

const Header = () => {

  return (
    <div className="appheader appwrapper sectionpadding" id="home">
      <div className="wrapperinfo">
        <SubHeading title="Chase the new flavour" />
        <h1 className="headerh1">The key to fine dining</h1>
      </div>
      
      <p className="textheader" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet,
        <br />
        id pri tempor fuisset, <br />
        pro no menandri appellantur. <br />
        Vis eu imperdiet prodesset.
      </p>
      <button type="button" className="custombtn">
        Explore Menu
      </button>
      <div className="wrapperimg">
        <img src={image.welcome} alt="headerimg" />
      </div>
    </div>
  );

}



export default Header;
 
 
     
