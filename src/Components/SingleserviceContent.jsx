import React from "react";
import { FaPencil } from "react-icons/fa6";
import { RiQuillPenAiFill } from "react-icons/ri";


const SingleserviceContent = ({ icon , marketting, content }) => {
  return (
    <>
      <div className="lg:w-[422px]  bg-[#F4F4F4] rounded-[20px] mb-5 hover:bg-secondary group duration-700 ">
        <button className="lg:w-20 lg:h-20 w-10 h-10 bg-secondary rounded-[50px] text-primary lg:text-3xl justify-center items-center flex lg:mb-[62px] group-hover:bg-white m-[45px] ">{icon} </button>
        <h3 className="lg:text-7 text-lg font-medium font-roboto text-secondary  group-hover:text-primary m-[45px]">{marketting} </h3>
        <p className="lg:text-4.5 text-xs font-normal font-dm tracking-[3%]  group-hover:text-primary m-[45px]">{content}</p>

      </div>
    </>
  );
};

export default SingleserviceContent;
