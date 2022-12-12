import React from "react";
import image from "../../Constants/images";
import "./AboutUs.css"; 

const AboutUs = () => {

return (
  <div className="aboutus appbg flex__center sectionpadding " id="about">
    <div className="aboutus0verlay  flex__center">
      <img src={image.Z} alt="Zoverlay" />
    </div>

    <div className="aboutuscontent flex__center ">
      <div className="aboutuscontent-about">
        <h1 className="AboutText"> About Us</h1>
        <img src={image.spoon} alt="aboutspoon" className="spoonimg" />
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Quis pharetra adipiscing ultrices <br /> vulputate posuere tristique.
          In sed odio nec aliquet eu proin mauris et.
        </p>
        <button type="button" className="custombtn">
          Know More
        </button>
      </div>

      <div className="aboutuscontent-knife">
        <img src={image.knife} alt="aboutknife" />
      </div>

      <div className="aboutuscontent-history">
        <h1 className="AboutText"> Our History</h1>
        <img src={image.spoon} alt="aboutspoon" className="spoonimg" />
        <p className="text">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          <br/>
          Risus placerat morbi volutpat habitasse <br />
          interdum mi aliquam In sed odio nec aliquet.
        </p>
        <button type="button" className="custombtn">
          Know More
        </button>
      </div>
    </div>
  </div>
);
}




















export default AboutUs;
