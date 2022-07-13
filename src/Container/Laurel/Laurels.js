import React from "react";
import image from "../../Constants/images";
import { Data } from "../../Constants";
import SubHeading from "../../Components/SubHeading/SubHeading";


const Awardcard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className="L-awardcard">
      <img src={imgUrl} alt="awards" />
      <div className="L-awardcard-content">
        <p className="pstyle2" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="pstyle">{subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => {
    return (
      <div className="appbg sectionpadding appwrapper" id="awards">
        <div className="wrapperinfo">
          <SubHeading title="Awards and recognition" />
          <h1 className="headtext">Our Laurels</h1>
          <div className="laurelsawards">
            {Data.awards.map((award) => (
              <Awardcard award={award} key={award.title} />
            ))}
          </div>
        </div>

        <div className="wrapperimg">
          <img src={image.laurels} alt="laurelsimg" />
        </div>
      </div>
    );
}






export default Laurels;
