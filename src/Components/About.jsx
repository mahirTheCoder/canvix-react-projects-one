import React from "react";
import aboutImg from "../assets/images/aboutImg.png";

const About = () => {
  return (
    <>
      <section id="Section" className="w-full h-[903px] bg-secondary">
        <div className="container">
          <div className="aboutRow py-25 flex justify-between">
            <div className="aboutImage w-full lg:w-[774px] lg:h-[703px]">
              <img src={aboutImg} alt="img" />
            </div>
            <div className="aboutContent mt-[85px]">
              <h2 className="text-[30px] font-roboto font-semibold text-Brand mb-6">
                About us{" "}
              </h2>
              <h3 className="w-[586px] text-[64px] font-semibold font-roboto text-primary ">The core mission behind all our work</h3>
            <p className="w-[548px] text-lg font-normal font-dm  text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p>
            <div className="aboutCounter">
              <div className="counter1">
                
              </div>
            </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
