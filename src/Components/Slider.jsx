import React from "react";
import SlickSlider from "react-slick";  
import "slick-carousel/slick/slick.css";
import sliderimg from '../assets/images/sliderImg.png'

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* <section id="Slider" className="mt-26">
        <div className="container">
          <div className="sliderRow w-full  h-[482px] bg-primary rounded-[20px] ">
            <div className="sliderContent">
              <SlickSlider {...settings}>
                <div className="img w-[150px] h-[150px] mt-[45px] m-auto items-center ">
                <img className=" inline-block  justify-center" src={sliderimg} alt="sliderImg" />
                </div>
              </SlickSlider>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Slider;