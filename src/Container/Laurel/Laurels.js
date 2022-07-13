import React from "react";
import image from "../../Constants/images";
import { Data } from "../../Constants";
import SubHeading from "../../Components/SubHeading/SubHeading";

const Laurels = () => {
    return (
      <div className="appbg sectionpadding appwrapper" id="awards">
        <div className="wrapperinfo">
          <SubHeading title="Awards and recognition" />
          <h1 className="headtext">Our Laurels</h1>
          <div className="laurelsawards">Award card</div>
        </div>

        <div className="wrapperimg">
            <img src={image.laurels} alt="laurelsimg"/>
            </div>
      </div>
    );
}






export default Laurels;
