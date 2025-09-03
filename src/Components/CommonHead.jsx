import React from "react";

const CommonHead = ({service1 , service2}) => {
  return (
    <>
      <h3 className="text-3xl font-semibold font-roboto text-Brand justify-center flex mb-6">{service1}</h3>
      <h2 className="text-[64px] font-semibold font-roboto flex justify-center items-center">{service2}</h2>
    </>
  );
};

export default CommonHead;
