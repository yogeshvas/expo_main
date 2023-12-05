import React from "react";

//Components
import Carousel from "../Components/Home/Carousel";
import Landing from "../Components/Home/Section-I/Landing";
import Connect from "../Components/Home/Section-V/Connect";
import Hero from "../Components/Home/Section-III/Hero";
import MobileScroll from "../Components/Home/Section-II/MobileScroll";
import Cards from "../Components/Home/Section-IV/Cards";

//Libraries
import { Parallax } from "react-scroll-parallax";

const Home = () => {
  return (
    <>
      {/* <Navbar handleSignin={handleSignin} handleSignup={handleSignup} /> */}
      <div className="shdwDiv min-w-screen bg-secoundary w-full flex z-10 items-center flex-col">
        <Landing />
        <MobileScroll />
      </div>
      <div className="parallax-bg min-w-screen w-full h-96 overflow-x-auto"></div>
      <div className="shdwDiv2 min-w-screen pb-16 bg-secoundary w-full flex z-10 items-center flex-col">
        <div className="min-w-screen pt-[100px] pb-[100px] w-full flex items-center flex-col p-5 overflow-y-hidden">
          <Parallax speed={-20}>
            <Hero />
          </Parallax>
        </div>
        <div className="min-w-screen pt-[50px] w-full flex items-center flex-col p-5 ">
          <Parallax speed={20}>
            <Cards />
          </Parallax>
        </div>
        <Parallax speed={30}>
          <Carousel />
        </Parallax>
        <Parallax speed={50}>
          <Connect />
        </Parallax>
      </div>
    </>
  );
};

export default Home;
