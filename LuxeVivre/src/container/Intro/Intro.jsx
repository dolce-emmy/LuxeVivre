import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import { useState, useRef } from "react";

import "./Intro.css";

const Intro = () => {
  const vidRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    // here we will toggle the video play and pause
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
      setPlayVideo(false);
    } else {
      vidRef.current.play();
      setPlayVideo(true);
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            // here we are saying if the video is playing then show the pause icon else show the play icon
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
