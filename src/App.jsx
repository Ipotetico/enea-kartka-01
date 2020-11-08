import React, { useState } from "react";
import ChristmasCard_1 from "./components/ChristmasCard_1";
import ChristmasCard_2 from "./components/ChristmasCard_2";
import ChristmasCard_3 from "./components/ChristmasCard_3";
import "./components/css/App.css";

function App() {
  const [card, setCard] = useState(1);

  const handleCardNumber = () => {
    setCard((prevState) => prevState + 1);
  };
  return (
    <>
      {card === 1 && <ChristmasCard_1 card={handleCardNumber} />}
      {card === 2 && <ChristmasCard_2 card={handleCardNumber} />}
      {card === 3 && <ChristmasCard_3 card={handleCardNumber} />}
    </>
  );
}

export default App;
