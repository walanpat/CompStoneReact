import React from "react";
import cardData from "../../engine/Cards";

const Wiki = () => {
  console.log(cardData[0].cardimg);
  return (
    <div>
      {/* {cardData!==null?cardData.map((e)=><img src={e.img}/>):null} */}
      <img src={cardData[0].cardimg} alt="0"/>
    </div>
  );
};

export default Wiki;
