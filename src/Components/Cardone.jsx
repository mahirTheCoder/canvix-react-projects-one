import React from "react";
import { RiLightbulbFlashLine } from "react-icons/ri";

const Cardone = ({ pIcon, pHeader, Content }) => {
  return (
    <>
      <div className="both">
        <div className="cardItem flex items-center gap-5 group">
          <div className="div lg:w-[82px] w-[40px] lg:h-[82px] h-[40px] rounded-[50%] bg-secondary lg:rounded-[50%] flex justify-center items-center text-white lg:text-[35px]  ">
            {pIcon}
          </div>
          <h2 className="lg:text-[30px] text-lg font-semibold font-roboto text-secondary ">
            {pHeader}
          </h2>
        </div>
        <div>
          <p className="w-[195px] text-secondary lg:text-base text-sm font-dm lg:mt-8 mt-5 mb-10 lg:mb-0 ">
            {Content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cardone;
