import React from "react";
import CommonHead from "./CommonHead";
import Cardone from "./cardOne";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { SiTestcafe } from "react-icons/si";

const Process = () => {
  return (
    <>
      <section id="process " className="mt-[107px]">
        <div className="container">
          <div className="header">
            <CommonHead
              service1={"Process"}
              service2={"Process that moves things forward"}
            />
          </div>
          <div className="processContent flex lg:justify-between justify-center  flex-wrap mt-[90px] px-3 lg:px-0 mb-[139px]">
            <Cardone
              pIcon={<RiLightbulbFlashLine/>}
              pHeader={"Ideate"}
              Content={"The ideation process is a crucial phase in the design process where creative thinking and brainstorming"}
            />
            <Cardone
              pIcon={<IoIosMail/>}
              pHeader={"Reserach"}
              Content={"Research is a critical component of the design process, helping designers understand the problemv "}
            />
            <Cardone
              pIcon={<TbAdjustmentsHorizontal />}
              pHeader={"Create"}
              Content={"Designing a process involves several key steps to ensure clarity, efficiency, successful implementation"}
            />
            <Cardone
              pIcon={<SiTestcafe />}
              pHeader={"Testing"}
              Content={"Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
