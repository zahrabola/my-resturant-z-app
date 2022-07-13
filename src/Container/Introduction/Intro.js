import React, {useState} from "react";
import "./Intro.css";
import {meal} from "../../Constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";



const Intro = () => {
const vidRef = React.useRef();
const [videoplay, setVideoPlay] = useState (false);

    return (
      <div className="videoapp">
        <video
          ref={vidRef}
          src={meal}
          type="video/mp4"
          loop
          controls={false}
          muted
        />
        <div className="videoOverlay flex__center">
          <div
            className="videoOverlay-circle flex__center"
            onClick={() => {
              setVideoPlay(!videoplay);
              if (videoplay) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }}
          >
            {videoplay ? (
              <BsPauseFill color="#fff" fontSize={90} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={90} />
            )}
          </div>
        </div>
      </div>
    );
}

export default Intro;
