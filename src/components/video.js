import React from "react";
import "./video.css";

const Video = ({ videoSrcURL, videoTitle }) => (
  <div className="Video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);
export default Video;
