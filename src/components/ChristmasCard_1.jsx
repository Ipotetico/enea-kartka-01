import React, { useState } from "react";
import MovieScreen from "./MovieScreen";

const ChristmasCard_1 = ({ card }) => {
  const [switcz, setSwitcz] = useState(false);

  const handleSetSwicz = () => {
    setSwitcz(!switcz);
  };
  return (
    <>
      <div className="container">
        <MovieScreen title="ENEA_swieta_1" />
        <div onClick={(handleSetSwicz, card)} className="switch on">
          <img
            className={switcz ? "switch" : "switch on"}
            src={process.env.PUBLIC_URL + `/images/off.svg`}
            alt="off"
          />
          <img
            className={switcz ? "switch on" : "switch"}
            src={process.env.PUBLIC_URL + `/images/on.svg`}
            alt="on"
          />
        </div>
      </div>
    </>
  );
};

export default ChristmasCard_1;
