import React from "react";
import cardData from "../../engine/Cards";

const Wiki = () => {
  console.log(cardData);
  return (
    <div>
      {cardData !== null ? cardData.map((e) => <img src={e.cardimg} />) : null}
    </div>
  );
};

export default Wiki;
