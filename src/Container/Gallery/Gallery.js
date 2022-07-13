import React from "react";
import image from "../../Constants/images";
import { Data } from "../../Constants";
import SubHeading from "../../Components/SubHeading/SubHeading";
import './Gallery.css';
const Gallery = () => {
    return (
      <div className=" gallery flex__center">
        <div className="gallery-content">
          <SubHeading title="Instagram" />
        </div>
      </div>
    );
}

export default Gallery;
