import React from "react";

const CommonHead = ({service1 , service2}) => {
  return (
    <>
    <div className="container px-3">
      <h3 className="lg:text-3xl text-lg font-semibold font-roboto text-Brand justify-center flex mb-6">{service1}</h3>
      <h2 className="lg:text-[64px] text-lg  w-full font-semibold font-roboto lg:w-[695px]  items-center m-auto ">{service2}</h2>
    </div>
    </>
  );
};

export default CommonHead;
