import React from "react";
import "./Newsletter.css";
import SubHeading from "../../Components/SubHeading/SubHeading";


const Newsletter = () => {
    return (
      <div className="newsletter" id="contact">
        <div className="news-heading">
          <SubHeading title="NewsLetter " />
          <h1 className="headtext">Subscribe To Our Newsletter</h1>
          <p className="pstyle">And never miss latest Updates!</p>
        </div>

        <div className="news-input flex__center">
          <input type="email" placeholder="Enter your email address" />
          <button type="button" className="custombtn">
            Subscribe
          </button>
        </div>
      </div>
    );
}
export default Newsletter;
