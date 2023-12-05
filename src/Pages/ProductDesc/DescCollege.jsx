// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../Assets/Icons/logo.png";
// import mobile from "../../Assets/mobilemockup04_final.png";
// import "./ProductDesc.css";
// const DescCollege = () => {
//   return (
//     <>

//       <div className="main">
//         <div className="sectionD">
//           <div className="headerD">
//             <NavLink to="/">
//               <img className="logo" src={logo} alt="" srcset="" />
//             </NavLink>

//             <div className="navsD">
//               <ul>
//                 <li>
//                   <NavLink to="/">Home</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/desc">Shops</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/fitness">Fitness</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/college">College</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/school">Schools</NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="contentD">
//             <div className="circlemob"></div>
//             <div className="circleDi"></div>
//             <div className="textAndPriceContainer">
//               <div className="textBoxD">
//                 <h2>
//                   Struggling with College? <br /> Easy! <span> Exponance </span>
//                 </h2>
//                 <p>
//                   Feeling overwhelmed by college management? Meet Exponance{" "}
//                 </p>
//               </div>
//               <div className="price">
//                 <a href="#">See Pricing</a>
//               </div>
//             </div>
//             <div className="imgBoxD">
//               <img
//                 style={{ width: "90%", maxWidth: "700px" }}
//                 src={mobile}
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DescCollege;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../Assets/Icons/logo.png";
import mobile from "../../Assets/mobilemockup01_final.png";

function EL_section1() {
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
    <Maincontent className="main">
      <div className="sectionD">
        <div className="headerD">
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
                      href="/"
                      className="hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                    >
                      Softwares
                    </button>

                    <button
                      onClick={() => navigate("/contact")}
                      className="tracking-[1px] hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                    >
                      Contact Us
                    </button>

                    {/* <button
                      onClick={() => navigate("/careers")}
                      className="tracking-[1px] hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                    >
                      Reviews
                    </button> */}
                    <button
                      onClick={handleClick1}
                      // onClick={() => { handleSignin() }}
                      className=" tracking-[1px] hover:bg-gray-200 hover:text-secondary block px-3 py-3 rounded-md text-base font-medium"
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
        </div>

        <div className="contentD">
          <div className="circlemob"></div>
          <div className="circleDi"></div>
          <div className="textAndPriceContainer">
            <div className="textBoxD">
              <h2 style={{ fontWeight: "400", fontFamily: "monospace " }}>
                Struggling with College? <br /> Easy!{" "}
                <span style={{ fontWeight: "900" }}> Exponance </span>
              </h2>
              <p style={{ fontWeight: "300" }}>
                Feeling overwhelmed by college management? Meet Exponance.{" "}
              </p>
            </div>
            <div className="price">
              <a href="#">See Pricing</a>
            </div>
          </div>
          <div className="imgBoxD">
            <img
              style={{ width: "90%", maxWidth: "700px" }}
              src={mobile}
              alt=""
            />
          </div>
        </div>
      </div>
    </Maincontent>
  );
}
const Maincontent = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  .sectionD {
    font-family: "Poppins";
    width: 100%;
    height: 100%;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(17, 16, 16);
    color: white;
    overflow: hidden;
  }
  .logo {
    width: 150%;
    position: relative;
    max-width: 200px;
  }
  .headerD {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(17, 16, 16);
  }
  .headerD ul {
    position: relative;
    display: flex;
  }

  .headerD ul li {
    list-style: none;
  }
  .headerD ul li a {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-weight: 400;
    margin-left: 40px;
    text-decoration: none;
    transition: 0.15s;
    margin-top: 10px;
  }
  .headerD ul li a:hover {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.9);
    color: rgb(17, 16, 16);
    border-radius: 40px;
  }

  .contentD {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    height: 80vh;
  }

  .contentD .textBoxD {
    position: relative;
    max-width: 900px;
    margin-right: 5rem;
  }

  .contentD .textBoxD h2 {
    color: #fff;
    font-size: 4em;
    line-height: 1.4em;
    font-weight: 500;
  }

  .contentD .textBoxD h2 span {
    color: #d6ad60;
    font-weight: 900;
    font-size: 1.2em;
  }
  .contentD .textBoxD p {
    color: #fff;
    font-weight: 600;
    font-size: 1.5em;
  }

  .textAndPriceContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 5rem;
  }

  .price {
    text-align: center;
    margin-top: 20px;
  }
  .contentD .textAndPriceContainer a {
    display: inline-block;
    margin-top: 20px;
    padding: 8px 20px;
    background: #fff;
    color: rgb(17, 16, 16);
    border-radius: 40px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    transition: 0.15s;
  }

  .contentD .textAndPriceContainer a:hover {
    opacity: 50%;
    background-color: rgb(17, 16, 16);
    color: white;
  }
  .contentD .textBoxD p {
    margin-top: 2rem;
  }
  .contentD .imgBoxD {
    width: 400px;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    margin-top: 0px;
    min-width: 400px;
    z-index: 1;
  }

  .circleDi {
    position: absolute;
    left: 60%;
    top: 40%;
    width: 100rem;
    height: 100rem;
    /* width: 100%;
    height: 100%; */

    background-color: #d6ad60;
    border-radius: 50%;
  }

  @media (max-width: 991px) {
    .headerD {
      padding: 20px;
    }
    .headerD .logo {
      position: relative;
      max-width: 200px;
    }

    .headerD ul {
      display: none;
    }

    .sectionD {
      padding: 0px;
    }

    .contentD {
      height: auto;
      flex-direction: column;
      margin-top: 100px;
    }
    .contentD .textBoxD h2 {
      font-size: 2.5em;
      margin-bottom: 15px;
    }
    .contentD .textBoxD {
      margin-right: 0rem;
      padding: 2rem;
      max-width: 100%;
    }

    .circleDi {
      display: none;
    }
    .circlemob {
      position: absolute;
      bottom: 0;

      width: 100%;
      height: 100%;

      background-color: #d6ad60;
      clip-path: circle(500px at center bottom);
    }
    .textAndPriceContainer {
      margin-right: 0rem;
    }
    .price {
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-left: 30px;
    }
    .contentD .textAndPriceContainer a {
      margin-top: 10px;
      margin-bottom: 30px;
    }
  }

  .main {
    overflow: hidden;
  }
`;
export default EL_section1;
