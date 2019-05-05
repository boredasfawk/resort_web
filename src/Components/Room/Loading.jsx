import React from "react";
import loadingGif from "../../images/gif/loading-arrow.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>Rooms Data Loading...</h4>
      <img alt="loading arrow gif" src={loadingGif} />
    </div>
  );
};

export default Loading;
