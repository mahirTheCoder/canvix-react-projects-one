import React from "react";
import { FaPencil } from "react-icons/fa6";
import { RiQuillPenAiFill } from "react-icons/ri";


const SingleserviceContent = ({ icon , marketting, content }) => {
  return (
    <>
      <div className="w-[422px]   bg-[#F4F4F4] rounded-[20px] mb-5 hover:bg-secondary group duration-700 ">
        <button className="w-20 h-20 bg-secondary rounded-[50px] text-primary text-3xl justify-center items-center flex mb-[62px] group-hover:bg-white m-[45px] ">{icon} </button>
        <h3 className="text-7 font-medium font-roboto text-secondary  group-hover:text-primary m-[45px]">{marketting} </h3>
        <p className="text-4.5 font-normal font-dm tracking-[3%]  group-hover:text-primary m-[45px]">{content}</p>

      </div>
    </>
  );
};

export default SingleserviceContent;
