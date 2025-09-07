import React from "react";
import CommonHead from "./CommonHead";
// import ShowCards from "./ShowCards";
import Showimg from "../assets/images/show1.png";
import Showimg2 from "../assets/images/show2.png";
import Showimg3 from "../assets/images/show3.png";
import Showimg4 from "../assets/images/show4.png";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Showcase = () => {
  return (
    <>
      <section id="Showcase">
        <div className="container">
          <div className="header">
            <CommonHead service2={"Recent Showcase"} />
          </div>
          <div className="showContent flex flex-wrap justify-between">
            <div className="partone">
              <img
                className="w-[663px] h-[450px] mb-4 mt-[93px] "
                src={Showimg}
                alt="showcaseimg"
              />
              <h2 className="text-3xl font-semibold font-roboto text-secondary mb-2.5 ">
                Web UI design
              </h2>
              <p className="text-lg font-normal font-dm">Creative UI design</p>
              <div className="two mt-22">
                <img
                  className="w-[663px] h-[450px] mb-4 "
                  src={Showimg2}
                  alt="showcaseimg"
                />
                <h2 className="text-3xl font-semibold font-roboto text-secondary mb-2.5 ">
                  UI design
                </h2>
                <p className="text-lg font-normal font-dm">
                  Creative Rebranding for logo
                </p>
              </div>
            </div>
            <div className="partTwo mt-[192px]">
              <div className="buttons flex justify-end mb-[51px]">
                <div className="btns w-[248px] h-[48px] bg-secondary flex gap-2 justify-center items-center rounded-4xl ">
                  <IoMdArrowDroprightCircle className="text-[20px] text-primary" />
                  <p className="text-xl font-normal text-primary font-dm">
                    Start your Free Trial
                  </p>
                </div>
              </div>
              <div className="parttwoImg1">
                 <img
                className="w-[663px] h-[450px] mb-4 "
                src={Showimg3}
                alt="showcaseimg"
              />
              <h2 className="text-3xl font-semibold font-roboto text-secondary mb-2.5 ">
                To design Digital Strategy
              </h2>
              <p className="text-lg font-normal font-dm mb-[93px]">Social Media Marketing</p>
              <div className="img2P2">
                   <img
                  className="w-[663px] h-[450px] mb-4 "
                  src={Showimg4}
                  alt="showcaseimg"
                />
                <h2 className="text-3xl font-semibold font-roboto text-secondary mb-2.5 ">
                  UI design
                </h2>
                <p className="text-lg font-normal font-dm">
                  Creative Rebranding for logo
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
