import React from "react";
import PropTypes from "prop-types";
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

Video.propTypes = {
  videoSrcURL: PropTypes.string,
  videoTitle: PropTypes.string,
};

Video.defaultProps = {
  videoSrcURL: ``,
  videoTitle: ``,
};

export default Video;
