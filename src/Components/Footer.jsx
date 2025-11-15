import React from "react";
import logo from "../assets/images/logo.png";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <section id="Footer" className="w-full  bg-secondary  mt-[115px] ">
        <div className="container">
          <div className="contentPartOne pt-25 mb-[20px] flex gap-10 lg:gap-0  lg:justify-between flex-wrap pb-10 lg:pb-25 px-3 lg:px-0">
            <div className="logoItems">
              <img className="lg:w-50 mb-6" src={logo} alt="logoImg" />
              <p className="lg:w-[357px] w-75 lg:text-lg  text-xs pb-5  lg:pb-0 bfont-normal font-dm text-primary">
                We’re a team of strategic creator and digital innovator, united
                focus in our pursuit of mastery and joyful.
              </p>
            </div>
            <div className="Pages flex flex-col">
              <h2 className="lg:text-xl text-base font-semibold font-roboto mb-6 text-white ">
                Pages{" "}
              </h2>
              <a
                className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary"
                href="#"
              >
                Home
              </a>
              <a
                className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary"
                href="#"
              >
                Home 2
              </a>
              <a
                className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary"
                href="#"
              >
                About
              </a>
              <a
                className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary"
                href="#"
              >
                Conatct
              </a>
              <a
                className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary"
                href="#"
              >
                Portfolio
              </a>
              <a
                className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary"
                href="#"
              >
                Portfolio Single
              </a>
            </div>
            <div className="Pages flex flex-col">
              <h2 className="lg:text-xl text-base font-semibold font-roboto mb-6 text-white">
                Utility Pages{" "}
              </h2>
              <a
                className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary"
                href="#"
              >
                Style Guide{" "}
              </a>
              <a
                className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary"
                href="#"
              >
                Instruction
              </a>
              <a
                className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary"
                href="#"
              >
                License
              </a>
              <a
                className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary"
                href="#"
              >
                Changelog
              </a>
              <a
                className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary"
                href="#"
              >
                Error 404{" "}
              </a>
              <a
                className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary"
                href="#"
              >
                Password Protected{" "}
              </a>
            </div>
            <div className="subscribesPart">
              <h2 className="text-xl font-semibold font-roboto mb-4 text-white ">
                Subscribe
              </h2>
              <div className="mail lg:w-[433px] w-[300px] lg:h-[67px] h-[45px] bg-[#fff] lg:rounded-[30px] flex justify-between items-center rounded-md ">
                <input
                  className="ml-5 border-none outline-none "
                  type="text"
                  placeholder="Enter your email here"
                />
                <p className="w-[118px] lg:h-[47px] lg:text-base  text-xs h-9 bg-secondary text-primary lg:rounded-3xl rounded-md flex justify-center items-center mr-3">
                  Subscribe
                </p>
              </div>
            </div>
          </div>
          <hr className="text-primary mb-7 " />
          <div className="footer2ndContent flex  gap-5 lg:gap-0 px-3 lg:px-0  lg:justify-between flex-wrap pb-7">
            <div className="copyRight">
              <h2 className="lg:text-xl text-base font-semibold font-roboto mb-2 lg:mb-6 text-white">
                Copyright by
              </h2>
              <p className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary">
                Designed by Iconstica.com
              </p>
            </div>
            <div className="copyRight">
              <h2 className="lg:text-xl text-base font-semibold font-roboto mb-2 lg:mb-6 text-white">
                Contact Us
              </h2>
              <p className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary">
                +0 12 457 4578
              </p>
            </div>
            <div className="copyRight">
              <h2 className="lg:text-xl text-base font-semibold font-roboto mb-2 lg:mb-6 text-white">
                Address
              </h2>
              <p className="lg:text-base text-xs font-normal font-dm mb-2 lg:mb-5 text-primary">
                119 Tanglewood Lane Gulfport, MS 39503
              </p>
            </div>
            <div className="socialmediaLogo flex gap-7">
              <div className="lg:w-12.5 lg:h-12.5 w-10 h-10 bg-primary rounded-4xl flex justify-center items-center lg:text-3xl text-2xl ">
                <CiFacebook />
              </div>
              <div className="lg:w-12.5 lg:h-12.5 w-10 h-10 bg-primary rounded-4xl flex justify-center items-center lg:text-3xl text-2xl ">
                <FaInstagram />
              </div>
              <div className="lg:w-12.5 lg:h-12.5 w-10 h-10 bg-primary rounded-4xl flex justify-center items-center lg:text-3xl text-2xl  ">
                <CiLinkedin />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
