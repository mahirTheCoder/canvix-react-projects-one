import React from "react";
import CommonHead from "./CommonHead";
// import ShowCards from "./ShowCards";
import Showimg from "../assets/images/show1.png";
import Showimg2 from "../assets/images/show2.png";

const Showcase = () => {
  return (
    <>
      <section id="Showcase">
        <div className="container">
          <div className="header">
            <CommonHead service2={"Recent Showcase"} />
          </div>
          <div className="showContent mt-21.5">
            <div className="partone">
              <img
                className="w-[663px] h-[450px] mb-4 "
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
