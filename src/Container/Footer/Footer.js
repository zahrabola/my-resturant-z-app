import React from "react"
import FooterOverlay from "../../Components/Footer/FooterOverlay";
import Newsletter from "../../Components/Footer/Newsletter";
import image from "../../Constants/images";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";



const Footer =() => {
    return (
      <div className="footer section__padding" id="Login ">
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
            <img
              src={image.spoon}
              className="spoonimg"
              style={{ marginTop: 15 }}
            />
            <div className="footericon">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>








          
        </div>
      </div>
    );
}

export default Footer;
