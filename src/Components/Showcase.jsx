import React from "react";
import CommonHead from "./CommonHead";
import Showimg from "../assets/images/show1.png";
import Showimg2 from "../assets/images/show2.png";
import Showimg3 from "../assets/images/show3.png";
import Showimg4 from "../assets/images/show4.png";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Showcase = () => {
  return (
    <>
      <section id="Showcase  ">
        <div className="container">
          <div className="header">
            <CommonHead service2={"Recent Showcase"} />
          </div>
          <div className="showContent flex flex-wrap justify-between px-3 lg:px-0">
            <div className="partone">
              <img
                className="lg:w-[663px] w-75 lg:h-[450px] lg:mb-4 mb-2 mt-[93px] "
                src={Showimg}
                alt="showcaseimg"
              />
              <h2 className="lg:text-3xl text-lg font-semibold font-roboto text-secondary lg:mb-2.5 ">
                Web UI design
              </h2>
              <p className="lg:text-lg text-[10px]  font-normal font-dm">Creative UI design</p>
              <div className="two lg:mt-22">
                <img
                  className="lg:w-[663px] w-75 lg:h-[450px] lg:mb-4 mb-2 mt-[93px] "
                  src={Showimg2}
                  alt="showcaseimg"
                />
                <h2 className="lg:text-3xl text-lg font-semibold font-roboto text-secondary lg:mb-2.5 ">
                  UI design
                </h2>
                <p className="lg:text-lg text-[10px]  font-normal font-dm">
                  Creative Rebranding for logo
                </p>
              </div>
            </div>
            <div className="partTwo mt-15 lg:mt-[192px]">
              <div className="buttons flex lg:justify-end mb-[51px]">
                <div className="btns w-[248px] h-[48px] bg-secondary flex gap-2 justify-center items-center lg:rounded-4xl rounded-xl ">
                  <IoMdArrowDroprightCircle className="text-[20px] text-primary" />
                  <p className="text-xl font-normal text-primary font-dm">
                    Start your Free Trial
                  </p>
                </div>
              </div>
              <div className="parttwoImg1">
                 <img
                className="lg:w-[663px] w-75 lg:h-[450px] lg:mb-4 mb-2 lg:mt-[93px] "
                src={Showimg3}
                alt="showcaseimg"
              />
              <h2 className="lg:text-3xl text-lg font-semibold font-roboto text-secondary lg:mb-2.5 ">
                To design Digital Strategy
              </h2>
              <p className="lg:text-lg text-[10px]  font-normal font-dm">Social Media Marketing</p>
              <div className="img2P2">
                   <img
                  className="lg:w-[663px] w-75 lg:h-[450px] lg:mb-4 mb-2 mt-[93px] "
                  src={Showimg4}
                  alt="showcaseimg"
                />
                <h2 className="lg:text-3xl text-lg font-semibold font-roboto text-secondary lg:mb-2.5 ">
                  UI design
                </h2>
                <p className="lg:text-lg text-[10px]  font-normal font-dm">
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
