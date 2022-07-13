import React from "react";
import image from "../../Constants/images";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import SubHeading from "../../Components/SubHeading/SubHeading";
import './Gallery.css';
const Gallery = () => {

    const scrollRef = React.useRef(null);
    const scroll = (direction) => {
        const {current} = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -=300;
        } else {
            current.scrollLeft += 300;
        }
    }


    return (
      <div className=" gallery flex__center">
        <div className="gallery-content">
          <SubHeading title="Instagram" />
          <h1 className="headtext">Photo Gallery</h1>
          <BsInstagram className="Garrow-icon" />
          <p className="pstyle" style={{ color: "#AAAAAA", marginTop: "2rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <button type="button" className="custombtn">
            View More
          </button>
        </div>
        <div className="galleryimg">
          <div className="galleryimg-container" ref={scrollRef}>
            {[
              image.gallery01,
              image.gallery02,
              image.gallery03,
              image.gallery04,
            ].map((images, index) => (
              <div
                className="galleryimg-card flex__center"
                key={`galleryimage-${index + 1}`}
              >
                <img src={images} alt="galleryimage" />
              </div>
            ))}
          </div>
          <div className="galleryimg-arrow">
            <BsArrowLeftShort
              className="Garrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="Garrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    );
}

export default Gallery;
