import React from "react";
import aboutImg from "../assets/images/aboutImg.png";
import CountUp from "react-countup";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const About = () => {
  return (
    <>
      <section id="Section" className="w-full px-2 lg:px-0 bg-secondary">
        <div className="container">
          <div className="aboutRow py-25 flex-wrap flex justify-between">
            <div className="aboutImage w-[300px] lg:w-[774px] lg:h-[703px]">
              <img src={aboutImg} alt="img" />
            </div>
            <div className="aboutContent mt-[85px]">
              <h2 className="lg:text-[30px] text-base font-roboto font-semibold text-Brand mb-6">
                About us
              </h2>
              <h3 className="lg:w-[586px] lg:text-[64px] text-[18px]  w-[300px] font-semibold font-roboto text-primary ">
                The core mission behind all our work
              </h3>
              <p className="lg:w-[548px] w-[300px] text-[12px] lg:text-lg font-normal font-dm mt-3 lg:mt-0  text-primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
                tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
              </p>
              <div className="aboutCounter flex gap-[59px] mt-[25px] mb-8">
                <div className="counter1">
                  <div className="count lg:text-[45px] font-semibold font-roboto text-Brand flex gap-1 lg:gap-3  ">
                    <CountUp end={330} />
                    <p>+</p>
                  </div>
                  <p className="lg:text-base text-[10px] font-normal font-dm text-primary ">
                    Companies helped
                  </p>
                </div>
                <div className="counter1">
                  <div className="count lg:text-[45px] font-semibold font-roboto text-Brand flex gap-1 lg:gap-3 ">
                    <CountUp end={230} />
                    <p>+</p>
                  </div>
                  <p className="lg:text-base text-[10px] font-normal font-dm text-primary">
                    Revenue generated
                  </p>
                </div>
              </div>
              <div className="freeTrail w-[248px] h-[48px] bg-primary rounded-md flex gap-2 justify-center items-center">
                <IoMdArrowDroprightCircle className="text-[24px]" />
                <p className="text-xl font-normal font-dm">
                  Start your Free Trial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
