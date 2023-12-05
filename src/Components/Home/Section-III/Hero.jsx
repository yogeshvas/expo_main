import React from "react";
import navigateimg from "../../../Assets/Images/navigateimg.png";

const Hero = () => {
  return (
    <>
      <div className="landing bg-[#5A1ECV] w-[100vw] lg:max-h-[35rem] h-fit lg:h-[100vh] text-secoundary px-10 lg:px-10 pt-1 flex md:flex-row flex-col items-center justify-between pb-10 max-w-screen-2xl overflow-y-hidden">
        <div className="hero-image relative w-1/2 flex flex-col justify-center">
          <h2 className="parallax-heading text-4xl lg:text-5xl font-bold text-secoundary font-popins lg:leading-[60px] text-primary">
            Unlock Financial Freedom: Empowering You To Conquer Debt
          </h2>
          <h3 className="text-secoundary parallax-desc text-3xl my-4 text-primary">
            Built-in analytics to track your finance
          </h3>
          <p className="leading-[27px] text-secoundary parallax-desc tracking-[1px] text-primary">
            A comprehensive range of features that allow owners and managers to
            manage their orders, track inventory, handle payments, and analyze
            sales data in one centralized location. The platform is designed to
            be scalable and customizable, so it can be tailored to meet the
            unique needs of different businesses across different industries.
          </p>
        </div>
        <div className="hero-content w-full lg:w-1/2">
          <img
            src={navigateimg}
            alt="Unlock Financial Freedom"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
