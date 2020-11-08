import React, { useEffect } from "react";
import MovieScreen from "./MovieScreen";

const ChristmasCard_2 = ({ card }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      card();
      return () => {
        clearTimeout(timeoutId);
      };
    }, 5000);
  }, []);
  return (
    <>
      <div className="container">
        <MovieScreen title="ENEA_swieta_2" />
      </div>
    </>
  );
};

export default ChristmasCard_2;
