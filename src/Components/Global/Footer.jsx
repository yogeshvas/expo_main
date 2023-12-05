import React from "react";
// import { useNavigate } from 'react-router-dom';
//Icons
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import App from "../../Assets/Images/Store/app.png";
import Play from "../../Assets/Images/Store/play.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  text-primary px-10 border-b-2 border-primary max-w-screen-2xl w-full">
        <div className="comapny p-5">
          <h3 className="text-2xl font-bold">Company</h3>
          <ul className="mt-5">
            <li className="my-3 hover:underline-offset-1 transition-all">
              <button href="/">About</button>
            </li>
            <li className="my-3">
              <button href="/">Features</button>
            </li>
            <li className="my-3">
              <button>Works</button>
            </li>
            <li className="my-3">
              <button>Careers</button>
            </li>
          </ul>
        </div>
        <div className="help p-5">
          <h3 className="text-2xl font-bold">Help</h3>
          <ul className="mt-5">
            <li className="my-3">
              <button onClick={() => navigate("/")} href="/">
                Customer Support
              </button>
            </li>
            <li className="my-3">
              <button onClick={() => navigate("/")} href="/">
                Delivery Details
              </button>
            </li>
            <li className="my-3">
              <button onClick={() => navigate("/")} href="/">
                Terms & Conditions
              </button>
            </li>
            <li className="my-3">
              <button onClick={() => navigate("/")} href="/">
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>
        <div className="resources p-5">
          <h3 className="text-2xl font-bold">Resources</h3>
          <ul className="mt-5">
            <li className="my-3">
              <button onClick={() => navigate("/")} href="/">
                Free E-Books
              </button>
            </li>
            <li className="my-3">
              <button onClick={() => navigate("/")} href="/">
                Development Tutorial
              </button>
            </li>
            <li className="my-3">
              <button onClick={() => navigate("/")} href="/">
                How to-Blog
              </button>
            </li>
            <li className="my-3">
              <button onClick={() => navigate("/")} href="/">
                Youtube Playlist
              </button>
            </li>
          </ul>
        </div>
        {/* <div className="app p-5">
          <h3 className="text-2xl font-bold">Install App</h3>
          <span className="store-images flex justify-start">
            <img src={Play} alt="playstore" className="w-16 my-4 mr-4 -ml-2" />
            <img src={App} alt="appstore" className="w-16 my-4 " />
          </span>
        </div> */}
      </footer>
      <footer className="w-full max-w-screen-2xl">
        <div className="text-primary text-center py-5 flex md:flex-row flex-col px-10 md:justify-between justify-center">
          {/* <p>
            © Copyright 2023. All rights <br /> Reserved by Exponance.
          </p> */}
          <span className="social-icons flex justify-center mt-2">
            <button className="p-2 text-2xl">
              <BsInstagram />
            </button>
            {/* <button onClick={() => navigate("/")} className="p-2 text-2xl">
              <BsFacebook />
            </ button> */}
            <button onClick={() => navigate("/")} className="p-2 text-2xl">
              <BsGithub />
            </button>
            <button onClick={() => navigate("/")} className="p-2 text-2xl">
              <BsLinkedin />
            </button>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
