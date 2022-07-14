import React from "react"
import FooterOverlay from "../../Components/Footer/FooterOverlay";
import Newsletter from "../../Components/Footer/Newsletter";
import image from "../../Constants/images";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";



const Footer =() => {
    return (
      <div className="footer section__padding appbg" id="Login ">
        <FooterOverlay />
        <Newsletter />
        <div className="footerlink">
          <div className="footerlink-contact">
            <h1 className="F-headtext">Contact Us </h1>
            <p className="pstyle">1234 St, London , SE1 8DY, Uk</p>
            <p className="pstyle">+44 115 496 0244</p>
            <p className="pstyle">0115 496 0244</p>
          </div>

          <div className="footerlink-logo">
            <img src={image.dine} alt="footerlogo" />
            <p className="pstyle ">
              " The best way to find yourself is to lose yourself in the service
              of others."
            </p>
            <img src={image.spoon} alt="aboutspoon" className="spoonimg" />

            <div className="footericon">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>

          <div className="footerlink-work">
            <h1 className="F-headtext">Working Hours </h1>
            <p className="pstyle">Monday-Friday:</p>
            <p className="pstyle">08:00 am - 12:00 am</p>
            <p className="pstyle">Saturday-Sunday:</p>
            <p className="pstyle">07:00 am - 11:00 pm</p>
          </div>
        </div>

        <div className="pstyle fcopyright">Zahra Olanrewaju</div>
      </div>
    );
}

export default Footer;
