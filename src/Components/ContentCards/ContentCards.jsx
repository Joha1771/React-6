import React from "react";
import CardBtn from "../CardsBtn/CardBtn";

const ContentCards = ({
  BtnTitle,
  divClassName,
  contentImg,
  cardTitle,
  cardDesc,
}) => {
  return (
    <>
      <div className="container mx-auto max-w-7xl pt-15.5">
        <div className={divClassName}>
          <div className="max-w-101.25 flex flex-col gap-1.5">
            <h2 className="text-[36px] leading-11 font-medium mb-5">
              {cardTitle}
            </h2>
            <p className="text-[18px] font-normal">{cardDesc}</p>
            <CardBtn title={BtnTitle} />
          </div>
          <div>
            <img src={contentImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCards;
