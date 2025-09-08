import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



const SliCanvix = () => {

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
        nextArrow: <IoIosArrowForward /> ,
    prevArrow: <IoIosArrowBack /> 
  };



  return (
    <>



    <section>
        <div className="slider-container">
      <Slider {...settings}>
        <div>
        
    <div>
      <img src="" alt="" />
      <h2></h2>
      <p></p>
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
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    </section>

    <div>
      <img src="" alt="" />
      <h2></h2>
      <p></p>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default SliCanvix