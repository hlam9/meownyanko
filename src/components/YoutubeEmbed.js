import React from "react";
import PropTypes from "prop-types";

import "./YoutubeEmbed.css";
const YoutubeEmbed = ({ embedId, time }) => (
  <div className="video-responsive">
    <iframe
      width="300"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?start=${time}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;