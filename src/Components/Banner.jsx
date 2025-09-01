import React from "react";
import overlyImg from "../assets/images/overlay.png";
import position from "../assets/images/possition.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { Link } from "react-router";
const Banner = () => {
  return (
    <>
      <section
        id="Banner"
        className="bg-secondary pt-[102px] pb-[86px] relative px-3"
      >
        <div
          style={{
            background: `url(${overlyImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-full h-full absolute top-0 left-0 "
        ></div>
        <div className="positionImg absolute top-[250px] left-0 hidden lg:block">
          <img src={position} alt="positionImg" />
        </div>
        <div className="container text-white">
          <div className="bannerRow">
            <div className="BannerContent">
              <h2 className=" lg:w-[608px] lg:text-[64px] font-semibold font-roboto text-primary text-[31px] lg:pt-[166px] lg:pb-6 pb-3  ">
                Ready to take your{" "}
                <span className="text-Brand">Business Growth</span> to the next
                level?
              </h2>
              <p className="lg:w-[557px] w-[300px] text-sm lg:text-4.5 normal font-roboto pb-6 lg:pb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
                massa libero egestas malesuada viverra gravida libero cursus
                nulla leo pulvinar.
              </p>
              <div className="button w-[220px] lg:w-[248px] bg-primary lg:rounded-[24px] rounded-[10px]">
                <Link className="text-[20px] normal font-dm  text-secondary flex  justify-center items-center lg:pt-5 lg:pb-5 pt-3 pb-3  ">
                  {" "}
                  <IoIosArrowDroprightCircle className="text-[24px] mr-2" />
                  Start your Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
