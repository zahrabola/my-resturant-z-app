import React from "react";
import image from "../../Constants/images";
import SubHeading from "../../Components/SubHeading/SubHeading";
import "./Chef.css";

const Chef = () => {

    return (
      <div className="appbg sectionpadding appwrapper">
        <div className="appwrapper wrapperimg ">
          <img src={image.chef} alt="chefimg" />
        </div>

        <div className="wrapperinfo">
          <SubHeading title="Chef's words" />
          <h1 className="headerh1">The key to fine dining</h1>
        </div>
       <div className="chefcontent-quote">
              <img src={image.quote} atl="qouteimg" />
            </div>
        <p className="textheader" style={{ margin: "2rem 0" }}>
          Lorem ipsum dolor sit amet,
          <br />
          id pri tempor fuisset, <br />
          pro no menandri appellantur. <br />
          Vis eu imperdiet prodesset.
        </p>

        <div className="wrapperimg">
          <div className="chefsign">
            <p>Zahra Olanrewaju</p>
            <p className="text">Chef and Founder</p>
            <img src={image.sign} alt="signimg" />
          </div>
        </div>
      </div>
    );
}


export default Chef;
