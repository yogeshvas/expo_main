import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Connect = () => {
  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm('service_afn90so', 'template_941rqsd', form.current, 'nZ_1Z3PxcBfBYr42P') // Replace placeholders with your actual values
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text); // Use console.error for errors
        }
      );
  };

  return (
    <div className="connect flex flex-col md:flex-row justify-center max-w-screen-2xl">
      <div className="content my-5 md:my-20 mx-24 md:max-w-[30%]">
        <h2 className="text-4xl font-bold text-primary fontl">
          Directly Connect With Us
        </h2>
      </div>
      <div className="m-8 md:mt-20">
        <form onSubmit={sendEmail} ref={form}>
          <div className="flex justify-evenly lg:flex-row flex-col">
            <input
              type="text"
              name="from_mobile"
              id="mobile"
              placeholder="Mobile"
              className="focus:outline-none px-4 py-2 mb-4 bg-primary border-4 border-secondary text-secondary rounded-xl placeholder:text-secondary placeholder:font-bold fontl placeholder-opacity-60"
            />
            <p className="my-2 mx-6 text-primary font-semibold text-xl fontl">
              OR
            </p>
            <input
              type="text"
              name="from_email"
              id="email"
              placeholder="E-Mail"
              className="focus:outline-none px-4 py-2 mb-4 bg-primary border-4 border-secondary text-secondary rounded-xl placeholder:text-secondary placeholder:font-bold fontl placeholder-opacity-60"
            />
          </div>
          <div className="flex items-center">
            <button

              type="submit" // Change "a" to "button" for form submission
              className="relative inline-flex items-center justify-center lg:mt-4 lg:ml-5 p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 h-12 w-52 transition duration-300 ease-out border border-white rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secoundary group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
                Contact Us
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connect;
