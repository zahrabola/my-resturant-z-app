import React from "react";
import image from "../../Constants/images";
import SubHeading from "../../Components/SubHeading/SubHeading";

const FindUs = () => {
    return (
      <div className="appbg appwrapper sectionpadding">
        <div className="wrapperinfo">
          <SubHeading title="Contact" />
          <h1 className="headtext" style={{ marginBottom: "3rem" }}>
            Find Us
          </h1>
          <div className="wrappercontent">
            <p className="pstyle">
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
            </p>
            <p
              className="pstyle2"
              style={{ color: "#DCCA87", margin: "2rem 0" }}
            >
              Opening Hours
            </p>
            <p className="pstyle">Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="pstyle">Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
          <button
            type="button"
            className="custombtn"
            style={{ marginTop: "2rem" }}
          >
           Visit Us
          </button>
        </div>
<div className="wrapperimg">
    <img src={image.findus} alt="findusimg"/>
</div>

      </div>
    );
}

export default FindUs;
