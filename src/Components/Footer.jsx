import React from "react";
import logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <>
      <section id="Footer" className="w-full  bg-secondary  mt-[115px] ">
        <div className="container">
          <div className="contentPartOne pt-25 ">
            <div className="logoItems">
              <img className="w-50 mb-6" src={logo} alt="logoImg" />
                <p className="lg:w-[357px] w-75 lg:text-lg font-normal font-dm text-primary">We’re a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.</p>
            </div>
            <div className="Pages flex flex-col">
              <h2 className="text-xl font-semibold font-roboto mb-6 text-white ">Pages </h2>
              <a className="text-base font-normal font-dm mb-5 text-primary" href="#">Home</a>
              <a className="text-base font-normal font-dm mb-5 text-primary" href="#">Home 2</a>
              <a className="text-base font-normal font-dm mb-5 text-primary" href="#">About</a>
              <a className="text-base font-normal font-dm mb-5 text-primary" href="#">Conatct</a>
              <a className="text-base font-normal font-dm mb-5 text-primary" href="#">Portfolio</a>
              <a className="text-base font-normal font-dm mb-5 text-primary" href="#">Portfolio Single</a>
            </div>
            <div className="Pages flex flex-col">
              <h2 className="text-xl font-semibold font-roboto mb-6 text-white ">Utility Pages  </h2>
              <a className="text-base font-normal font-dm mb-5 text-primary" href="#">Style Guide </a>
              <a className="text-base font-normal font-dm mb-5 text-primary" href="#">Instruction</a>
              <a className="text-base font-normal font-dm mb-5 text-primary" href="#">License</a>
              <a className="text-base font-normal font-dm mb-5 text-primary" href="#">Changelog</a>
              <a className="text-base font-normal font-dm mb-5 text-primary" href="#">Error  404 </a>
              <a className="text-base font-normal font-dm mb-5 text-primary" href="#">Password Protected </a>
            </div>
            <div className="subscribesPart">
              <h2 className="text-xl font-semibold font-roboto text-white ">Subscribe</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
