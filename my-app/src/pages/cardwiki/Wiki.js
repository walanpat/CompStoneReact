import React from "react";
import cardData from "../../engine/Cards";

const Wiki = () => {
  return (
    <div>
      {cardData!==null?cardData.map(e =>(e.cardimg)):null}
    </div>
  );
};

export default Wiki;
