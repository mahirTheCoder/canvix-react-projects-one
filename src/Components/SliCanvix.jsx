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
                <div>
                
                </div>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
            </Slider>
          </div>
        </div>
      </section>

    </>
  );
};

export default SliCanvix;
