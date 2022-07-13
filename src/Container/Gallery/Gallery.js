import React from "react";
import image from "../../Constants/images";
import {
  BsInstagram,
 
} from "react-icons/bs";
//import { Data } from "../../Constants";
import SubHeading from "../../Components/SubHeading/SubHeading";
import './Gallery.css';
const Gallery = () => {
    return (
      <div className=" gallery flex__center">
        <div className="gallery-content">
          <SubHeading title="Instagram" />
          <h1 className="headtext">Photo Gallery</h1>
          <p className="pstyle" style={{ color: "#AAAAAA", marginTop: "2rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <button type="button" className="custombtn">
            View More
          </button>
        </div>
        <div className="galleryimg">
          <div className="galleryimg-content">
            image
            <div className="galleryimg-card flex__center">
              <img src={image} alt="galleryimage" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          </div>
          <div className="galleryimg-arrow">
            <BsArrowLeftShort
              className="Garrow-icon"
              
            />
            <BsArrowRightShort
              className="Garrow-icon"
             
            />
          </div>
        </div>
      </div>
    );
}

export default Gallery;
