import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Icons/logo.png";
import SignIn from "../Home/SignIn";
import SignUp from "../Home/Signup";
import Services from "../../Pages/Services";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [method, setMethod] = useState(false);
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();

  const handleMethod = () => {
    console.log(method);
    setMethod(!method);
  };

  const handleHidden = () => {
    setHidden(!hidden);
  };

  const handleSignin = () => {
    setHidden(false);
    setMethod(true);
  };

  const handleSignup = () => {
    setHidden(false);
    setMethod(false);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick2 = () => {
    handleSignup();
    setIsOpen(!isOpen);
  };

  const handleClick1 = () => {
    handleSignin();
    setIsOpen(!isOpen);
  };

  const [softwaresMenuOpen, setSoftwaresMenuOpen] = useState(false);

  const handleSoftwaresButtonClick = () => {
    setSoftwaresMenuOpen(!softwaresMenuOpen);
  };

  return (
    <>
    
      {hidden ? (
        <></>
      ) : (
        <>
          {method ? (
            <SignIn handleHidden={handleHidden} handleMethod={handleMethod} />
          ) : (
            <SignUp handleHidden={handleHidden} handleMethod={handleMethod} />
          )}
        </>
      )}
      <nav className="w-full height-20rem">
        <div className="pt-[0.5rem] mx-auto px-4 sm:px-6 lg:px-8 lg:py-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button onClick={() => navigate("/")}>
                  <img className="w-40" src={Logo} alt="Logo" />
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="ml-4 flex items-center space-x-4">
                <div className="relative inline-block text-left ">
                  <button
                    onClick={handleSoftwaresButtonClick}
                    type="button"
                    className="text-gray-300 tracking-[1px] hover:bg-gray-700 hover:text-white px-3 py-3 rounded-full text-sm font-medium transition-all"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Softwares
                    <svg
                      className="-mr-1 ml-2 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      style={{ marginLeft: "5px" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {softwaresMenuOpen && (
                    <div className="drop absolute right-0 left-0 mt-1 w-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <button
                          onClick={() => navigate("/desc")}
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                          role="menuitem"
                        >
                          Shops
                        </button>

                        <button
                          onClick={() => navigate("/college")}
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                          role="menuitem"
                        >
                          College
                        </button>

                        <button
                          onClick={() => navigate("/school")}
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                          role="menuitem"
                        >
                          School
                        </button>
                        <button
                          onClick={() => navigate("/fitness")}
                          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                          role="menuitem"
                        >
                          Fitness
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => navigate("/expoLearn")}
                  className="text-gray-300 tracking-[1px] hover:bg-gray-700 hover:text-white px-3 py-3 rounded-full text-sm font-medium transition-all"
                >
                  ExpoLEARN
                  
                </button>
                <button
                  onClick={() => navigate("/Services")}
                  className="text-gray-300 tracking-[1px] hover:bg-gray-700 hover:text-white px-3 py-3 rounded-full text-sm font-medium transition-all"
                >
                  Our Services
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-gray-300 tracking-[1px] hover:bg-gray-700 hover:text-white px-3 py-3 rounded-full text-sm font-medium transition-all"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="ml-4 flex items-center space-x-4">
                <button
                  onClick={handleSignin}
                  className="text-gray-300 tracking-[1px] hover:bg-gray-700 hover:text-white px-3 py-3 rounded-full text-sm font-medium transition-all"
                >
                  Sign In
                </button>
                <button
                  onClick={handleSignup}
                  className="rounded-full text-secondary bg-primary hover:bg-gray-700 hover:text-white px-3 py-3 text-sm font-medium transition-all"
                >
                  Create Free Account
                </button>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black">
            <div className="" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button
                  onClick={() => navigate("/expoLearn")}
                  className="hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                >
                  Expo Learn
                </button>
                <button
                  onClick={() => navigate("/desc")}
                  className="hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                >
                  Shops
                </button>
                <button
                  onClick={() => navigate("/school")}
                  className="hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                >
                  School
                </button>
                <button
                  onClick={() => navigate("/college")}
                  className="hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                >
                  College
                </button>
                <button
                  onClick={() => navigate("/fitness")}
                  className="hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                >
                  Fitness
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="tracking-[1px] hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                >
                  Contact Us
                </button>

                <button
                   onClick={() => navigate("/Services")}
                   className="text-gray-300 tracking-[1px] hover:bg-gray-700 hover:text-white px-3 py-3 rounded-full text-sm font-medium transition-all"
                >
                   Our Services
                </button>
                <button
                  onClick={handleClick1}
                  // onClick={() => { handleSignin() }}
                  className="text-secondary bg-primary hover:bg-gray-200 hover:text-secondary block px-3 py-3  rounded-md text-base font-medium"
                  style={{ marginBottom: "17px" }}
                >
                  Sign In
                </button>
                <button
                  onClick={handleClick2}
                  // onClick={() => { handleSignup() }}
                  className="text-secondary bg-primary hover:bg-gray-200 hover:text-secondary block px-3 py-3 rounded-md text-base font-medium"
                >
                  Create Free Account
                </button>
              </div>
            </div>
            <button
              onClick={toggleNavbar}
              className="md:absolute top-0 right-0 m-4 p-2 text-gray-400 hover:text-secondary"
              aria-label="Close menu"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
