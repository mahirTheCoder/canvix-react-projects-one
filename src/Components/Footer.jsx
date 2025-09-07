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
          <div className="contentPartOne pt-25 flex justify-between flex-wrap pb-25 ">
            <div className="logoItems">
              <img className="w-50 mb-6" src={logo} alt="logoImg" />
              <p className="lg:w-[357px] w-75 lg:text-lg font-normal font-dm text-primary">
                We’re a team of strategic creator and digital innovator, united
                focus in our pursuit of mastery and joyful.
              </p>
            </div>
            <div className="Pages flex flex-col">
              <h2 className="text-xl font-semibold font-roboto mb-6 text-white ">
                Pages{" "}
              </h2>
              <a
                className="text-base font-normal font-dm mb-5 text-primary"
                href="#"
              >
                Home
              </a>
              <a
                className="text-base font-normal font-dm mb-5 text-primary"
                href="#"
              >
                Home 2
              </a>
              <a
                className="text-base font-normal font-dm mb-5 text-primary"
                href="#"
              >
                About
              </a>
              <a
                className="text-base font-normal font-dm mb-5 text-primary"
                href="#"
              >
                Conatct
              </a>
              <a
                className="text-base font-normal font-dm mb-5 text-primary"
                href="#"
              >
                Portfolio
              </a>
              <a
                className="text-base font-normal font-dm mb-5 text-primary"
                href="#"
              >
                Portfolio Single
              </a>
            </div>
            <div className="Pages flex flex-col">
              <h2 className="text-xl font-semibold font-roboto mb-6 text-white ">
                Utility Pages{" "}
              </h2>
              <a
                className="text-base font-normal font-dm mb-5 text-primary"
                href="#"
              >
                Style Guide{" "}
              </a>
              <a
                className="text-base font-normal font-dm mb-5 text-primary"
                href="#"
              >
                Instruction
              </a>
              <a
                className="text-base font-normal font-dm mb-5 text-primary"
                href="#"
              >
                License
              </a>
              <a
                className="text-base font-normal font-dm mb-5 text-primary"
                href="#"
              >
                Changelog
              </a>
              <a
                className="text-base font-normal font-dm mb-5 text-primary"
                href="#"
              >
                Error 404{" "}
              </a>
              <a
                className="text-base font-normal font-dm mb-5 text-primary"
                href="#"
              >
                Password Protected{" "}
              </a>
            </div>
            <div className="subscribesPart">
              <h2 className="text-xl font-semibold font-roboto mb-4 text-white ">
                Subscribe
              </h2>
              <div className="mail w-[433px]  h-[67px] bg-[#fff] rounded-[30px] flex justify-between items-center ">
                <input
                  className="ml-5 border-none outline-none "
                  type="text"
                  placeholder="Enter your email here"
                />
                <p className="w-[118px] h-[47px] bg-secondary text-primary rounded-2xl flex justify-center items-center mr-3">
                  Subscribe
                </p>
              </div>
            </div>
          </div>
          <hr className="text-primary mb-7" />
          <div className="footer2ndContent flex  justify-between flex-wrap pb-7">
            <div className="copyRight">
              <h2 className="text-xl font-semibold font-roboto mb-4 text-white">
                Copyright by
              </h2>
              <p className="text-base font-normal font-dm mb-5 text-primary">
                Designed by Iconstica.com
              </p>
            </div>
            <div className="copyRight">
              <h2 className="text-xl font-semibold font-roboto mb-4 text-white">
                Contact Us
              </h2>
              <p className="text-base font-normal font-dm mb-5 text-primary">
                +0 12 457 4578
              </p>
            </div>
            <div className="copyRight">
              <h2 className="text-xl font-semibold font-roboto mb-4 text-white">
                Address
              </h2>
              <p className="text-base font-normal font-dm mb-5 text-primary">
                119 Tanglewood Lane Gulfport, MS 39503
              </p>
            </div>
            <div className="socialmediaLogo flex gap-7">
              <div className="w-12.5 h-12.5 bg-primary rounded-4xl flex justify-center items-center text-3xl ">
                <CiFacebook />
              </div>
              <div className="w-12.5 h-12.5 bg-primary rounded-4xl flex justify-center items-center text-3xl ">
                <FaInstagram />
              </div>
              <div className="w-12.5 h-12.5 bg-primary rounded-4xl flex justify-center items-center text-3xl ">
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
