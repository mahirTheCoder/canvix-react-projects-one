import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import sliderImg from "../assets/images/sliderImg.png";

const SliCanvix = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };

  return (
    <>
      <section id="SliderPart" className="mt-26">
        <div className="container w-full bg-primary h-[482px]">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="sliderImg  ">
                  <img
                    className="w-[150px] h-[150px] m-auto mt-11 z-10"
                    src={sliderImg}
                    alt="sliderImg"
                  />
                </div>
                <h2 className="lg:w-[1313px] w-[300px] lg:text-[25px] text-sm lg:font-bold font-medium font-roboto  m-auto text-center mt-8.5 ">
                  “Be genuine in your assessment, and provide constructive
                  feedback to benefit both potential customers and the company
                  providing the product or service.”
                </h2>
                <h3 className="lg:text-xl text:sm  lg:font-semibold font-medium font-roboto mt-8.5 text-center">
                  Jacqueline Miller
                </h3>
                <p className="lg:text-base text-xs font-normal font-dm text-center">
                  CEO of an eduport
                </p>
              </div>
              <div>
                <div className="sliderImg  ">
                  <img
                    className="w-[150px] h-[150px] m-auto mt-11 z-10"
                    src={sliderImg}
                    alt="sliderImg"
                  />
                </div>
                <h2 className="lg:w-[1313px] w-[300px] lg:text-[25px] text-sm lg:font-bold font-medium font-roboto  m-auto text-center mt-8.5 ">
                  “Be genuine in your assessment, and provide constructive
                  feedback to benefit both potential customers and the company
                  providing the product or service.”
                </h2>
                <h3 className="lg:text-xl text:sm  lg:font-semibold font-medium font-roboto mt-8.5 text-center">
                  Jacqueline Miller
                </h3>
                <p className="lg:text-base text-xs font-normal font-dm text-center">
                  CEO of an eduport
                </p>
              </div>
              <div>
                <div className="sliderImg  ">
                  <img
                    className="w-[150px] h-[150px] m-auto mt-11 z-10"
                    src={sliderImg}
                    alt="sliderImg"
                  />
                </div>
                <h2 className="lg:w-[1313px] w-[300px] lg:text-[25px] text-sm lg:font-bold font-medium font-roboto  m-auto text-center mt-8.5 ">
                  “Be genuine in your assessment, and provide constructive
                  feedback to benefit both potential customers and the company
                  providing the product or service.”
                </h2>
                <h3 className="lg:text-xl text:sm  lg:font-semibold font-medium font-roboto mt-8.5 text-center">
                  Jacqueline Miller
                </h3>
                <p className="lg:text-base text-xs font-normal font-dm text-center">
                  CEO of an eduport
                </p>
              </div>
              <div>
                <div className="sliderImg  ">
                  <img
                    className="w-[150px] h-[150px] m-auto mt-11 z-10"
                    src={sliderImg}
                    alt="sliderImg"
                  />
                </div>
                <h2 className="lg:w-[1313px] w-[300px] lg:text-[25px] text-sm lg:font-bold font-medium font-roboto  m-auto text-center mt-8.5 ">
                  “Be genuine in your assessment, and provide constructive
                  feedback to benefit both potential customers and the company
                  providing the product or service.”
                </h2>
                <h3 className="lg:text-xl text:sm  lg:font-semibold font-medium font-roboto mt-8.5 text-center">
                  Jacqueline Miller
                </h3>
                <p className="lg:text-base text-xs font-normal font-dm text-center">
                  CEO of an eduport
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliCanvix;
