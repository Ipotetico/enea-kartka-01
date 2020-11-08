import React from "react";

const MovieScreen = ({ title }) => {
  return (
    <>
      <video className="videoTag" autoPlay loop muted>
        <source
          src={process.env.PUBLIC_URL + `/movies/${title}.mp4`}
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default MovieScreen;
