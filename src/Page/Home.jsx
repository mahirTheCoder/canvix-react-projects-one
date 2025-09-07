import React from "react";
import Banner from "../Components/Banner";
import Service from "../Components/Service";
import About from "../Components/About";
import Process from "../Components/process";
import Showcase from "../Components/Showcase";
import Slider from "../Components/Slider";


const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <About/>
      <Process />
      <Showcase/>
      <Slider/>
    </>
  );
};

export default Home;
