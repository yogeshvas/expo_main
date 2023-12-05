import React from "react";
import landing1 from "../../../Assets/Images/landing1.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <div className=" landing w-[100vw] max-h-[82vh]  md:max-h-[44rem] h-[100vh] text-primary md:px-10 md:pt-10 flex lg:flex-row flex-col items-center justify-between md:pb-10 max-w-screen-2xl">
      <div className="landing-content flex flex-col justify-center">
        <div className="h-fit flex items-center">
          <h1 className="text-3xl md:text-[3rem] lg:text-6xl font-bold text-left leading-[3rem] break-keep landing-heading">
            If you want to grow, grow exponentially.
          </h1>
        </div>
        <p className="text-[1rem] md:text-[1rem]  lg:text-[1.5rem] h-fit tracking-[2px] md:my-6">
          Embrace automation and technology to streamline operation and enhance
          efficiency.
        </p>
        <div className="landing-buttons flex justify-start items-center gap-6 h-fit pt-5 md:pt-0">
          <a
            href="/"
            class="relative inline-flex items-center justify-center  lg:mt-4  p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 h-12 w-52 transition duration-300 ease-out border border-white rounded-full shadow-md group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secoundary group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-md md:text-lg text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
              Start Now
            </span>
            <span class="relative invisible">Button Text</span>
          </a>
          <button
            onClick={handleClick}
            href="/signup"
            className="lg:mt-4 lg:ml-5  text-md md:text-lg  border border-white text-white h-12 w-52 rounded-full  hover:bg-opacity-10 "
          >
            Take our demo
          </button>{" "}
        </div>
      </div>
      <div className="landing-image relative w-1/2 flex justify-center items-center mb-[10px] mt-2">
        <img
          src={landing1}
          alt="landing1"
          className="landing-img img-1 absolute"
        />
      </div>
    </div>
  );
};

export default Landing;
